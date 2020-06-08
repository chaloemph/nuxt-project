<template>
  <div class="container">
    <div class="col-8 mx-auto">
       <h1>Sign in</h1>
      <form @submit.prevent="postLogin">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-block btn-secondary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'notAuthenticated',
  data ()  {
    return {
      email:'amang@mail.com',
      password:'123456',
    }
  },
  methods: {
    async postLogin () {
      const auth = {}
      const url = 'http://127.0.0.1:8000/api/v1/login?email='+this.email+'&password='+this.password;    
      let fetchData = { 
          method: 'POST', 
          // body: data,
          headers: new Headers()
      }
      let response = await fetch(url, fetchData)
      .then(response => response.json())
      .then(result => {
        auth.accessToken = result.access_token
        this.$store.commit('setAuth', auth)
        Cookie.set('auth', auth) 
        localStorage.setItem('token','Bearer '+auth.accessToken)
        this.$router.push('/')
        // console.log(result.access_token)
      })
      .catch(error => console.log('error', error));
    }
  }
}
</script>
