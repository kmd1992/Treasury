<template>
<div id="main" style="margin-left: 0px;">
	<div class="container-fluid">
        
		<page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->

        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>    <!-- Breadcrums component -->

		<div class="row">
			<div class="col-sm-12">
				<div class="box">
					<div class="box-title">
						<h3><i class="fa fa-bars"></i></h3>
    					<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">ADD CLIENT</button>
					</div>
					<div class="box-content nopadding">
						<client-list></client-list>
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
import clientList from "./clients-list";
export default {
    components: {
        'page-head' : pageHead,
        'breadcrumbs' : breadcrumbs,
        'client-list' : clientList
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
                }]
            },
        }
    }
}
</script>