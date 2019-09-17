<template>
<div id="main" style="margin-left: 0px;">
    <div class="container-fluid">
        <page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->
        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>   <!-- Breadcrums component -->
        <div class="row">
            <div class="col-sm-12">
                <div class="box box-bordered">
                    <div class="box-title">
                        <h3><i class="fa fa-bars"></i></h3>
                        <router-link :to="{ path: '/client' }" class="btn btn-primary"><i class="fa fa-arrow-left"></i>&nbsp;BACK</router-link>
                    </div>
                    <div class="box-content ">
                        <form action="" class="form-vertical" @submit="createPost(post)">
                            <input type="hidden" v-model="form_data.user_id">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="inputName">Full Name &#x2a;</label>
                                        <input type="text" class="form-control" v-model="form_data.name" id="inputName" placeholder="Enter full name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="inputEmail">Email Address</label>
                                        <input type="email" class="form-control" v-model="form_data.email" id="inputEmail" placeholder="Enter e-mail address">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="inputContact">Contact No &#x2a;</label>
                                        <input type="text" class="form-control" v-model="form_data.contact" id="inputContact" placeholder="(000) 000-0000" v-mask="'(###) ###-####'">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="inputSecontact">Secondnary Contact</label>
                                        <input type="text" class="form-control" v-model="form_data.seccontact" id="inputSecontact" placeholder="(000) 000-0000" v-mask="'(###) ###-####'">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="inputGender">Gender &#x2a;</label>
                                        <div class="radio">
                                            <label><input type="radio" value="male" name="gender" v-model="form_data.gender" checked="checked">Male&nbsp;&nbsp;</label>
                                            <label><input type="radio" value="female" name="gender" v-model="form_data.gender">Female&nbsp;&nbsp;</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="inputCity">City &#x2a;</label>
                                        <input type="text" class="form-control" id="inputCity" v-model="form_data.city" placeholder="1234 Main St">
                                    </div>
                                </div>
                               <div class="col-md-9">
                                    <div class="form-group ">
                                        <label for="inputAddress">Address &#x2a;</label>
                                        <input type="text" class="form-control" id="inputAddress" v-model="form_data.address" placeholder="Apartment, studio, or floor">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="inputOccupation">Occupation &#x2a;</label>
                                        <input type="text" class="form-control" id="inputOccupation" v-model="form_data.occupation" placeholder="Enter occupation">
                                    </div>
                                </div>
                               <div class="col-md-9">
                                    <div class="form-group ">
                                        <label for="inputOccupationAddr">Occupation Address &#x2a;</label>
                                        <input type="text" class="form-control" id="inputOccupationAddr" v-model="form_data.occupation_add" placeholder="Enter occupation address">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="inputGender">Payer Type &#x2a;</label>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" value="client" v-model="form_data.payer_type" name="payer_type" checked="checked">As a Client ?
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" value="lender" v-model="form_data.payer_type" name="payer_type">As a lendar ?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <button :disabled="!isValid" class="btn btn-primary" @click.prevent="createClient(form_data)">Save</button>
                            <router-link :to="{ path: '/client' }" class="btn">Cancel</router-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Vue from 'vue';
import VueMask from 'v-mask'
Vue.use(VueMask);

import pageHead from '../component/pagehead';
import breadcrumbs from "../component/breadcrumbs";
export default {
    components: {
        'page-head' : pageHead,
        'breadcrumbs' : breadcrumbs,
    },
    data(){
        return {
            pageHeadData:{
                pageTitle: 'Add Client'
            },
            breadcrumbs: {
                data: [{
                    title: 'Home',
                    to: { path: '/' }
                },{
                    title: 'Client',
                    to: { name: 'client'}
                },{
                    title: 'Add Client',
                    to: { name: 'client_store'}
                }]
            },
            form_data:{
                user_id : this.$auth.user().id,
                name : '',
                email : '',
                contact : '',
                seccontact : '',
                gender : '',
                city : '',
                address : '',
                occupation : '',
                occupation_add : '',
                payer_type : '',
                color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            },
        }
    },
    methods:{
        createClient:function(form_data){
            this.$store.dispatch('clientStore/createClient', form_data)
            .then( () => {
                this.$router.push({name:'client'});
            })
        }
    },
    computed:{
        isValid:function(){
            return (
                this.form_data.name !== "" && 
                this.form_data.contact !== "" && 
                this.form_data.city !== "" && 
                this.form_data.address !== "" &&
                this.form_data.occupation !== "" &&
                this.form_data.occupation_add !== "" &&
                this.form_data.payer_type !== "" 
            )
        }
    }
}
</script>