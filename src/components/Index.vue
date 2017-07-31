<template>
  <div ref="box" class="hello">
    <div v-for="(item, index) in lists" class="item">
      <img :src="item.img" v-lazyload="item['img']">
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      lists: []
    }
  },
  methods: {

  },
  created () {
    let that = this
    let xhr = new XMLHttpRequest()
    xhr.open('post', '/getList', true)
    xhr.onreadystatechange = function(){
      if(this.status === 200 && this.readyState === 4){
        that.lists = JSON.parse(this.responseText).lists;
      }
    }
    xhr.send(null)
  },
  mounted () {
    this.lazyLoad(this.$refs.box)
  }
}
</script>
<style>
  .hello{
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .item{
    width: 100%;
    height: 100%;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
