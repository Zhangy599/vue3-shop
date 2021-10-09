<template>
  <div class="content">
    <div class="category">
      <div class="category_item category_item_active">全部商品</div>
      <div class="category_item">秒杀</div>
      <div class="category_item">新鲜水果</div>
      <div class="category_item">休闲食品</div>
      <div class="category_item">时令蔬菜</div>
      <div class="category_item">肉蛋家禽</div>
    </div>
    <div class="product">
      <div class="product_item">
        <img class="product_item_img" src="http://www.dell-lee.com/imgs/vue3/near.png" alt="">
        <div class="product_item_detail">
          <h4 class="product_item_title">番茄250g/份番茄250g/份番茄250g/份番茄250g/份番茄250g/份番茄250g/份番茄250g/份番茄250g/份番茄250g/份番茄250g/份</h4>
          <p class="product_item_sales">月售10件</p>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span>33.6
            <span class="product_item_origin">&yen;66.6</span>
          </p>
        </div>
        <div class="product_number">
          <span class="product_number_minus">-</span>
          0
          <span class="product_number_plus">+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style lang="scss" scoped>
.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category{
  width: 0.76rem;
  background: #F5F5F5;
  height: 100%;
  overflow-y: scroll;
  &_item{
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: #333;
    &_active{
      background: #FFF;
    }
  }
}

.product{
  flex: 1;
  overflow-y: scroll;
  &_item{
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid #F1F1F1;
    &_detail{
      overflow: hidden;
    }
    &_img{
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }
    &_title{
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #333;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &_sales{
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: #333;
    }
    &_price{
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: #E93B3B;
    }
    &_yen{
      font-size: .12rem;
    }
    &_origin{
      line-height: .2rem;
      font-size: 0.12em;
      color: #999;
      text-decoration: line-through;
      margin-left: .06rem;
    }
  .product_number{
    position: absolute;
    right: 0;
    bottom: .12rem;
    &_minus, &_plus{
      display: inline-block;
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      font-size: .2rem;
      text-align: center;
      line-height: .16rem;
    }
    &_minus{
      border: .01rem solid #666 ;
      color: #666;
      margin-right: .05rem;
    }
    &_plus{
      background: #0091FF;
      color: #fff;
      margin-left: .05rem;
    }
  }
  }
}
</style>
