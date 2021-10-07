<template>
  <div class="docker">
    <div :class="{'docker_item':true, 'docker_item--active':index === 0}" v-for="(item,index) in dockerList" :key="item">
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker_title">{{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { icon: '&#xe607;', text: '首页' },
      { icon: '&#xe68e;', text: '购物车' },
      { icon: '&#xe63e;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return {
      dockerList
    }
  }
}
</script>

<style lang="scss" scoped>
.docker {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
  display: flex;
  padding: 0 0.18rem;
  box-sizing: border-box;
  color: #333;
  &_item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: 0.18rem;
      margin: 0.07rem 0 0.02rem 0;
    }
    &_title {
      font-size: 0.2rem;
      transform: scale(0.5 0.5);
      transform-origin: center top;
    }
    &--active {
      color: #1fa4fc;
    }
  }
}
</style>
