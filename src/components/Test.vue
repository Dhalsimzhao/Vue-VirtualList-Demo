<template>
	<h1>{{ msg }}</h1>
	<h2>{{ subTitle }}</h2>
</template>

<script>
export default {
  data () {
    return {
      msg: 'I Love Melody',
      subTitle: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>