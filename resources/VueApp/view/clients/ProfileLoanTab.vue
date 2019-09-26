<template>
<div>
    <h4><i class="fa fa-money"></i>&nbsp;&nbsp;Account / Loan Detail</h4>
    <hr>
    <div class="row">
        <div class="col-sm-3">
            <ul class="nav nav-pills nav-stacked">
                <li v-if="loans.length > 0" v-for="(loan, index) in loans" :class="{ 'active': activeIndex === index }" v-on:click="choseLoan(loan, index)">
                    <a href="javascript:void(0)"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;{{ loan.amount }}
                        <span v-if="loan.status == 'paid'" class="badge badge-success pull-right">Paid <i class="fa fa-check" aria-hidden="true"></i></span>
                        <span v-else class="badge badge-danger pull-right">Pending <i class="fa fa-times" aria-hidden="true"></i></span>
                    </a>
                </li>
                <li v-if="ifPaidAll == true">
                    <a href="#c22" data-toggle="collapse" class="collapsed" style="color:#3c763d;background:#dff0d8;" >
                        <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Apply New Loan
                    </a>
                    <div id="c22" class="panel-collapse collapse" style="height: 0px;">
                        <div class="panel-body">
                            <form action="" class="form-vertical">
                                <div class="form-group">
                                    <label for="price" class="control-label">Amount</label>
                                    <div class="input-group"><span class="input-group-addon">Rs.</span> 
                                        <input type="text" placeholder="Price" id="price" name="price" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="price" class="control-label">Paid amount</label>
                                    <div class="input-group"><span class="input-group-addon">Rs.</span> 
                                        <input type="text" placeholder="Price" id="price" name="price" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="price" class="control-label">EMI</label>
                                    <div class="input-group"><span class="input-group-addon">Rs.</span> 
                                        <input type="text" placeholder="Price" id="price" name="price" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="price" class="control-label">Description</label>
                                    <textarea name="textarea" id="textarea" class="form-control"></textarea>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <button type="button" class="btn btn-primary btn-block">Save</button>
                                    </div>
                                    <div class="col-sm-6">
                                        <button type="button" class="btn btn-default btn-block collapsed" data-toggle="collapse" data-target="#c22" >Close</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                </li>
            </ul>
        </div>
        <profile-loan-emis :emisData="emisData"></profile-loan-emis>
    </div>
</div>
</template>
<script>
import ProfileLoanEmis from './ProfileLoanEmis';
export default {
    name: 'profile-loan-tab',
    components:{
        'profile-loan-emis' : ProfileLoanEmis
    },
  	data(){
        return {
            loans : [{}],
            emisData : {
                emis:[{}]
            },
            activeIndex: 0,
            ifPaidAll: true
        }
    },
    created(){
        this.getLoans();
    },
    methods:{
        getLoans:function(){
            this.$store.dispatch(`loan/getLoans`, this.$route.params).then(
                (res) => {
                    if(res.status == 'success'){
                        this.loans = res.loans;
                        this.emisData.emis = res.emis;
                        var ifPaid = true;
                        $.each( res.loans, function( key, value ) {
                            if(value.status == 'pending') {
                                ifPaid = false
                                return false
                            }
                        });
                        this.ifPaidAll = ifPaid
                    }else{
                        console.log(res, 'error');
                    }
                }
            );
        },
        choseLoan:function(data, index){
            if(this.activeIndex == index) return false;
            this.activeIndex = index;
            const params = {'loan_id':data.id};
            Object.assign(params,this.$route.params);
            this.$store.dispatch(`emi/getEmis`, params).then(
                (res) => {
                    if(res.status == 'success'){
                        //console.log(res);
                        this.emisData.emis = res.emis;
                    }else{
                        console.log(res, 'error');
                    }
                }
            );
        }
    }
}
</script>
<style>
.badge-success{color: #fff !important;background-color: #73A839 !important;}
.badge-danger {color: #fff !important;background-color: #d9534f !important;}
</style>