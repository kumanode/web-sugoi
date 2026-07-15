import fs from 'node:fs'
import path from 'node:path'
import { defineLoader } from 'vitepress'

export default defineLoader({
  async load() {
    let latestTag = 'v1.0.0-Sugoi'
    let latestDate = new Date().toISOString()
    let latestBody = '- Sugoi app launched'
    
    try {
      const xmlPath = path.resolve(__dirname, '../../../changelog_release.xml')
      const xmlContent = fs.readFileSync(xmlPath, 'utf8')
      
      const versionRegex = /<changelogversion\s+versionName="([^"]+)"\s+changeDate="([^"]*)"\s*>([\s\S]*?)<\/changelogversion>/g
      const textRegex = /<changelogtext>([\s\S]*?)<\/changelogtext>/g
      
      const match = versionRegex.exec(xmlContent)
      if (match) {
        latestTag = match[1]
        latestDate = match[2] || latestDate
        const content = match[3]
        
        const bullets = []
        let textMatch
        while ((textMatch = textRegex.exec(content)) !== null) {
          bullets.push(textMatch[1].trim())
        }
        latestBody = bullets.map(b => `- ${b}`).join('\n')
      }
    } catch (e) {
      console.error('Failed to read version from changelog_release.xml:', e)
    }

    const dummyRelease = {
      tag_name: latestTag,
      published_at: latestDate,
      html_url: `https://github.com/kumanode/sugoi/releases/tag/${latestTag}`,
      assets: [],
      body: latestBody,
      author: {
        login: 'kumanode'
      }
    }

    return {
      stable: dummyRelease,
      beta: dummyRelease
    }
  },
})
