<template>
  <div class="cart">
    <div class="product">
        <template  v-for="item in productList" :key="item._id">
          <div v-if="item.count > 0" class="product_item">
            <div class="product_item_checked iconfont"
                 v-html="item.check ? '&#xe70f;' : '&#xe66c;'">
            </div>
            <img class="product_item_img" :src="item.imgUrl" alt="" />
            <div class="product_item_detail">
              <h4 class="product_item_title">{{ item.name }}</h4>
              <p class="product_item_price">
                <span class="product_item_yen">&yen;</span>{{ item.price }}
                <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
              </p>
            </div>
            <div class="product_number">
              <span class="product_number_minus" @click="changeCartItemInfo(shopId,item._id,item,-1)">-</span>
                {{item?.count || 0}}
              <span class="product_number_plus" @click="changeCartItemInfo(shopId,item._id,item,1)">+</span>
            </div>
          </div>
        </template>
    </div>
    <div class="check">
      <div class="check_icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check_icon_img"
        />
      <div class="check_icon_tag">{{total}}</div>
      </div>
      <div class="check_info">
        总计：<span class="check_info_price">&yen; {{price}}</span>
      </div>
      <div class="check_btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useCommonCartEffect } from './commonCartEffect'
const useCartEffect = (shopId) => {
  const { changeCartItemInfo } = useCommonCartEffect()
  const store = useStore()
  const cartList = store.state.cartList
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        count += productList[i].count
      }
    }
    return count
  })
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count * product.price
      }
    }
    return count.toFixed(2)
  })
  const productList = computed(() => {
    const productInfo = cartList[shopId] || []
    return productInfo
  })
  return {
    total,
    price,
    productList,
    changeCartItemInfo
  }
}

export default {
  name: 'Cart',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { total, price, productList, changeCartItemInfo } = useCartEffect(shopId)
    return {
      total,
      price,
      productList,
      changeCartItemInfo,
      shopId
    }
  }
}
</script>

<style lang='scss' scoped>
.cart {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
}
.product {
  flex: 1;
  overflow-y: scroll;
  background: #fff;
  &_item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid #f1f1f1;
    &_checked{
      color: #0091FF;
      font-size: .2rem;
      line-height: .5rem;
      margin-right: .2rem;
    }
    &_detail {
      overflow: hidden;
    }
    &_img {
      width: 0.46rem;
      height: 0.46rem;
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
    &_price {
      margin: .06rem 0 0 0;
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
.check {
  height: 0.49rem;
  border-top: .01rem solid #F1F1F1;
  display: flex;
  line-height: 0.49rem;
  box-sizing: border-box;
  &_icon {
    position: relative;
    width: 0.84rem;
    &_img {
      display: block;
      margin: .12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &_tag{
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      background-color: #E93B3B;
      border-radius: .1rem;
      font-size: 0.12rem;
      text-align: center;
      line-height: .2rem;
      color: #fff;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &_info{
    flex: 1;
    color: #333;
    font-size: 0.12rem;
    &_price{
      color: #E93B3B;
      font-size: .18rem;
      line-height: 0.49rem;
    }
  }
  &_btn{
    width: 0.98rem;
    color: #fff;
    font-size: 0.14rem;
    text-align: center;
    background-color: #4FB0F9;
  }
}
</style>
