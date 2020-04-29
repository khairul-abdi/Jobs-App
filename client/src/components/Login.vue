<template>
  <div class="login">
    <div class="line">
      <div class="line-one"></div>
      <div class="line-two"></div>
      <div class="line-three"></div>
    </div>
    <div class="sign-in">
      <h1 class="title">Sign In</h1>
      <p>Sign in and start exploring your opportunity!</p>
      <form action="" class="form" @submit.prevent="login">
        <input type="text" id="username" placeholder="Username" v-model="username"/>
        <input type="password" id="password" placeholder="Password" v-model="password" />
        <input type="submit" value="Login" />
      </form>
      <p>Forgot your password?</p>
    </div>
    <div id="footer" class="bg">
      <img src="../assets/img.png" class="img" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post('/users/login',
      {
        username: this.username,
        password: this.password
      }).then(res => {
        localStorage.setItem('usertoken', res.data)
        this.username = ''
        this.password = ''
        router.push({ name: 'Dashboard'})
      }).catch(err => {
        console.log(err)
      })
      this.emitMethod()
    },
    emitMethod() {
      EventBus.$emit('logged-in', 'loggedin')
    }
  }
}
</script>

<style scoped>
html,body {
  margin: 0;
  padding: 0;
  background-color: #495a50 !important;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background-color: #495a50 !important;
}

* {
  box-sizing: border-box;
}

.login {
  background-color: #495a50;
  width: 100%;
  color: white;
}


.line {
  margin: 20px auto 0 20px;
  display: flex;
}

.line-one {
  background-color: #f5b971;
  width: 15px;
  height: 80px;
  margin-right: 10px;
}

.line-two {
  background-color: #fdd998;
  width: 15px;
  height: 60px;
  margin-right: 10px;
}

.line-three {
  background-color: #ffecc7;
  width: 15px;
  height: 40px;
}

.title {
  margin: 0 auto;
  padding: 0;
}

div p {
  margin: 10px;
}

.sign-in {
  position: relative;
  margin: auto;
  width: 485px;
  text-align: center;
  z-index: 1;
}

.form {
  margin-top: 30px;
}

#footer {
  position: fixed;
  bottom: 0;
  margin: 0;
  padding: 0;
}

input[type="text"], input[type="password"] {
  width: 100%;
  box-sizing: border-box;
  padding: 18px;
  border: none;
  background-color: #9da6a1;
  border-radius: 4px;
  margin: 10px auto;
}

::placeholder {
  color: white;
  font-size: 16px;
}

input[type="submit"] {
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  color: white;
  background-color: #f5b971;
  padding: 18px;
  border: none;
  border-radius: 4px;
  margin: 10px auto;
  font-size: 16px;
}

input[type="submit"]:hover {
  background-color: #f8b35f;
}

@media screen and (min-width: 500px) {
  input[type="submit"] {
    width: 100%;
  }
}
</style>