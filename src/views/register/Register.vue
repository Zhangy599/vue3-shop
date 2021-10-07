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
    <div class="wrapper_input">
      <input
        class="wrapper_input_content"
        placeholder="确认密码"
        type="password"
        v-model="checkPassword"
      />
    </div>
    <div class="wrapper_register-button" @click="handlerRegister">注册</div>
    <div class="wrapper_register-link" @click="handlerLoginClick">已有账号,前往登陆</div>
    <Toast v-if="toastData.showToast" :message="toastData.toastMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast.vue'

const useRegisterEffect = (showToast) => {
  const router = useRouter()

  const userInfo = reactive({ username: '', password: '', checkPassword: '' })
  const handlerRegister = async () => {
    const result = await post('/api/user/register', {
      username: userInfo.username,
      password: userInfo.password
    })
    try {
      if (result?.errno === 0) {
        console.log(123)
        router.push({ name: 'Login' })
      } else {
        showToast('注册失败')
      }
    } catch (error) {
      showToast('请求失败')
    }
  }
  return {
    userInfo,
    handlerRegister
  }
}
const handlerRegisterClick = () => {
  const router = useRouter()
  const handlerLoginClick = () => {
    router.push({ name: 'Login' })
  }
  return {
    handlerLoginClick
  }
}

export default {
  name: 'Login',
  setup () {
    const { toastData, showToast } = useToastEffect()
    const { userInfo, handlerRegister } = useRegisterEffect(showToast)
    const { handlerLoginClick } = handlerRegisterClick()
    return {
      handlerLoginClick,
      handlerRegister,
      ...toRefs(userInfo),
      toastData
    }
  },
  components: {
    Toast
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
    border-radius: .06rem;
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
  &_register-button{
    margin: .32rem .4rem .16rem .4rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    color: #fff;
    height: .48rem;
    font-size: .16rem;
    text-align: center;
    line-height: .48rem;
  }
  &_register-link{
    font-size: .14rem;
    color: #777;
    text-align: center;
  }
}
</style>
