<template>
    <div class="container-fluid">
        <router-link :to="{name: 'home'}" id="brand">TREASURY</router-link>

        <ul class='main-nav'>
            <li>
                <router-link :to="{ path: '/' }"><i class="fa fa-dashboard"></i>&nbsp;&nbsp;Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'calendar'}"><i class="fa fa-calendar"></i>&nbsp;&nbsp;Calendar</router-link>
            </li>
        </ul>
        <div class="user">
            <ul class="icon-nav">
                <li>
                    <a v-if="$auth.check()" href="#" @click="logout()"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;Log out</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        routes: {
          // UNLOGGED
          unlogged: [
            /* { name: 'Register', path: 'register' }, */
            { name: 'Login', path: 'login'}
          ],
          // LOGGED USER
          user: [
            { name: 'Dashboard', path: 'dashboard' }
          ],
          // LOGGED ADMIN
          admin: [
            { name: 'Dashboard', path: 'admin.dashboard' }
          ]
        }
      }
    },
    mounted() {
      
    },
    methods: {
      logout: function(){
        this.$auth.logout();
        this.$router.push({ name: 'home', query: { redirect: '/' } });
      }
    }
  }
</script>

<style>

</style>