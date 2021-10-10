<template>
  <div class="cart">
    <div class="check">
      <div class="check_icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check_icon_img"
        />
      <div class="check_icon_tag">1</div>
      </div>
      <div class="check_info">
        总计：<span class="check_info_price">&yen;128</span>
      </div>
      <div class="check_btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang='scss' scoped>
.cart {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
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
      right: .2rem;
      top: .04rem;
      width: .2rem;
      height: 0.2rem;
      background-color: #E93B3B;
      border-radius: 50%;
      font-size: 0.12rem;
      text-align: center;
      line-height: .2rem;
      color: #fff;
      transform: scale(.5);
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