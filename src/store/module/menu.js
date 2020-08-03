const state = {
  //设置属性
  menuItems:{}

}

const getters = {
  //获取属性的状态
  getMenuItems: state => state.menuItems
}

const mutations = {
  //改变属性的状态
  setMenuItems(state,data){
    state.menuItems = data
  },
  //匹配对象，删除菜单数据（menuItems）
  removeMenuItems(state,data){
    state.menuItems.forEach((item,index) => {
      if(item == data){
        state.menuItems.splice(index,1)
      }
    });
  },
  //菜单内添加新内容
  pushToMenuItems(state,data){
    state.menuItems.push(data)
  },
}

const actions = {

}

export default{
  state,
  getters,
  mutations,
  actions
}