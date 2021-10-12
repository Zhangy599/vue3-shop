<template>
  <div class="content">
    <div class="category">
      <div
        :class="{
          category_item: true,
          category_item_active: categoryIndex === index,
        }"
        v-for="(item, index) in categories"
        :key="item"
        @click="getContentData(item.tab), (categoryIndex = index)"
      >
        {{ item.name }}
      </div>
      <!-- <div class="category_item">休闲食品</div>
      <div class="category_item">时令蔬菜</div>
      <div class="category_item">肉蛋家禽</div> -->
    </div>
    <div class="product">
      <div class="product_item" v-for="item in list" :key="item._id">
        <img class="product_item_img" :src="item.imgUrl" alt="" />
        <div class="product_item_detail">
          <h4 class="product_item_title">{{ item.name }}</h4>
          <p class="product_item_sales">月售{{ item.sales }}件</p>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span>{{ item.price }}
            <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product_number">
          <span class="product_number_minus" @click="changeCartItemInfo(shopId,item._id,item,-1)">-</span>
            {{item.count || 0}}
          <span class="product_number_plus" @click="changeCartItemInfo(shopId,item._id,item,1)">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '../../utils/request'
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

const useCurrentListEffect = (shopId) => {
  const content = reactive({
    list: [],
    categoryIndex: 0
  })
  const getContentData = async (tab) => {
    const result = await get(`/api/shop/${shopId}/products`, {
      tab
    })
    if (result.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }
  return {
    content,
    getContentData
  }
}

export default {
  name: 'Content',
  setup () {
    const categories = [
      { name: '全部商品', tab: 'all' },
      { name: '秒杀', tab: 'seckill' },
      { name: '新鲜水果', tab: 'fruit' }
    ]
    const route = useRoute()
    const shopId = route.params.id
    const { content, getContentData } = useCurrentListEffect(shopId)
    const { changeCartItemInfo } = useCommonCartEffect()
    getContentData('all')
    return {
      ...toRefs(content),
      categories,
      getContentData,
      shopId,
      changeCartItemInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
}
.category {
  width: 0.76rem;
  background: #f5f5f5;
  height: 100%;
  overflow-y: scroll;
  &_item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: #333;
    &_active {
      background: #fff;
    }
  }
}

.product {
  flex: 1;
  overflow-y: scroll;
  &_item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &_detail {
      overflow: hidden;
    }
    &_img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &_title {
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &_sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: #333;
    }
    &_price {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #e93b3b;
    }
    &_yen {
      font-size: 0.12rem;
    }
    &_origin {
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
      margin-left: 0.06rem;
    }
    .product_number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &_minus,
      &_plus {
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
        line-height: 0.16rem;
      }
      &_minus {
        border: 0.01rem solid #666;
        color: #666;
        margin-right: 0.05rem;
      }
      &_plus {
        background: #0091ff;
        color: #fff;
        margin-left: 0.05rem;
      }
    }
  }
}
</style>
