<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'concat',
  created () {
    this.msg = this.$route.query.name
  },
  data () {
    return {
      msg: 'concat'
    }
  }
}
</script>
