<template>
  <div>
    <div class="navbar border-bottom"></div>

    <div class="body">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  async mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  width: 100%;
}

.body {
  background: $primary-bg;
  height: calc(100vh - 50px);
}
</style>
