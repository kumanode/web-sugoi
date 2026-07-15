import fs from 'node:fs'
import path from 'node:path'

export default {
  async paths() {
    try {
      const xmlPath = path.resolve(__dirname, '../changelog_release.xml')
      const xmlContent = fs.readFileSync(xmlPath, 'utf8')
      const versionRegex = /<changelogversion\s+versionName="([^"]+)"/g
      const tags = []
      let match
      while ((match = versionRegex.exec(xmlContent)) !== null) {
        tags.push(match[1])
      }
      return tags.map(tag => ({ params: { tag } }))
    } catch (e) {
      console.error('Failed to load paths from changelog_release.xml:', e)
      return []
    }
  },
}
