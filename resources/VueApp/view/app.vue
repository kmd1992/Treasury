<template>
    <div v-bind:class="[($auth.check() && !$route.meta.hideNavigation) ? '' : 'login']">
        <div id="navigation" v-if="$auth.check() && !$route.meta.hideNavigation">
            <header-menu></header-menu>
        </div>
        <div v-bind:id="($auth.check() && !$route.meta.hideNavigation) ? 'content' : ''" v-bind:class="[($auth.check() && !$route.meta.hideNavigation) ? 'container-fluid' : 'wrapper']">
            <router-view></router-view>
        </div>
        <div v-if="$auth.check() && !$route.meta.hideNavigation">
            <footer-stiky></footer-stiky>
        </div>
    </div>
</template>
<script>
    import HeaderMenu from './partials/header.component.vue';
    import Footer from './partials/footer.component.vue';
    export default {
        data() { 
            return { }
        },
        components: {
            'header-menu': HeaderMenu,
            'footer-stiky': Footer
        }
    }
</script>