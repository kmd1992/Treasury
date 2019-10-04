<template>
    <div class="container-fluid">
        <router-link :to="{name: 'home'}" id="brand">TREASURY</router-link>

        <ul class='main-nav'>
            <li>
                <router-link :to="{ path: '/' }"><i class="fa fa-dashboard"></i>&nbsp;&nbsp;DASHBOARD</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'calendar'}"><i class="fa fa-calendar"></i>&nbsp;&nbsp;CALENDAR</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'client'}"><i class="fa fa-users"></i>&nbsp;&nbsp;CLIENTS</router-link>
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
    methods: {
      logout: function(){
        this.$auth.logout();
        this.$router.push({ name: 'home', query: { redirect: '/' } });
      }
    }
  }
</script>
<style>
body{
    background: #f4f4f4;
}
</style>