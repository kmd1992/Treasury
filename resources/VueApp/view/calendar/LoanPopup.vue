<template id="bs-modal">
    <!-- MODAL -->
    <div class="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">ADD EMI</h4>
                </div>
                <div class="modal-body">
                    <form action="" class="form-vertical" @submit="createEmi(post)">
                        <div class="form-group">
                            <label for="date" class="control-label">Enter Date</label>
                            <input type="text" id="date" :placeholder="datePlaceholder + ' 24:00'" name="date" v-model="emi.date" class="form-control" v-mask="'##/##/#### ##:##'" >
                            <span class="help-block">Format: dd/mm/yyyy</span>
                        </div>
                        <div class="form-group">
                            <label for="client" class="control-label">Select client</label>
                            <!-- <select2Client v-bind="emi"></select2Client> -->
                            <select v-model="emi.client" id="client" name="client" class="form-control">
                                <option selected> --- Select Client ---</option>
                                <option :value="client.id" v-for="client in clientsGettersDropdown">{{ client.text }}</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="price" class="control-label">Enter EMI amount</label>
                            <div class="input-group">
                                <span class="input-group-addon">Rs.</span>
                                <input type="text" placeholder="Price" id="price" name="price" v-model="emi.price" class="form-control">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button :disabled="!isValid" class="btn btn-primary" @click.prevent="createEmi(emi)">Save changes</button>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from 'vuex';
import Vue from 'vue';
import VueMask from 'v-mask'
Vue.use(VueMask);

import select2Client from './Select2';

export default {
    name: 'modal',
    template: '#bs-modal',
    components : {
        select2Client
    },
    data() {
        return {
            emi: {
                date: '',
                client: '--- Select Client ---',
                price: ''
            },
            datePlaceholder: '',
        }
    },
    mounted(){
        const date = new Date();
        this.datePlaceholder = (this.convertDate(new Date(date.getFullYear(), date.getMonth(), 1)));
        
        this.loadClients();     //API call
    },
    methods: {
        createEmi:function(emi) {
            this.$store.dispatch('emi/createEmi', emi).then(
                (response) => {
                    if(response.status == 201){
                        $("#myModal").modal('hide');
                        console.log("Emi Stored successfuly");
                    }
                }
            );
        },
        convertDate:function(str) {
            var date = new Date(str),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            return [day, mnth, date.getFullYear()].join("/");
        },
        loadClients:function(){
            this.$store.dispatch(`clientStore/getClientsDropdown`);
        }
    },
    computed: {
        isValid:function() {
            return (this.emi.date !== '' && this.emi.client !== '' && this.emi.price !== '')
        },
        ...mapGetters('clientStore', ['clientsGettersDropdown'])
    }
};
</script>

