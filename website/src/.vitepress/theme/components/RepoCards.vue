<script setup lang="ts">
import { computed, ref } from 'vue'

interface Repo {
  id: string
  name: string
  url: string
  format: 'pb' | 'json'
  tag: string
  tagType: 'primary' | 'community' | 'warning' | 'info'
  description: string
  website?: string
  sourceCode?: string
}

const searchQuery = ref('')
const selectedFormat = ref<'all' | 'pb' | 'json'>('all')
const copiedId = ref<string | null>(null)

const repos: Repo[] = [
  {
    id: 'keiyoushi',
    name: 'Keiyoushi',
    url: 'https://raw.githubusercontent.com/keiyoushi/extensions/repo/index.pb',
    format: 'pb',
    tag: 'Primary',
    tagType: 'primary',
    description: 'Maintained by former Tachiyomi contributors. Primary repository with the largest selection of extensions.',
    website: 'https://keiyoushi.github.io/',
    sourceCode: 'https://github.com/keiyoushi/extensions-source'
  },
  {
    id: 'yuzono',
    name: 'Yūzōnō',
    url: 'https://raw.githubusercontent.com/yuzono/manga-repo/repo/index.pb',
    format: 'pb',
    tag: 'Community',
    tagType: 'community',
    description: 'By Komikku dev. Mirrors Keiyoushi repository with a few extra custom extensions.',
    website: 'https://yuzono.github.io',
    sourceCode: 'https://github.com/yuzono/tachiyomi-extensions'
  },
  {
    id: 'fakku',
    name: 'Fucked by FAKKU',
    url: 'https://raw.githubusercontent.com/mojuru/cursed-manga-repo/repo/index.pb',
    format: 'pb',
    tag: 'DMCA Archive',
    tagType: 'warning',
    description: 'Contains extensions removed from Keiyoushi due to DMCA takedown requests. Maintained by Komikku dev.',
    sourceCode: 'https://github.com/mojuru/cursed-manga-repo'
  },
  {
    id: 'kavita',
    name: 'Kavita',
    url: 'https://raw.githubusercontent.com/Kareadita/tach-extension/repo/index.min.json',
    format: 'json',
    tag: 'Self-Hosted',
    tagType: 'info',
    description: 'Kavita server integration extension for reading self-hosted manga/comics.',
    sourceCode: 'https://github.com/Kareadita/tach-extension/'
  },
  {
    id: 'suwayomi',
    name: 'Suwayomi',
    url: 'https://raw.githubusercontent.com/Suwayomi/tachiyomi-extension/repo/index.min.json',
    format: 'json',
    tag: 'Web Server',
    tagType: 'info',
    description: 'Suwayomi web server compatibility extensions repository.',
    sourceCode: 'https://github.com/Suwayomi/tachiyomi-extension'
  },
  {
    id: 'copymanga',
    name: 'copymanga-copy20',
    url: 'https://raw.githubusercontent.com/LittleSurvival/copymanga-copy20/repo/index.min.json',
    format: 'json',
    tag: 'Custom',
    tagType: 'info',
    description: 'Dedicated repository for CopyManga extension source.',
    sourceCode: 'https://github.com/LittleSurvival/copymanga-copy20'
  }
]

const filteredRepos = computed(() => {
  return repos.filter(repo => {
    const matchesSearch = repo.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          repo.description.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          repo.tag.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    const matchesFormat = selectedFormat.value === 'all' || repo.format === selectedFormat.value
    
    return matchesSearch && matchesFormat
  })
})

function copyToClipboard(url: string, id: string) {
  navigator.clipboard.writeText(url).then(() => {
    copiedId.value = id
    setTimeout(() => {
      if (copiedId.value === id) {
        copiedId.value = null
      }
    }, 2000)
  })
}

function getInstallUrl(url: string) {
  return `tachiyomi://add-repo?url=${encodeURIComponent(url)}`
}
</script>

