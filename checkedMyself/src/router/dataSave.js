// const token = 'todos-vuejs'

export default  {
  fetch () {
    return localStorage.getItem("token") || ''
  },
  save (todos) {    // watch所监听的函数名称
    localStorage.setItem("token", todos);
  }
}
