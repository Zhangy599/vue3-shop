<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: () => ''
    }
  }
}
export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    message: ''
  })
  const showToast = (message) => {
    toastData.showToast = true
    toastData.toastMessage = message
    setTimeout(() => { toastData.showToast = false }, 2000)
  }
  return {
    toastData,
    showToast
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.35);
  padding: 0.1rem;
  border-radius: 0.05rem;
  color: #fff;
}
</style>
