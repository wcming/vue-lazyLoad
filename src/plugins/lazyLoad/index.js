/** Created by lixiangyang on 2017/7/31...*/
module.exports = {
  install(Vue){

    let _imgs = []

    function lazyLoad(scrollEl){
      scrollEl = scrollEl || this.$el
      scrollEl.addEventListener('scroll', function () {
        _imgs.forEach((item, index, arr) => {
          let {height, top} = item.getBoundingClientRect()
          if(top <= height){
            console.log(item.dataset['lazy_img_url']);
            delete arr[index];
          }
        })
      })
    }

    Vue.prototype.lazyLoad = lazyLoad

    Vue.directive('lazyload', {
      bind (el, binding) {
        el.dataset['lazy_img_url'] = binding.value
        _imgs.push(el)
      }
    })
  }
}
