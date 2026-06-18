<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['done'])
const visible = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden'

  window.addEventListener('load', () => {
    setTimeout(() => {
      visible.value = false
      setTimeout(() => {
        emit('done')
        document.body.style.overflow = ''
      }, 1000)
    }, 1000)
  })
})
</script>

<template>
  <Transition name="fade">
    <div v-if="visible" class="loader">
      <p class="tag">
        <span>GIEL</span>
        <span>BOOGAERTS</span>
        <span>STUDIO</span>
      </p>
    </div>
  </Transition>
</template>

<style scoped>
.loader {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: white;
}

.tag {
  width: 100%;
  position: fixed;
  top: 50%;
  padding: 0 1rem;
  font: var(--header-3);
  color: var(--dark-color);
  display: flex;
  justify-content: space-between;
}

.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>