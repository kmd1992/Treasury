<template>
    <div class="container">
        <div class="card card-default">
            <div class="card-header">Admin Dashboard</div>
            <div class="card-body">
                Welcome to your administrator dashboard <br><br>

                <userList></userList>
            </div>
        </div>
    </div>
</template>
<script>
  import userList from './user-list.vue'
  export default {
    mounted() {
      //
    },
    components: {
      userList
    }
  }
</script>