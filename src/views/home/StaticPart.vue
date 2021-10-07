<template>
  <div class="position">
    <span class="iconfont position_icon">&#xe619;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont position_notice">&#xe811;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe741;</span>
    <span class="search_text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img
      class="banner_img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>
  <div class="icons">
    <div class="icons_item" v-for="item in iconList" :key="item">
      <img
        class="icons_item_img"
        :src="item.icon"
        alt=""
      />
      <p class="icons_item_desc">{{item.desc}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'StaticPart',
  setup () {
    const iconList = ref([
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/超市.png',
        desc: '超市便利'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
        desc: '菜市场'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
        desc: '水果店'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
        desc: '鲜花绿植'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
        desc: '医药健康'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/家居.png',
        desc: '家居时尚'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
        desc: '烘焙蛋糕'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/签到.png',
        desc: '签到'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
        desc: '大牌免运'
      },
      {
        icon: 'http://www.dell-lee.com/imgs/vue3/红包.png',
        desc: '红包套餐'
      }
    ])
    return {
      iconList
    }
  }
}
</script>

<style lang="scss" scoped>
.position {
    color: #333;
    overflow: hidden;
    padding: 0.16rem 0.24rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    position: relative;
    white-space: nowrap;
    text-overflow: ellipsis;
    &_icon {
      position: relative;
      top: 0.01rem;
      font-size: 0.2rem;
    }
    &_notice {
      position: absolute;
      top: 0.17rem;
      right: 0;
      font-size: 0.2rem;
    }
  }
  .search {
    line-height: 0.32rem;
    background: #f5f5f5;
    color: #b7b7b7;
    border-radius: 0.16rem;
    font-size: 0.14rem;
    margin-bottom: 0.12rem;
    .iconfont {
      font-size: 0.2rem;
      position: relative;
      top: 0.02rem;
      padding: 0 0.08rem 0 0.16rem;
      display: inline-block;
    }
    &_text {
      display: inline-block;
    }
  }
  .banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    &_img {
      width: 100%;
    }
  }
  .icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;
    &_item {
      width: 20%;
      &_img {
        width: 0.4rem;
        height: 0.4rem;
        margin: 0 auto;
        display: block;
      }
      &_desc {
        text-align: center;
        margin: 0.06rem 0 0.16rem 0;
        color: #333;
      }
    }
  }
  .gap {
    height: 0.1rem;
    background: #f1f1f1;
    margin: 0 -0.18rem;
  }
</style>
