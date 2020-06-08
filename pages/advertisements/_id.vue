<template>
    <div class="container">
         <aside>
            <h3>advertisements</h3>
            <article>
                <h1 class="title">{{advertisement}}</h1>
                <!-- <p>{{advertisement.advertisementlink}}</p> -->
            </article>
         </aside>
    </div>
</template>

<script>
export default {
    middleware: ' authenticated',
    data () {
        return {
            id: this.$route.params.id,
            advertisements:[]
        }
    },
    created () {
        var requestOptions = {
        method: 'GET',
        headers: {
            "Authorization": "Bearer "+this.$store.state.auth.accessToken
        },
        redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/v1/advertisement/", requestOptions)
        .then(response => response.json())
        .then(result => {
             this.advertisements.push(result.success)
        })
        .catch(error => console.log('error', error));
    },
    computed: {
         advertisement () {
             console.log(this.advertisements)
            return this.advertisements.find(item => item.id === this.id)
        },
    }
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }
  article * {
    margin-bottom: 1rem;
  }
  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }
  .title {
    font-size: 2rem;
  }
  h3{
      font-size: 1.2rem;
  }
</style>