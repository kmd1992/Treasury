<template>
<div class="col-sm-9">
    <table v-if="dataEmi.emis.length > 0" class="table table-hover table-nomargin table-colored-header table-striped">
        <thead>
            <tr>
                <th>#NO</th>
                <th>EMI</th>
                <th>DATE</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(emi, index) in dataEmi.emis">
                <td>{{ emi.id }}</td>
                <td>{{ emi.emi }}</td>
                <td>{{ dateFormat(emi.start) }}</td>
                <td>
                    <button style="border-radius: 50%;" class="btn btn-danger btn-sm" title="Delete" v-on:click="removeEmi(emi)"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
        </tbody>
    </table>
    <div v-else class="alert alert-danger alert-dismissable">
        <strong><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Opes!</strong>&nbsp;&nbsp;This loan emi's not found.
    </div>
</div>
</template>
<script>
import moment from 'moment'
export default {
    name: 'profile-loan-emis',
    props: {
        emisData: Object
    },
  	data(){
        return {
            dataEmi: Object.assign(this.emisData)
        }
    },
    methods:{
        dateFormat: function (value, format=null) { 
            if (value) {
                return moment(String(value)).format(format || 'DD-MM-YYYY')
            }
        },
        removeEmi:function(data){
            if(confirm('Are you sure want to delete this EMI')){
                this.$store.dispatch('emi/removeEmis', {'id':data.id,'loan_id':data.loan_id})
                .then( (res) => {
                    if(res.status == 'success'){
                        this.dataEmi = res;
                    }else{
                        console.log(res);
                    }               
                })
            }
        }
    },
    created(){
        //console.log(this.dataEmi);
    },
}
</script>