<template>
  <div>
    <h4>
      <i class="fa fa-money"></i>&nbsp;&nbsp;Account / Loan Detail
    </h4>
    <hr />
    <div class="row">
      <div class="col-sm-3">
        <ul class="nav nav-pills nav-stacked">
          <li v-if="loans.length > 0" v-for="(loan, index) in loans" :class="{ 'active': activeIndex === index }" v-on:click="choseLoan(loan, index)">
            <a href="javascript:void(0)">
              <i class="fa fa-inr" aria-hidden="true"></i>
              &nbsp;&nbsp;{{ loan.amount }}
              <span v-if="loan.status == 'paid'" class="badge badge-success pull-right">
                Paid
                <i class="fa fa-check" aria-hidden="true"></i>
              </span>
              <span v-else class="badge badge-danger pull-right">
                Pending
                <i class="fa fa-times" aria-hidden="true"></i>
              </span>
            </a>
          </li>
          <li v-if="ifPaidAll == true">
            <a href="#c22" data-toggle="collapse" class="collapsed" style="color:#3c763d;background:#dff0d8;">
              <i class="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Apply New Loan
            </a>
            <div id="c22" class="panel-collapse collapse" style="height: 0px;">
              <div class="panel-body">
                <form action class="form-vertical" @submit="createLoan(post)">
                  <div class="form-group">
                    <label for="price" class="control-label">Amount</label>
                    <div class="input-group">
                      <span class="input-group-addon">Rs.</span>
                      <input type="text" placeholder="Amount" id="amount" v-model="loan_data.amount" class="form-control" v-on:keyup="paidAmountFormula"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="price" class="control-label">Paid amount</label>
                    <div class="input-group">
                      <span class="input-group-addon">Rs.</span>
                      <input
                        type="text"
                        placeholder="Paid Amount"
                        id="price"
                        v-model="loan_data.paid_amount"
                        class="form-control"
                        :readonly="loan_data.paid_amount"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="price" class="control-label">EMI</label>
                    <div class="input-group">
                      <span class="input-group-addon">Rs.</span>
                      <input
                        type="text"
                        placeholder="Emi"
                        id="emi"
                        v-model="loan_data.emi"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="price" class="control-label">Description</label>
                    <textarea
                      v-model="loan_data.desc"
                      id="desc"
                      placeholder="Enter description"
                      class="form-control"
                    ></textarea>
                  </div>
                  <div class="row">
                    <div class="col-sm-6">
                      <button
                        :disabled="!isValid"
                        class="btn btn-primary btn-block"
                        @click.prevent="createLoan(loan_data)"
                      >Save</button>
                    </div>
                    <div class="col-sm-6">
                      <button
                        type="button"
                        class="btn btn-default btn-block collapsed"
                        data-toggle="collapse"
                        data-target="#c22"
                      >Close</button>
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
import ProfileLoanEmis from "./ProfileLoanEmis";
export default {
  name: "profile-loan-tab",
  components: {
    "profile-loan-emis": ProfileLoanEmis
  },
  data() {
    return {
      loans: [{}],
      emisData: {
        emis: [{}]
      },
      activeIndex: 0,
      ifPaidAll: true,
      loan_data: {
        user_id: this.$auth.user().id,
        client_id: this.$route.params.id,
        amount: '',
        paid_amount: '',
        emi: '',
        emi_type: "daily",
        desc: ''
      }
    };
  },
  created() {
    this.getLoans();
  },
  methods: {
    getLoans: function() {
      this.$store.dispatch(`loan/getLoans`, this.$route.params).then(res => {
        if (res.status == "success") {
          this.loans = res.loans;
          this.emisData.emis = res.emis;
          var ifPaid = true;
          $.each(res.loans, function(key, value) {
            if (value.status == "pending") {
              ifPaid = false;
              return false;
            }
          });
          this.ifPaidAll = ifPaid;
        } else {
          console.log(res, "error");
        }
      });
    },
    choseLoan: function(data, index) {
      if (this.activeIndex == index) return false;
      this.activeIndex = index;
      const params = { loan_id: data.id };
      Object.assign(params, this.$route.params);
      this.$store.dispatch(`emi/getEmis`, params).then(res => {
        if (res.status == "success") {
          //console.log(res);
          this.emisData.emis = res.emis;
        } else {
          console.log(res, "error");
        }
      });
    },
    createLoan: function(form_data) {
      this.$store.dispatch("loan/createLoan", form_data).then(res => {
        if (res.status == "success") {
          this.getLoans();
        } else {
          console.log(res, "error");
        }
      });
    },
    paidAmountFormula:function(){
        this.loan_data.paid_amount = parseInt(this.loan_data.amount - (this.loan_data.amount*0.12))
    }
  },
  computed: {
    isValid: function() {
      return (
        this.loan_data.amount !== "" &&
        this.loan_data.paid_amount !== "" &&
        this.loan_data.emi !== ""
      );
    }
  }
};
</script>
<style>
.badge-success {
  color: #fff !important;
  background-color: #73a839 !important;
}
.badge-danger {
  color: #fff !important;
  background-color: #d9534f !important;
}
</style>