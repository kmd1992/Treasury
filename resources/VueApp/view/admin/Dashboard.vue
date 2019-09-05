<template>
   <div class="main-content">
         <div class="container">
            <div class="row">
               <div class="col-12">
                     <div class="card bg-boxshadow  mb-30">
                        <div class="card-body">
                           <div class="col-12">
                                 Welcome to your administrator dashboard <br><br>

                                 <user-list :usersGetters="usersGetters" ></user-list>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
   </div>
</template>
<script>
import { mapGetters } from 'vuex';
import UserList from  './user-list';
const fetchInitialData = (store) => {
  return store.dispatch(`userStore/getUserAction`);
}
export default {
  name: 'admin.dashboard',
  components: {
    'user-list': UserList
  },
  computed: {
    ...mapGetters('userStore', [
      'usersGetters'
    ])
  },
  methods: {
    loadPosts () {
      fetchInitialData(this.$store)
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadPosts()
    }
  },
  prefetch: fetchInitialData,
  mounted () {
    this.loadPosts()
  }
}
</script>