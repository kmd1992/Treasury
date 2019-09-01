<template>
  <div class="page-content- h-100vh">
    <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-8 col-lg-6 mx-auto">
                <!-- Middle Box -->
                <div class="middle-box text-center bg-white p-5 bg-boxshadow">
                    <h5 class="mb-20">LOGIN</h5>
                    <!-- Form -->
                    <div class="alert alert-danger" v-if="has_error && !success">
                        <p v-if="error == 'login_error'">Validation Errors.</p>
                        <p v-else>Error, unable to connect with these credentials.</p>
                    </div>
                    <form autocomplete="off" @submit.prevent="login" method="POST">
                        <!-- Form Group -->
                        <div class="form-group">
                            <input type="email" id="email" class="form-control login" placeholder="user@example.com" v-model="email" required>
                        </div>
                        <!-- Form Group -->
                        <div class="form-group">
                            <input type="password" id="password" class="form-control login" v-model="password" required>
                        </div>
                        <button type="submit" class="btn- btn-success btn-1 btn-1c w-100 text-center">Signin</button>                            
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
  export default {
    data() {
      return {
         email: null,
         password: null,
         success: false,
         has_error: false,
         error: ''
      }
    },
    mounted() {
      //
    },
    methods: {
      login() {
         // get the redirect object
         var redirect = this.$auth.redirect()
         var app = this
         this.$auth.login(
         {
            data: {
               email: app.email,
               password: app.password
            },
            success: function() {
               // handle redirection
               app.success = true;
               let redirectTo = 'home';
               if(parseInt(this.$auth.user().role) === -1){
                 redirectTo = 'admin.dashboard';
               }else if(parseInt(this.$auth.user().role) === 1){
                 redirectTo = 'dashboard';
               }
               //const redirectTo = redirect ? redirect.from.name : parseInt(this.$auth.user().role) === -1 ? 'admin.dashboard' : 'dashboard';
               console.log(redirect);
               console.log(parseInt(this.$auth.user().role));
               console.log(redirectTo);
               // const redirectTo = 'dashboard'
               this.$router.push({name: redirectTo})
            },
            error: function() {
               app.has_error = true
               app.error = res.response.data.error
            },
            rememberMe: true,
            fetchUser: true
         })
      }
   }
}
</script>