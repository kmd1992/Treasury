<template>
  <div id="main" style="margin-left: 0px;">
    <div class="container-fluid">
      <!-- Page header -->
      <page-head v-bind="pageHeadData"></page-head>

      <div class="row">
        <div class="col-sm-12">
          <div class="box">
            <div class="box-title">
              <h3>
                <i class="fa fa-tachometer"></i>
                Dashboard
              </h3>
            </div>
            <div class="box-content nopadding"></div>
          </div>
        </div>
        <div class="col-sm-12">
          <br />
          <div class="alert alert-info alert-dismissable">Welcome to dashboard.</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import UserList from "./user-list";
import pageHead from "../component/pagehead";
const fetchInitialData = store => {
  return store.dispatch(`userStore/getUserAction`);
};
export default {
  name: "admin.dashboard",
  components: {
    "page-head": pageHead,
    "user-list": UserList
  },
  data() {
    return {
      pageHeadData: {
        pageTitle: "Dashboard"
      }
    };
  },
  computed: {
    ...mapGetters("userStore", ["usersGetters"])
  },
  methods: {
    loadPosts: function() {
      fetchInitialData(this.$store);
    }
  },
  watch: {
    $route(to, from) {
      this.loadPosts();
    }
  },
  prefetch: fetchInitialData,
  mounted() {
    this.loadPosts();
  }
};
</script>