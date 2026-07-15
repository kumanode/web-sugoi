import fs from 'node:fs'
import path from 'node:path'
import { defineLoader } from 'vitepress'

export default defineLoader({
  async load() {
    try {
      const xmlPath = path.resolve(__dirname, '../../../changelog_release.xml')
      const xmlContent = fs.readFileSync(xmlPath, 'utf8')
      
      const versionRegex = /<changelogversion\s+versionName="([^"]+)"\s+changeDate="([^"]*)"\s*>([\s\S]*?)<\/changelogversion>/g
      const textRegex = /<changelogtext>([\s\S]*?)<\/changelogtext>/g
      
      const releases = []
      let match
      while ((match = versionRegex.exec(xmlContent)) !== null) {
        const tagName = match[1]
        const changeDate = match[2] || new Date().toISOString()
        const content = match[3]
        
        const bullets = []
        let textMatch
        while ((textMatch = textRegex.exec(content)) !== null) {
          bullets.push(textMatch[1].trim())
        }
        
        releases.push({
          tag_name: tagName,
          published_at: changeDate,
          body: bullets.map(b => `- ${b}`).join('\n'),
          author: { login: 'kumanode' },
          assets: []
        })
      }
      return releases
    } catch (e) {
      console.error('Failed to parse local changelog_release.xml:', e)
      return []
    }
  },
})
