<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  async created() {
    this.getPermission()
    this.getPriceTrx()
  },
  methods: {
    ...mapActions(['getPriceTrx', 'getPermission']),
  },
}
</script>

<style lang="scss">
// Import Main styles for this application
@import 'styles/style';

#app {
  font-family: 'Courier New', monospace;
}

a {
  text-decoration: none;
}

.copy,
.button {
  cursor: pointer;
}
</style>
