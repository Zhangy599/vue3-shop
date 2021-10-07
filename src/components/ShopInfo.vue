<template>
  <div class="shop">
      <img
        :src="item.imgUrl"
        class="shop_img"
      />
      <div class="shop_content" :style="{'border-bottom': hideBorder && 'none'}">
        <div class="shop_content_title">{{item.name}}</div>
        <div class="shop_content_tags">
          <span class="shop_content_tag">月售：{{item.sales}}</span>
          <span class="shop_content_tag">起送：{{item.expressLimit}}</span>
          <span class="shop_content_tag">基础运费：{{item.expressPrice}}</span>
        </div>
        <p class="shop_content_highlight">
          {{item.slogan}}
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NearbyInfo',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    hideBorder: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
  display: flex;
  padding-top: 0.12rem;
  &_img {
    width: 0.56rem;
    height: 0.56rem;
    margin-right: 0.16rem;
  }
  &_content {
    padding-bottom: 0.12rem;
    border-bottom: 1px solid #f1f1f1;
    flex: 1;
    color: #333;
    &_title {
      line-height: 0.22rem;
      font-size: 0.16rem;
    }
    &_tags {
      line-height: 0.18rem;
      font-size: 0.13rem;
      margin-top: 0.08rem;
    }
    &_tag {
      margin-right: 0.16rem;
    }
    &_highlight {
      color: #e93b3b;
      font-size: 0.13rem;
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
    }
  }
}
</style>
