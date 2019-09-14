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
						<i class="fa fa-bars"></i>
						Basic Widget
						</h3>
					</div>
					<div class="box-content nopadding">
						<!-- <user-list :usersGetters="usersGetters" ></user-list> -->
					</div>
				</div>
			</div>
			<div class="col-sm-12">
				<ul class="tiles">
					<li class="orange high long">
						<a href="#">
							<span class="count">
								<i class="fa fa-shopping-cart"></i>8</span>
							<span class="name">New orders</span>
						</a>
					</li>
					<li class="blue">
						<a href="#">
							<span>
								<i class="fa fa-phone"></i>
							</span>
							<span class="name">Phone</span>
						</a>
					</li>
					<li class="red">
						<a href="#">
							<span class="count">
								<i class="fa fa-envelope"></i>1</span>
							<span class="name">Mails</span>
						</a>
					</li>
					<li class="lime">
						<a href="#">
							<span class="count">
								<i class="fa fa-comment"></i>4</span>
							<span class="name">Comments</span>
						</a>
					</li>
					<li class="image">
						<a href="#">
							<img src="img/demo/user-1.jpg" alt="">
							<span class="name">Jane Doe</span>
						</a>
					</li>
					<li class="blue long">
						<a href="#">
							<span class="nopadding">
								<h5>@eakroko</h5>
								<p>Check the new Flat theme on themeforest. Incredible fast and easy to use.</p>
							</span>
							<span class="name">
								<i class="fa fa-twitter"></i>
								<span class="right">1min ago</span>
							</span>
						</a>
					</li>
					<li class="green long">
						<a href="#">
							<span>
								<i class="fa fa-globe"></i>
							</span>
							<span class="name">User regions</span>
						</a>
					</li>
					<li class="brown">
						<a href="#">
							<span class="count">
								<i class="fa fa-bolt"></i>3</span>
							<span class="name">Warnings</span>
						</a>
					</li>
					<li class="teal long">
						<a href="#">
							<span class="count">
								<i class="fa fa-cloud-upload"></i>12</span>
							<span class="name">New uploads</span>
						</a>
					</li>
					<li class="blue">
						<a href="#">
							<span>
								<i class="fa fa-cogs"></i>
							</span>
							<span class="name">Settings</span>
						</a>
					</li>
					<li class="magenta">
						<a href="#">
							<span>
								<i class="fa fa-star"></i>
							</span>
							<span class="name">Ratings</span>
						</a>
					</li>
					<li class="pink long">
						<a href="#">
							<span>
								<i class="fa fa-money"></i>
							</span>
							<span class="name">Balance</span>
						</a>
					</li>
					<li class="blue">
						<a href="#">
							<span>
								<i class="fa fa-wrench"></i>
							</span>
							<span class="name">Optimize site</span>
						</a>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';

import UserList from  './user-list';
import pageHead from '../component/pagehead';
const fetchInitialData = (store) => {
  return store.dispatch(`userStore/getUserAction`);
}
export default {
  	name: 'admin.dashboard',
  	components: {
		'page-head' : pageHead,
	    'user-list': UserList
  	},
  	data(){
        return {
            pageHeadData:{
                pageTitle: 'Dashboard'
            }
        }
	},
  computed: {
    ...mapGetters('userStore', [
      'usersGetters'
    ])
  },
  methods: {
    loadPosts:function () {
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