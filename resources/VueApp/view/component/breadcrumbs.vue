<template>
    <div class="breadcrumbs">
        <ul>
            <li v-for="(val,key) in data">
                <router-link :class="(key == Object.keys(data).length - 1) ? 'isDisabled' : ''" :to="val.to">{{ val.title }}</router-link>
                <i v-if="key != Object.keys(data).length - 1" class="fa fa-angle-right"></i>
            </li>
        </ul>
    </div>
</template>
<script>
  export default {
    props: ['data'],
  }
</script>
<style>
.isDisabled { color: currentColor; cursor: not-allowed; opacity: 0.6; text-decoration: none !important; }
</style>