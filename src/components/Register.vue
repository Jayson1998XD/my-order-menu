<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img src="../../src/assets/logo.jpg" alt="" class="mx-auto d-block">
          <form @submit.prevent="onSubmit">
            <div class="from-group">
              <label for="email">邮箱</label>
              <input 
              type="email"
              class="form-control"
              v-model="email"
              >
              </div>
              <div class="from-group">
              <label for="password">密码</label>
              <input 
              type="password"
              class="form-control"
              v-model="password"
              >
              </div>
              <div class="from-group">
              <label for="password1">确认密码</label>
              <input 
              type="password"
              class="form-control"
              v-model="password1"
              >
            </div>
            <button type="submit" class="btn btn-clock btn-success">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
img{
  width: 110px;
  height: 110px;
}
</style>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      email:'',
      password:'',
      password1:''
    }
  },
  methods:{
    onSubmit(){
      if(this.password === this.password1){
        const formData = {
          email:this.email,
          password:this.password,
          password1:this.password1
        }

        axios.post('/users.json',formData)
              .then(res => this.$router.push({name:'loginLink'}))
      }else{
        alert("两次密码不一致")
      }
    }
  }
}
</script>