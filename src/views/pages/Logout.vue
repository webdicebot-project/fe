<template>
  <div class="p-4">
    <h1>Goodbye!</h1>
    Redirect to home page in {{ s }}s
  </div>
</template>

<script>
export default {
  data() {
    return {
      s: 3,
    }
  },
  created() {
    localStorage.removeItem('token')
    setInterval(() => {
      if (this.s == 0) {
        window.location.href = '/'
      } else this.s--
    }, 1e3)
  },
}
</script>

<style></style>
