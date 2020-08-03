<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <new-pizza></new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 菜单内容 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>名称</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm ">&times;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPizza from "./NewPizza.vue";
export default {
    data(){
      return {
        // getMenuItems:[]
      }
    },
    components: {
      "new-pizza": NewPizza
    },
    computed: {
      getMenuItems: {
        //在vuex中获取数据
        get(){
          // return this.$store.state.menuItems
          return this.$store.getters.getMenuItems
        },
        set() {}
      }
    },
    created(){
      // fetch("https://my-pizza-app-7f1dc.firebaseio.com/menu.json")
      //      .then(res =>{
      //        return res.json()
      //      })
      //      .then(data => {
      //        
      //      })

      this.http.get("/menu.json")
               .then(res =>{
                 return res.data;
               })
               .then(data =>{
                 let menuArray = []
                 for(let key in data){
                   data[key].id = key
                   menuArray.push(data[key])
                 }
                 //数据同步
                 this.$store.commit('setMenuItems',menuArray)
                //  this.getMenuItems = menuArray
               })
    },
    methods: {
      deleteData(item) {
        this.http
            .delete("/menu/" + item.id + ".json", {
              method: "DELETE",
              headers: {
                "content-type": "application/json"
              }
            })
            .then(res =>  res.data)
            .then(data => {
              this.$store.commit('removeMenuItems',item)
              })
            .catch(err => console.log(err))
      }
    }
}
</script>