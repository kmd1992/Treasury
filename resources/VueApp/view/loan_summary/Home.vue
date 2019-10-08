<template>
<div id="main" style="margin-left: 0px;">
	<div class="container-fluid">
        
		<page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->

        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>    <!-- Breadcrums component -->

		<div class="row">
			<div class="col-sm-12">
                <div class="box">
                    <div class="box-title">
                        <h3><i class="fa fa-handshake-o"></i> Loan information</h3>
                    </div>
                </div>
            </div>
		</div>
        
        <div class="row">
            <div class="col-sm-2" v-for="loan in loanData">
                <br>
                <div class="box box-bordered">
					<div class="box-content nopadding">
						<div class="hpanel">
                           <div class="panel-body text-center">
                                <h4><i class="fa fa-inr"></i> {{ loan.loan_amount | inrCurrencyFormat}}</h4>
                                <h4 class="font-extra-bold no-margins text-success">{{ loan.client_name }}</h4>
                                <div class="m-t-xl">
                                    <span class="font-bold no-margins">
                                        <i class="fa fa-calendar"></i> {{ loan.issue_date | dateFormat }}
                                    </span>
                                </div>
                                <div class="row m-t-md">
                                    <div class="col-lg-6">
                                        <h5 class="no-margins font-extra-bold text-success"><i class="fa fa-inr"></i> {{ loan.total_paid | inrCurrencyFormat }}</h5>
                                        <div class="font-bold">{{ loan.total_paid_per }}% <i class="fa fa-level-up text-success"></i></div>
                                    </div>
                                    <div class="col-lg-6">
                                        <h5 class="no-margins font-extra-bold" style="color:#e63a3a"><i class="fa fa-inr"></i> {{ loan.total_pending | inrCurrencyFormat }}</h5>
                                        <div class="font-bold" style="color:#e63a3a">{{ loan.total_pending_per }}% <i class="fa fa-level-down"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-footer">
                                <router-link :to="{name:'client_profile', params:{id:loan.client_id} }"><i class="fa fa-eye" aria-hidden="true"></i> View more</router-link>
                                <span class="pull-right" :style="{color: (loan.loan_status == 'paid')? '#73a839' : '#e63a3a'}"><i class="fa fa-circle" aria-hidden="true"></i> {{ loan.loan_status | capitalize }}</span>
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
import moment from 'moment'
import pageHead from '../component/pagehead';
import breadcrumbs from "../component/breadcrumbs";
export default {
    components: {
        'page-head' : pageHead,
        'breadcrumbs' : breadcrumbs
    },
    data(){
        return {
            pageHeadData:{
                pageTitle: 'Loan Summary'
            },
            breadcrumbs: {
                data: [{
                    title: 'Home',
                    to: { path: '/' }
                },{
                    title: 'Loan Summary',
                    to: { name: 'loan_summary'}
                }]
            },
            loanData:''
        }
    },
    mounted() {
        this.loanSummary();
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        },
        dateFormat: function (value) { 
            if (value) {
                return moment(String(value)).format('DD-MM-YYYY')
            }
        },
        inrCurrencyFormat: function(value){
            value=value.toString();
            let lastThree = value.substring(value.length-3);
            let otherNumbers = value.substring(0,value.length-3);
            if(otherNumbers != '') lastThree = ',' + lastThree;
            return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        }
    },
    methods:{
        loanSummary:function(){
            const paramsObj = {params: { auth: this.$auth.user().id } };
            this.$store.dispatch(`loan/loanSummary`, paramsObj).then(
                (res) => {
                    if(res.status == 'success'){
                        this.loanData = res.response;
                    }
                }
            );
        },
    }
}
</script>