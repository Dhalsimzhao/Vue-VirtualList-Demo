<template>
  <div v-for="item in items"></div>
</template>

<script>
  export default {
    data () {
      return {
        items: [1, 2, 3]
      }
    }
  }
</script>