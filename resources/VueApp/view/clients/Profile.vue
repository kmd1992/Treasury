<template>
<div id="main" style="margin-left: 0px;">
	<div class="container-fluid">
        
		<page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->

        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>    <!-- Breadcrums component -->
                        
		<div class="row">
			<div class="col-sm-12">
				<div class="box box-bordered">
                    <div class="box-title">
                        <h3 v-bind:style="{ color: editFormData.form_data.color }">
                            <i class="fa fa-user"></i>
                            {{ editFormData.form_data.name }}
                        </h3>
                        <ul class="tabs">
                            <li class="active">
                                <a href="#profile-loan-tab" class="btn" data-toggle="tab"><i class="fa fa-university" aria-hidden="true"></i>&nbsp;ACCOUNT</a>
                            </li>
                            <li>
                                <a href="#profile-edit-tab" class="btn" data-toggle="tab"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;EDIT</a>
                            </li>
                            <li>
                                <router-link :to="{ path: '/client' }" class="btn"><i class="fa fa-caret-left"></i>&nbsp;BACK</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="box-content">
                        <div class="tab-content">
                            <div class="tab-pane active" id="profile-loan-tab">
                                <profile-loan-tab></profile-loan-tab>
                            </div>
                            <div class="tab-pane" id="profile-edit-tab">
                                <profile-edit-tab :editFormData="editFormData"></profile-edit-tab>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import pageHead from '../component/pagehead';
import breadcrumbs from "../component/breadcrumbs";
import profileLoanTab from "./ProfileLoanTab";
import profileEditTab from "./ProfileEditTab";

export default {
  	components: {
        'page-head' : pageHead,
        'breadcrumbs' : breadcrumbs,
        'profile-loan-tab': profileLoanTab,
        'profile-edit-tab': profileEditTab
    },
    data(){
        return {
            pageHeadData:{
                pageTitle: 'Profile'
            },
            breadcrumbs: {
                data: [{
                    title: 'Home',
                    to: { path: '/' }
                },{
                    title: 'Client',
                    to: { name: 'client'}
                },{
                    title: 'Profile',
                    to: { name: 'client_profile'}
                }]
            },
            editFormData:{
                form_data:{}
            }
        }
    },
    created() {
        this.editProfile();
    },
    methods:{
        editProfile:function(){
            const paramsObj = {params: { auth: this.$auth.user().id } };
            Object.assign(paramsObj.params, this.$route.params)
            this.$store.dispatch(`clientStore/editProfile`, paramsObj).then(
                (res) => {
                    if(res.status == 'success'){
                        this.editFormData.form_data = res.edit;
                    }
                }
            );
        }
    }
}
</script>
<style>
.nav-pills>li>a {border-radius: 0px;}
.nav>li>a {padding: 8.3px 15px;border: 1px solid #eeeeee;}
.alert {padding: 9.2px;}
</style>