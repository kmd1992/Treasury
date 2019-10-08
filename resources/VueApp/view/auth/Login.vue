<template>
  <div>
    <h1>
      <a href="index.html">
        <img src="img/rupee.jpg" alt class="retina-ready" width="59" height="49" />TREASURY
      </a>
    </h1>
    <div class="login-body">
      <h2>LOGIN</h2>
      <div class="alert alert-danger" v-if="has_error && !success">
        <p v-if="error == 'login_error'">Validation Errors.</p>
        <p v-else>Error, unable to connect with these credentials.</p>
      </div>
      <form
        autocomplete="off"
        @submit.prevent="login"
        method="POST"
        class="form-vertical"
      >
        <div class="form-group">
          <label for="email" class="control-label">E-mail Address</label>
          <div class="email controls">
            <input
              type="email"
              id="email"
              placeholder="Email address"
              class="form-control"
              data-rule-required="true"
              data-rule-email="true"
              v-model="email"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="control-label">Password</label>
          <div class="pw controls">
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="form-control"
              data-rule-required="true"
              v-model="password"
              required
            />
          </div>
        </div>
        <div class="submit">
          <input type="submit" value="Login" class="btn btn-primary btn-lg btn-block" />
        </div>
      </form>
      <div class="forget">&nbsp;</div>
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
            error: ""
        };
    },
    methods: {
        login:function() {
            var redirect = this.$auth.redirect();
            var app = this;
            this.$auth.login({
                    data: {
                    email: app.email,
                    password: app.password
                },
                success: function() {
                    app.success = true;
                    let redirectTo = "home";
                    if (parseInt(this.$auth.user().role) === -1) {
                        redirectTo = "admin.dashboard";
                    } else if (parseInt(this.$auth.user().role) === 1) {
                        redirectTo = "dashboard";
                    }
                    //const redirectTo = redirect ? redirect.from.name : parseInt(this.$auth.user().role) === -1 ? 'admin.dashboard' : 'dashboard';
                    //console.log(redirect);
                    this.$router.push({ name: redirectTo });
                },
                error: function() {
                    app.has_error = true;
                    app.error = res.response.data.error;
                },
                rememberMe: true,
                fetchUser: true
            });
        }
    }
};
</script>
<style>
body{
    background: #F8F9FA !important;
}
</style>