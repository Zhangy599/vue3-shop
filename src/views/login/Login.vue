<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png" class="wrapper_img" />
    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        placeholder="请输入用户名"
        type="text"
        v-model="username"
      />
    </div>
    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        placeholder="请输入密码"
        type="password"
        v-model="password"
      />
    </div>
    <div class="wrapper_login-button" @click="handlerClick">登陆</div>
    <div class="wrapper_login-link" @click="handlerRegisterClick">立即注册</div>
    <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
  </div>
</template>

<script>
import { reactive, onBeforeUnmount, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'

const useLoginEffect = (showToast) => {
  const router = useRouter()

  const userInfo = reactive({ username: '', password: '' })
  const handlerClick = async () => {
    if (!userInfo.username || !userInfo.password) {
      showToast('用户名或密码不能为空')
      return
    }
    const result = await post('/api/user/login', {
      username: userInfo.username,
      password: userInfo.password
    })
    try {
      if (result?.errno === 0) {
        localStorage.setItem('isLogin', true)
        router.push({ name: 'Home' })
      } else {
        showToast('登陆失败')
      }
    } catch (error) {
      showToast('请求失败')
    }
  }
  return {
    userInfo,
    handlerClick
  }
}

const useRegisterEffect = () => {
  const router = useRouter()
  const handlerRegisterClick = () => {
    router.push({ name: 'Register' })
  }
  return {
    handlerRegisterClick
  }
}

export default {
  name: 'Login',
  components: {
    Toast
  },
  setup () {
    const { toastData, showToast } = useToastEffect()
    const { userInfo, handlerClick } = useLoginEffect(showToast)
    const { handlerRegisterClick } = useRegisterEffect()
    return {
      handlerClick,
      handlerRegisterClick,
      ...toRefs(userInfo),
      toastData
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &_img {
    display: block;
    margin: 0 auto 0.4rem auto;
    width: 0.66rem;
    height: 0.66rem;
  }
  &_input {
    background: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.06rem;
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    box-sizing: border-box;
    &_content {
      border: none;
      outline: none;
      line-height: 0.48rem;
      background: none;
      width: 100%;
      font-size: 0.16rem;
      color: #777;
      &::placeholder {
        color: #777;
      }
    }
  }
  &_login-button {
    margin: 0.32rem 0.4rem 0.16rem 0.4rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: #fff;
    height: 0.48rem;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.48rem;
  }
  &_login-link {
    font-size: 0.14rem;
    color: #777;
    text-align: center;
  }
}
</style>
