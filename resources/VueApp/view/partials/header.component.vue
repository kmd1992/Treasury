<template>
    <div class="container-fluid">
        <router-link :to="{name: 'home'}" id="brand">TREASURY</router-link>

        <ul class='main-nav'>
            <li :class="{active : currentLocation == 'admin'}">
                <router-link :to="{ path: '/' }" exact v-on:click.native="activeRoute"><i class="fa fa-dashboard"></i>&nbsp;&nbsp;DASHBOARD</router-link>
            </li>
            <li :class="{active : currentLocation == 'calendar'}">
                <router-link :to="{ name: 'calendar'}" exact v-on:click.native="activeRoute"><i class="fa fa-calendar"></i>&nbsp;&nbsp;CALENDAR</router-link>
            </li>
            <li :class="{active : currentLocation == 'client'}">
                <router-link :to="{ name: 'client'}" exact v-on:click.native="activeRoute"><i class="fa fa-users"></i>&nbsp;&nbsp;CLIENTS</router-link>
            </li>
            <li :class="{active : currentLocation == 'loan_summary'}">
                <router-link :to="{ name: 'loan_summary'}" exact v-on:click.native="activeRoute"><i class="fa fa-handshake-o"></i>&nbsp;&nbsp;LOAN SUMMARY</router-link>
            </li>
        </ul>
        <div class="user">
            <ul class="icon-nav">
                <li>
					<a :style="{cursor:'pointer'}">
						<i class="fa fa-user-circle" aria-hidden="true"></i>
                        &nbsp;{{ this.auth_user.name }}
					</a>
                </li>
                <li>
                    <a v-if="$auth.check()" :style="{cursor:'pointer'}" @click="logout()"><i class="fa fa-sign-out"></i>&nbsp;&nbsp;Log out</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            auth_user:this.$auth.user(),
            currentLocation:''
        }
    },
    methods: {
        logout: function(){
            this.$auth.logout();
            this.$router.push({ name: 'home', query: { redirect: '/' } });
        },
        activeRoute:function(){
            this.currentLocation = this.$route.name;
        }
    },
    mounted(){
        var routePath = this.$route.path;
        var val = routePath.substr(routePath.indexOf("/") + 1)
        if (val.indexOf('/') > -1)
            this.currentLocation = val.substr(0, val.indexOf("/"));
        else this.currentLocation = val;
    }
}
</script>
<style>
body{
    background: #f4f4f4;
}
</style>