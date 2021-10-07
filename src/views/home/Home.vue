<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script>
import StaticPart from './StaticPart.vue'
import Nearby from './Nearby.vue'
import Docker from './Docker.vue'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  bottom: 0.5rem;
  right: 0;
  top: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
  overflow-y: auto;
}

</style>
