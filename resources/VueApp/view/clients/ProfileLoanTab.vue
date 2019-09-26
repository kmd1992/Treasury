<template>
<div>
    <h4><i class="fa fa-money"></i>&nbsp;&nbsp;Account / Loan Detail</h4>
    <hr>
    <div class="row">
        <div class="col-sm-3">
            <ul class="nav nav-pills nav-stacked">
                <li v-if="loans.length > 0" v-for="(loan, index) in loans" :class="{ 'active': index === 0 }">
                    <a href="#"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;{{ loan.amount }}
                        <span v-if="loan.status == 'paid'" class="badge badge-success pull-right">Paid</span>
                        <span v-else class="badge badge-danger pull-right">Pending</span>
                    </a>
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
            }
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
                        this.loans = res.loans
                        this.emisData.emis = res.emis
                        //console.log(res);
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