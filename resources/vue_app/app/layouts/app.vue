<template>
    <div id="main">
        <header id="header">
            <Menu></Menu>
        </header>
        <div id="content">
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
  import Menu from '../_partials/menu.component.vue'
  export default {
      data() { 
        return { }
      },
      components: { Menu }, 
  }
</script>