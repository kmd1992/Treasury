<template>
<div id="main" style="margin-left: 0px;">
	<div class="container-fluid">
        
		<page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->

        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>    <!-- Breadcrums component -->

		<div class="row">
			<div class="col-sm-12">
                <div class="box">
                    <div class="box-title">
                        <h3><i class="fa fa-filter"></i> Filter</h3>
                        <div class="row">
                            <form @submit.prevent="applyFilter">
                                <div class="col-md-5">
                                    <div class="icheck-primary icheck-inline">
                                        <input type="radio" id="by_dateRadioId1" value="by_date" v-model="filterData.filterReport"/>
                                        <label for="by_dateRadioId1">By Date</label>
                                    </div>
                                    <div class="icheck-primary icheck-inline">
                                        <input type="radio" id="by_monthRadioId2" value="by_month" v-model="filterData.filterReport"/>
                                        <label for="by_monthRadioId2">By Month</label>
                                    </div>
                                    <div class="icheck-primary icheck-inline">
                                        <input type="radio" id="last_6monthsRadioId3" value="last_6months" v-model="filterData.filterReport"/>
                                        <label for="last_6monthsRadioId3">Last 6 Months</label>
                                    </div>
                                    <div class="icheck-primary icheck-inline">
                                        <input type="radio" id="fy_ppfRadioId4" value="fy_ppf" v-model="filterData.filterReport"/>
                                        <label for="fy_ppfRadioId4">FY (PPF Account)</label>
                                    </div>
                                    &nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary" v-if="filterData.filterReport">APPLY</button>
                                </div>
                                <div class="col-md-2" v-if="filterData.filterReport == 'by_date'">
                                    <div class="form-group" style="margin-bottom:0px">
                                        <input type="text" name="textfield" ref="datepicker_input" id="textfield" placeholder="Start date" class="form-control" v-model="filterData.start_date">
                                    </div>
                                </div>
                                <div class="col-md-2" v-if="filterData.filterReport == 'by_date'">
                                    <div class="form-group" style="margin-bottom:0px">
                                        <input type="text" name="textfield" id="textfield" placeholder="End date" class="form-control" v-model="filterData.end_date">
                                    </div>
                                </div>
                                <div class="col-sm-2" v-if="filterData.filterReport == 'by_month'">
                                    <div class="form-group" style="margin-bottom:0px">
                                        <input type="text" name="textfield" id="textfield" placeholder="Month" class="form-control" v-model="filterData.month">
                                    </div>
                                </div>
                                <div class="col-sm-2" v-if="filterData.filterReport == 'by_month'">
                                    <div class="form-group" style="margin-bottom:0px">
                                        <input type="text" name="textfield" id="textfield" placeholder="Year" class="form-control" v-model="filterData.year">
                                    </div>
                                </div>
                                <div class="col-sm-2" v-if="filterData.filterReport == 'fy_ppf'">
                                    <div class="form-group" style="margin-bottom:0px">
                                        <input type="text" name="textfield" id="textfield" placeholder="2015-2016" class="form-control" v-model="filterData.fy_ppf">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
		</div>
        
        <div class="row">
            <div class="col-sm-12">
                <div class="box box box-bordered">
                    <div class="box-title">
                        <h3>
                            <i class="fa fa-table"></i>
                            Interest Report
                        </h3>
                    </div>
                    <div class="box-content nopadding">
                        <table class="table table-hover table-nomargin table-bordered">
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>CLIENT</th>
                                    <th class="hidden-350">LOAN</th>
                                    <th class="hidden-1024">LOAN STATUS</th>
                                    <th class="hidden-480">ISSUE DATE</th>
                                    <th class="hidden-480">EARNED INTEREST</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th colspan="6" style="background:#d9edf7">Earned from client</th>
                                </tr>
                                <tr>
                                    <td>#123</td>
                                    <td>Test Client</td>
                                    <td class="hidden-350">5000</td>
                                    <td class="hidden-1024"><span class="label label-success">Paid</span></td>
                                    <td class="hidden-480">10-09-2019</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>#123</td>
                                    <td>Test Client</td>
                                    <td class="hidden-350">5000</td>
                                    <td class="hidden-1024"><span class="label label-danger">Pending</span></td>
                                    <td class="hidden-480">10-09-2019</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <th colspan="5" style="background:#fcf8e3;text-align:right">Total Interest Earned</th>
                                    <th style="background:#fcf8e3">1000</th>
                                </tr>
                                <tr>
                                    <th colspan="6" style="background:#d9edf7">Given from client</th>
                                </tr>
                                <tr>
                                    <td>#123</td>
                                    <td>Test Client</td>
                                    <td class="hidden-350">5000</td>
                                    <td class="hidden-1024"><span class="label label-danger">Pending</span></td>
                                    <td class="hidden-480">10-09-2019</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>#123</td>
                                    <td>Test Client</td>
                                    <td class="hidden-350">5000</td>
                                    <td class="hidden-1024"><span class="label label-success">Paid</span></td>
                                    <td class="hidden-480">10-09-2019</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <th colspan="5" style="background:#fcf8e3;text-align:right">Total Interest Earned</th>
                                    <th style="background:#fcf8e3">1000</th>
                                </tr>
                                <tr>
                                    <th colspan="5" style="background:#dff0d8;text-align:right">TOTAL INCOME</th>
                                    <th style="background:#dff0d8;text-align:right">2000</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
	</div>
</div>
</template>
<script>
import 'icheck-bootstrap';
import moment from 'moment'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap-datepicker';
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
                    title: 'Report',
                    to: { name: 'report'}
                }]
            },
            filterData:{
                filterReport: null
            }
        }
    },
    mounted() {
        this.datePicker();
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
        },
        applyFilter(){
            console.log(this.filterData);
            //this.$router.push('/report-filter');
        }
    },
    methods:{
        datePicker:function(){
            $(this.$refs.datepicker_input).datepicker({
                autoclose: true,
                format: 'dd M yyyy'
            });
        }
    },
    watch: {
        filterData: {
            handler: function(val, oldVal) {
                this.datePicker();
            },
            deep: true
        }
    }
}
</script>