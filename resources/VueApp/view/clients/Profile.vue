<template>
<div id="main" style="margin-left: 0px;">
	<div class="container-fluid">
        
		<page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->

        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>    <!-- Breadcrums component -->
                        <!-- <router-link :to="{ path: '/client' }" class="btn btn-primary"><i class="fa fa-arrow-left"></i>&nbsp;BACK</router-link>
 -->
		<div class="row">
			<div class="col-sm-12">
				<div class="box box-bordered">
                    <div class="box-title">
                        <h3>
                            <i class="fa fa-user"></i>
                            Kishan Modi
                        </h3>
                        <ul class="tabs">
                            <li class="active">
                                <a href="#t1" class="btn" data-toggle="tab"><i class="fa fa-university" aria-hidden="true"></i>&nbsp;ACCOUNT</a>
                            </li>
                            <li>
                                <a href="#t2" class="btn" data-toggle="tab"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;EDIT</a>
                            </li>
                            <li>
                                <router-link :to="{ path: '/client' }" class="btn"><i class="fa fa-caret-left"></i>&nbsp;BACK</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="box-content">
                        <div class="tab-content">
                            <div class="tab-pane active" id="t1">
                                <h4><i class="fa fa-money"></i>&nbsp;&nbsp;Account / Loan Detail</h4>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <ul class="nav nav-pills nav-stacked">
                                            <li class="active">
                                                <a href="#"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;10,000</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;10,000</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;10,000</a>
                                            </li>
                                            <li style="background:#dff0d8;">
                                                <a href="#c22" data-toggle="collapse" data-parent="#ac4" class="collapsed" style="color:#3c763d;">
													<i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Apply New Loan
												</a>
                                                <div id="c22" class="panel-collapse collapse" style="height: 0px;">
                                                    <div class="panel-body">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, laborum pariatur laudantium nisi quae commodi nihil officia reiciendis voluptatum placeat distinctio tempore incidunt quasi perspiciatis ducimus in at iure qui voluptatem animi delectus deleniti
                                                        adipisci facilis sapiente ad repellat excepturi.
                                                    </div>
                                                    <!-- /.panel-body -->
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-sm-9">
                                        <table class="table table-hover table-nomargin table-colored-header table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Rendering engine</th>
                                                    <th>Browser</th>
                                                    <th class="hidden-350">Platform(s)</th>
                                                    <th class="hidden-1024">Engine version</th>
                                                    <th class="hidden-480">CSS grade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Trident</td>
                                                    <td>
                                                        Internet Explorer 4.0
                                                    </td>
                                                    <td class="hidden-350">Win 95+</td>
                                                    <td class="hidden-1024">4</td>
                                                    <td class="hidden-480">X</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Nokia N800</td>
                                                    <td class="hidden-350">N800</td>
                                                    <td class="hidden-1024">-</td>
                                                    <td class="hidden-480">A</td>
                                                </tr>
                                                <tr>
                                                    <td>Misc</td>
                                                    <td>NetFront 3.4</td>
                                                    <td class="hidden-350">Embedded devices</td>
                                                    <td class="hidden-1024">-</td>
                                                    <td class="hidden-480">A</td>
                                                </tr>
                                                <tr>
                                                    <td>Misc</td>
                                                    <td>Dillo 0.8</td>
                                                    <td class="hidden-350">Embedded devices</td>
                                                    <td class="hidden-1024">-</td>
                                                    <td class="hidden-480">X</td>
                                                </tr>
                                                <tr>
                                                    <td>Misc</td>
                                                    <td>Links</td>
                                                    <td class="hidden-350">Text only</td>
                                                    <td class="hidden-1024">-</td>
                                                    <td class="hidden-480">X</td>
                                                </tr>
                                                <tr>
                                                    <td>Misc</td>
                                                    <td>Lynx</td>
                                                    <td class="hidden-350">Text only</td>
                                                    <td class="hidden-1024">-</td>
                                                    <td class="hidden-480">X</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane" id="t2">
                                <h4><i class="fa fa-address-card-o"></i>&nbsp;&nbsp;Personal Detail</h4>
                                <hr>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="inputName">Full Name &#x2a;</label>
                                            <input type="text" class="form-control" v-model="form_data.name" id="inputName" placeholder="Enter full name">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="inputEmail">Email Address</label>
                                            <input type="email" class="form-control" v-model="form_data.email" id="inputEmail" placeholder="Enter e-mail address">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="inputContact">Contact No &#x2a;</label>
                                            <input type="text" class="form-control" v-model="form_data.contact" id="inputContact" placeholder="(000) 000-0000" v-mask="'(###) ###-####'">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="inputSecontact">Secondnary Contact</label>
                                            <input type="text" class="form-control" v-model="form_data.seccontact" id="inputSecontact" placeholder="(000) 000-0000" v-mask="'(###) ###-####'">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="inputGender">Gender &#x2a;</label>
                                            <div class="radio">
                                                <label><input type="radio" value="male" name="gender" v-model="form_data.gender" checked="checked">Male&nbsp;&nbsp;</label>
                                                <label><input type="radio" value="female" name="gender" v-model="form_data.gender">Female&nbsp;&nbsp;</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="inputCity">City &#x2a;</label>
                                            <input type="text" class="form-control" id="inputCity" v-model="form_data.city" placeholder="1234 Main St">
                                        </div>
                                    </div>
                                <div class="col-md-9">
                                        <div class="form-group ">
                                            <label for="inputAddress">Address &#x2a;</label>
                                            <input type="text" class="form-control" id="inputAddress" v-model="form_data.address" placeholder="Apartment, studio, or floor">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="inputOccupation">Occupation &#x2a;</label>
                                            <input type="text" class="form-control" id="inputOccupation" v-model="form_data.occupation" placeholder="Enter occupation">
                                        </div>
                                    </div>
                                <div class="col-md-9">
                                        <div class="form-group ">
                                            <label for="inputOccupationAddr">Occupation Address &#x2a;</label>
                                            <input type="text" class="form-control" id="inputOccupationAddr" v-model="form_data.occupation_add" placeholder="Enter occupation address">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="inputGender">Payer Type &#x2a;</label>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="client" v-model="form_data.payer_type" name="payer_type" checked="checked">As a Client ?
                                            </label>
                                        </div>
                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="lender" v-model="form_data.payer_type" name="payer_type">As a lendar ?
                                            </label>
                                        </div>
                                    </div>
                                </div>
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
export default {
  	components: {
        'page-head' : pageHead,
        'breadcrumbs' : breadcrumbs,
    },
    data(){
        return {
            pageHeadData:{
                pageTitle: 'Client'
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
            form_data:{
                user_id : this.$auth.user().id,
                name : '',
                email : '',
                contact : '',
                seccontact : '',
                gender : '',
                city : '',
                address : '',
                occupation : '',
                occupation_add : '',
                payer_type : '',
                color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            },
        }
    }
}
</script>
<style>
.nav-pills>li>a {border-radius: 0px;}
.nav>li>a {padding: 8.3px 15px;}
</style>