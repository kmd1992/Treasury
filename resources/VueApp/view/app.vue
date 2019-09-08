<template>
    <div v-bind:class="[($auth.check() && !$route.meta.hideNavigation) ? '' : 'login']">
        <div id="navigation" v-if="$auth.check() && !$route.meta.hideNavigation">
            <HeaderMenu></HeaderMenu>
        </div>
        <div v-bind:id="($auth.check() && !$route.meta.hideNavigation) ? 'content' : ''" v-bind:class="[($auth.check() && !$route.meta.hideNavigation) ? 'container-fluid' : 'wrapper']">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import HeaderMenu from './partials/headerMenu.component.vue';
    import Menu from './partials/menu.component.vue';
    export default {
        data() { 
            return { }
        },
        components: { HeaderMenu , Menu }
    }
</script>