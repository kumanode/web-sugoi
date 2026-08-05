<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  lightSrc?: string
  darkSrc?: string
  alt?: string
}>()

const tiltContainer = ref<HTMLElement | null>(null)
const transformStyle = ref('')
const glowStyle = ref('')

function handleMouseMove(e: MouseEvent) {
  if (!tiltContainer.value) return

  const rect = tiltContainer.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = -((y - centerY) / centerY) * 12
  const rotateY = ((x - centerX) / centerX) * 12
  
  transformStyle.value = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`
  glowStyle.value = `${x}px ${y}px 60px rgba(124, 58, 237, 0.25)`
}

function handleMouseLeave() {
  transformStyle.value = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  glowStyle.value = 'none'
}
</script>

<template>
  <div 
    ref="tiltContainer" 
    class="hero-tilt-wrapper"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div 
      class="hero-tilt-card" 
      :style="{ transform: transformStyle, boxShadow: glowStyle }"
    >
      <img 
        v-if="lightSrc" 
        :src="lightSrc" 
        :alt="alt || 'App Showcase'" 
        class="hero-img light-mode-img"
      />
      <img 
        v-if="darkSrc" 
        :src="darkSrc" 
        :alt="alt || 'App Showcase'" 
        class="hero-img dark-mode-img"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-tilt-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  perspective: 1000px;
}

.hero-tilt-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.15s ease-out, box-shadow 0.2s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}

.hero-img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

:deep(html:not(.dark)) .dark-mode-img {
  display: none !important;
}

:deep(html.dark) .light-mode-img {
  display: none !important;
}
</style>
