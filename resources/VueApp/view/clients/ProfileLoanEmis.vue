<template>
<div class="col-sm-9">
    <table v-if="dataEmi.emis.length > 0" class="table table-hover table-nomargin table-colored-header table-striped">
        <thead>
            <tr>
                <th>#NO</th>
                <th>EMI</th>
                <th>DATE</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(emi, index) in dataEmi.emis">
                <td>{{ emi.id }}</td>
                <td>{{ emi.emi }}</td>
                <td>{{ emi.start }}</td>
            </tr>
        </tbody>
    </table>
    <div v-else class="alert alert-danger alert-dismissable">
        <strong><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Opes!</strong>&nbsp;&nbsp;This loan emi's not found.
    </div>
</div>
</template>
<script>
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
    created(){
        console.log(this.dataEmi);
    },
}
</script>