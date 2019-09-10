<template>
<div id="main" style="margin-left: 0px;">
	<div class="container-fluid">
		<div class="page-header">
			<div class="pull-left">
				<h1>Blank page</h1>
			</div>
			<div class="pull-right">
				<ul class="stats">
					<li class='satgreen'>
						<i class="fa fa-money"></i>
						<div class="details">
							<span class="big">$324,12</span>
							<span>Balance</span>
						</div>
					</li>
					<li class='lightred'>
						<i class="fa fa-calendar"></i>
						<div class="details">
							<span class="big">February 22, 2013</span>
							<span>Wednesday, 13:56</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<div class="box">
					<div class="box-title">
						<h3>
						<i class="fa fa-bars"></i>
						Basic Widget
						</h3>
					</div>
					<div class="box-content nopadding">
						<user-list :usersGetters="usersGetters" ></user-list>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import UserList from  './user-list';
const fetchInitialData = (store) => {
  return store.dispatch(`userStore/getUserAction`);
}
export default {
  name: 'admin.dashboard',
  components: {
    'user-list': UserList
  },
  computed: {
    ...mapGetters('userStore', [
      'usersGetters'
    ])
  },
  methods: {
    loadPosts () {
      fetchInitialData(this.$store)
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadPosts()
    }
  },
  prefetch: fetchInitialData,
  mounted () {
    this.loadPosts()
  }
}
</script>