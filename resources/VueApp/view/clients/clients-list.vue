<template>
    <div>
        <table class="table table-hover table-nomargin table-bordered" v-if="clientsGetters.length > 0">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>City</th>
                    <th>Occupation</th>
                    <th>Type</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="client in clientsGetters" v-bind:key="client.id">
                    <th><i class="fa fa-circle" aria-hidden="true" v-bind:style="{ color: client.color }"></i>&nbsp;&nbsp; {{ client.id }}</th>
                    <td>{{ client.name }}</td>
                    <td>{{ client.contact }}</td>
                    <td>{{ client.city }}</td>
                    <td>{{ client.occupation }}</td>
                    <td>{{ client.payer_type }}</td>
                    <td>{{ client.created_at}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  	name: 'client-list',
  	data(){
        return { 
            clientsList: null
        }
    },
    mounted () {
        this.$store.dispatch(`clientStore/getClients`);
    },
    computed: {
        ...mapGetters('clientStore', ['clientsGetters'])
    },
    /* watch: {
        'clientsGetters': {
            deep: true,
            handler (value) {
                //console.log(value);
                this.clientsList = value
            }
        }
    },
    created: function () {
        this.clientsList = this.clientsGetters
    } */
}
</script>