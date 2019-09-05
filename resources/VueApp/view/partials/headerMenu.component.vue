<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link :to="{name: 'home'}" class="navbar-brand">Treasury</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto" v-if="$auth.check(1)">
          <li class="nav-item" v-for="(route, key) in routes.user" v-bind:key="route.path">
            <router-link :to="{ name : route.path }" :key="key" class="nav-link">{{route.name}}</router-link>
          </li>
      </ul>
      <ul class="navbar-nav mr-auto" v-if="$auth.check(2)">
          <li class="nav-item" v-for="(route, key) in routes.user" v-bind:key="route.path">
            <router-link :to="{ name : route.path }" :key="key" class="nav-link">{{route.name}}</router-link>
          </li>
      </ul>
      <ul class="navbar-nav ml-auto" v-if="!$auth.check()">
          <li class="nav-item" v-for="(route, key) in routes.unlogged" v-bind:key="route.path">
            <router-link :to="{ name : route.path }" :key="key" class="nav-link">{{route.name}}</router-link>
          </li>
      </ul>
      <ul class="navbar-nav ml-auto" v-if="$auth.check()">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="logout()">Logout</a>
        </li>
      </ul>
    </div>
  </nav> -->

  <div class="container h-100 d-flex align-items-center justify-content-between">
    <div class="left-side-content-area d-flex align-items-center">

        <!-- Desktop Logo -->
        <div class="admetro-logo">
            <!-- <a href="index.html"><img class="desktop-logo" src="img/core-img/logo.png" alt="Desktop Logo"></a> -->
            <router-link :to="{name: 'home'}" class="navbar-brand"><img class="desktop-logo" src="/img/core-img/logo.png" alt="Desktop Logo"></a></router-link>
        </div>

        <!-- Left Side Nav -->
        <ul class="left-side-navbar d-flex align-items-center">
            <li class="nav-item dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Actions <i class="fa fa-angle-down"></i></button>
                <!-- Dropdown Menu -->
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action 1</a>
                    <a class="dropdown-item" href="#">Action 2</a>
                    <a class="dropdown-item" href="#">Another Action</a>
                    <a class="dropdown-item" href="#">Something Else Here</a>
                </div>
            </li>
        </ul>
    </div>

    <div class="right-side-navbar d-flex align-items-center justify-content-end">
        <!-- Top Bar Nav -->
        <ul class="d-flex align-items-center">
            <li class="nav-item dropdown">
                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-search"></i></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <!-- Top Search Bar -->
                    <div class="top-search-bar">
                        <form action="#" method="get">
                            <input type="search" name="search" class="from-control top-search mb-0" placeholder="Type your keywords...">
                            <button type="submit"><i class="ti-search"></i></button>
                        </form>
                    </div>
                </div>
            </li>

            <li class="nav-item dropdown">
                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-envelope-o" aria-hidden="true"></i></button>

                <div class="dropdown-menu dropdown-menu-right">
                    <!-- Top Message Area -->
                    <div class="top-message-area">
                        <!-- Heading -->
                        <div class="top-message-heading">
                            <div class="heading-title">
                                <h6>Messages</h6>
                            </div>
                            <span>5 New</span>
                        </div>
                        <div class="message-box" id="messageBox">
                            <a href="#" class="dropdown-item">
                                <i class="ti-email"></i>
                                <span class="message-text">
                                    <span>6-hour video course on Angular</span>
                                    <span>3 min ago</span>
                                </span>
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="ti-email"></i>
                                <span class="message-text">
                                    <span>Google Ads: You'll get a refund soon</span>
                                    <span>27 min ago</span>
                                </span>
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="ti-email"></i>
                                <span class="message-text">
                                    <span>New Feature: HTTP Method Selection</span>
                                    <span>56 min ago</span>
                                </span>
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="ti-email"></i>
                                <span class="message-text">
                                    <span>The Complete JavaScript Handbook</span>
                                    <span>1 hour ago</span>
                                </span>
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="ti-email"></i>
                                <span class="message-text">
                                    <span>New comment: Admetro Template</span>
                                    <span>2 days ago</span>
                                </span>
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="ti-email"></i>
                                <span class="message-text">
                                    <span>6-hour video course on Angular</span>
                                    <span>3 min ago</span>
                                </span>
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="ti-email"></i>
                                <span class="message-text">
                                    <span>Google Ads: You'll get a refund soon</span>
                                    <span>27 min ago</span>
                                </span>
                            </a>
                            <a href="#" class="dropdown-item">
                                <i class="ti-email"></i>
                                <span class="message-text">
                                    <span>New Feature: HTTP Method Selection</span>
                                    <span>56 min ago</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>

            <li class="nav-item dropdown">
                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-bell-o" aria-hidden="true"></i> <span class="active-status"></span></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <!-- Top Notifications Area -->
                    <div class="top-notifications-area">
                        <!-- Heading -->
                        <div class="notifications-heading">
                            <div class="heading-title">
                                <h6>Notifications</h6>
                            </div>
                            <span>5 New</span>
                        </div>

                        <div class="notifications-box" id="notificationsBox">
                            <a href="#" class="dropdown-item"><i class="ti-face-smile bg-success"></i><span>We've got something for you!</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-bell bg-danger"></i><span>Domain names expiring on Tuesday</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-check"></i><span>Your commissions has been sent</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-heart bg-success"></i><span>You sold an item!</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-bolt bg-warning"></i><span>Security alert for your linked Google account</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-face-smile bg-success"></i><span>We've got something for you!</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-bell bg-danger"></i><span>Domain names expiring on Tuesday</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-check"></i><span>Your commissions has been sent</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-heart bg-success"></i><span>You sold an item!</span></a>
                            <a href="#" class="dropdown-item"><i class="ti-bolt bg-warning"></i><span>Security alert for your linked Google account</span></a>
                        </div>
                    </div>
                </div>
            </li>

            <li class="nav-item dropdown">
                <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/img/member-img/women.jpg" alt=""></button>
                <div class="dropdown-menu dropdown-menu-right">
                    <!-- User Profile Area -->
                    <div class="user-profile-area">
                        <div class="user-profile-heading">
                            <!-- Thumb -->
                            <div class="profile-thumbnail">
                                <img src="/img/member-img/women.jpg" alt="">
                            </div>
                            <!-- Profile Text -->
                            <div class="profile-text">
                                <h6>Samantha Sarah</h6>
                                <span>samanthasarah@example.com</span>
                            </div>
                        </div>
                        <a href="#" class="dropdown-item"><i class="fa fa-user-o text-default" aria-hidden="true"></i> My profile</a>
                        <a href="#" class="dropdown-item"><i class="fa fa-envelope-o text-success" aria-hidden="true"></i> Messages</a>
                        <a href="#" class="dropdown-item"><i class="fa fa-cog text-default" aria-hidden="true"></i> Account settings</a>
                        <a href="#" class="dropdown-item"><i class="fa fa-heart-o text-purple" aria-hidden="true"></i> Support</a>
                        <a class="dropdown-item" v-if="$auth.check()" href="#" @click="logout()"><i class="fa fa-sign-out text-warning" aria-hidden="true"></i> Sign-out</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        routes: {
          // UNLOGGED
          unlogged: [
            /* { name: 'Register', path: 'register' }, */
            { name: 'Login', path: 'login'}
          ],
          // LOGGED USER
          user: [
            { name: 'Dashboard', path: 'dashboard' }
          ],
          // LOGGED ADMIN
          admin: [
            { name: 'Dashboard', path: 'admin.dashboard' }
          ]
        }
      }
    },
    mounted() {
      
    },
    methods: {
      logout: function(){
        this.$auth.logout();
        this.$router.push({ name: 'home', query: { redirect: '/' } });
      }
    }
  }
</script>

<style>

</style>