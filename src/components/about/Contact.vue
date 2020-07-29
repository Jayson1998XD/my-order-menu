<template>
  <div class="card text-dark bg-link mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-tittle">联系我们</h4>
      <p class="card-text">1104426533@qq.com</p>

      <router-link :to="{name:'phoneNumber'}">电话</router-link>
      <router-link :to="{name:'personName'}">联系人</router-link>

      <router-view></router-view>
      
    </div>
  </div>
</template>