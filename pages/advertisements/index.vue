<template>
    <div class="container">
         <aside>
            <h3>advertisements</h3>
            <ul>
                <li v-for="advertisement in advertisements">
                    <nuxt-link :to="{name: 'advertisements-id', params: {id: advertisement.id}}">
                        {{advertisement}}
                    </nuxt-link>
                </li>
            </ul>
         </aside>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    middleware: ' authenticated',
  computed: {
    ...mapState({
      advertisements: state => state.advertisements.advertisements
    })
  },
  created () {
    // this.getData()
    // console.log(this.getData());
    
  },
  mounted () {
      this.getData()      
  },
  methods: {
      ...mapActions({
      getData: 'advertisements/nuxtServerInit',
      deleteData: 'advertisement/deleteTodo',
      updateData: 'advertisement/updateTodo',
    }),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateData(updTodo);
    }
  },
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