<template>
  <div class="repo-cards-container">
    <!-- Search and Filter Controls -->
    <div class="repo-controls">
      <div class="search-box">
        <svg class="search-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search repositories..."
          class="search-input"
        />
      </div>

      <div class="filter-pills">
        <button 
          :class="['filter-btn', { active: selectedFormat === 'all' }]"
          @click="selectedFormat = 'all'"
        >
          All
        </button>
        <button 
          :class="['filter-btn', { active: selectedFormat === 'pb' }]"
          @click="selectedFormat = 'pb'"
        >
          index.pb
        </button>
        <button 
          :class="['filter-btn', { active: selectedFormat === 'json' }]"
          @click="selectedFormat = 'json'"
        >
          index.min.json
        </button>
      </div>
    </div>

    <!-- Repository Cards Grid -->
    <div class="repo-grid">
      <div 
        v-for="repo in filteredRepos" 
        :key="repo.id" 
        class="repo-card"
      >
        <div class="card-header">
          <div class="repo-title-wrap">
            <h3 class="repo-name">{{ repo.name }}</h3>
            <span :class="['badge', `badge-${repo.tagType}`]">{{ repo.tag }}</span>
          </div>
          <span class="format-badge">{{ repo.format === 'pb' ? 'Protobuf' : 'JSON' }}</span>
        </div>

        <p class="repo-desc">{{ repo.description }}</p>

        <div class="url-preview">
          <code>{{ repo.url }}</code>
        </div>

        <div class="card-actions">
          <a 
            :href="getInstallUrl(repo.url)" 
            class="action-btn install-btn"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Add Repo (Sideload)
          </a>

          <button 
            @click="copyToClipboard(repo.url, repo.id)" 
            :class="['action-btn', 'copy-btn', { copied: copiedId === repo.id }]"
          >
            <svg v-if="copiedId !== repo.id" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg v-else viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {{ copiedId === repo.id ? 'Copied!' : 'Copy URL' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.repo-cards-container {
  margin: 1.5rem 0;
}

.repo-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 640px) {
  .repo-controls {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.search-box {
  position: relative;
  flex: 1;
  max-width: 400px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-2);
}

.search-input {
  width: 100%;
  padding: 0.6rem 1rem 0.6rem 2.4rem;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-dimm);
}

.filter-pills {
  display: flex;
  gap: 0.5rem;
}

.filter-btn {
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.filter-btn.active {
  background-color: var(--vp-c-brand-1);
  color: #ffffff;
  border-color: var(--vp-c-brand-1);
}

.repo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .repo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.repo-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 1.25rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  backdrop-filter: blur(8px);
}

.repo-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 20px -4px rgba(0, 0, 0, 0.08);
}

.dark .repo-card:hover {
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.4);
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  gap: 0.5rem;
}

.repo-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.repo-name {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.badge {
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.badge-primary {
  background-color: var(--vp-c-green-soft);
  color: var(--vp-c-green-1);
}

.badge-community {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.badge-warning {
  background-color: var(--vp-c-yellow-soft);
  color: var(--vp-c-yellow-1);
}

.badge-info {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
}

.format-badge {
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  background: var(--vp-c-bg-mute);
  padding: 0.2rem 0.45rem;
  border-radius: 4px;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.repo-desc {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem 0;
  flex-grow: 1;
}

.url-preview {
  background-color: var(--vp-c-bg-mute);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
}

.url-preview code {
  font-size: 0.78rem;
  color: var(--vp-c-brand-1);
  word-break: break-all;
}

.card-actions {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none !important;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.install-btn {
  background-color: var(--vp-c-brand-1);
  color: #ffffff !important;
  flex: 1;
}

.install-btn:hover {
  background-color: var(--vp-c-brand-2);
}

.copy-btn {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.copy-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.copy-btn.copied {
  background-color: var(--vp-c-green-soft);
  color: var(--vp-c-green-1);
  border-color: var(--vp-c-green-1);
}
</style>
