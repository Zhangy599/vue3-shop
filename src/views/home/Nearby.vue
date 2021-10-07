<template>
  <div class="nearby">
    <h3 class="nearby_title">附近店铺</h3>
    <router-link :to="`/shop/${item._id}`" v-for="item in nearbyList" :key="item._id" tag="li" >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo.vue'
const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearby = async () => {
    const result = await get('/api/shop/hot-list')
    console.log(result)
    if (result.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return {
    getNearby,
    nearbyList
  }
}
export default {
  name: 'Nearby',
  components: {
    ShopInfo
  },
  setup () {
    const { nearbyList, getNearby } = useNearbyListEffect()
    onMounted(() => {
      getNearby()
    })
    return {
      nearbyList
    }
  }
}
</script>

<style lang="scss" scoped>
.nearby {
    &_title {
      margin: 0.16rem 0 0.02rem 0;
      font-size: 0.18rem;
      font-weight: normal;
    }
    a{
      text-decoration: none;
    }
  }
</style>
