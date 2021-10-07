<template>
  <div class="wrapper">
    <div class="search">
      <div class="iconfont search_back" @click="hadnlerBack">&#xe679;</div>
      <div class="search_content">
        <span class="iconfont search_content_icon">&#xe741;</span>
        <input type="text" class="search_content_input" placeholder="请输入产品名称" />

      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true" v-if="item.imgUrl" />
    <Content />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ShopInfo from '../../components/ShopInfo.vue'
import { get } from '../../utils/request'
import Content from './Content.vue'

const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  return {
    getItemData,
    data
  }
}

const useBackRouteEffect = () => {
  const router = useRouter()
  const hadnlerBack = () => {
    router.back()
  }
  return {
    hadnlerBack
  }
}

export default {
  name: 'Shop',
  components: {
    ShopInfo,
    Content
  },
  setup () {
    const { getItemData, data } = useShopInfoEffect()
    const { hadnlerBack } = useBackRouteEffect()
    getItemData()

    return {
      ...toRefs(data),
      hadnlerBack
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 0 .18rem;
}
.search{
  margin: .14rem 0 .04rem 0;
  display: flex;
  &_back{
    width: 0.3rem;
    height: 0.32rem;
    line-height: 0.32rem;
    font-size: 0.24rem;
    color: #B6B6B6;
  }
  &_content{
    flex: 1;
    line-height: .32rem;
    background-color: #F5F5F5;
    border-radius: .16rem;
    display: flex;
    &_icon{
      width: 0.44rem;
      text-align: center;
      color: #b7b7b7;
    }
    &_input{
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      width: 100%;
      color: #333333;
      font-size: .14rem;
      &::placeholder{
        color: #333333;
      }
    }
  }
}
</style>
