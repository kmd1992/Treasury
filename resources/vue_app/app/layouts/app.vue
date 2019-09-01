<template>
    <div v-bind:class="[($auth.check() && !$route.meta.hideNavigation) ? 'admetro-page-wrapper horizontal-menu' : 'none-']">
      <div v-bind:class="[($auth.check() && !$route.meta.hideNavigation) ? 'admetro-page-content' : 'none-']">
        <header class="top-header-area clearfix" v-if="$auth.check() && !$route.meta.hideNavigation">
            <HeaderMenu></HeaderMenu>
        </header>
        <div v-if="$auth.check() && !$route.meta.hideNavigation" class="horizontal-menu clearfix">
          <Menu></Menu>
        </div>
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
  import HeaderMenu from '../_partials/headerMenu.component.vue';
  import Menu from '../_partials/menu.component.vue';
  export default {
      data() { 
        return { }
      },
      components: { HeaderMenu , Menu }
  }
</script>