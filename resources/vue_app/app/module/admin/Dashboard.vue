<template>
   <div class="main-content">
         <div class="container">
            <div class="row">
               <div class="col-12">
                     <div class="card bg-boxshadow  mb-30">
                        <div class="card-body">
                           <div class="col-12">
                                 Welcome to your administrator dashboard <br><br>

                                 <userList></userList>
                           </div>
                        </div>
                     </div>
               </div>
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