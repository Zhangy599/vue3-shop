import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList:{}
  },
  mutations: {
    addItemToCart( state, payload ){
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if( !shopInfo ){ shopInfo = {} }
      let product = shopInfo[productId]
      if( !product ){ 
        product = productInfo 
        product.count = 0
      }
      product.count +=1
      shopInfo[productId] = product
      state.cartList[shopId] = shopInfo
    }
  },
  actions: {
  },
  modules: {
  }
})
