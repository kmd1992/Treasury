<template>
<div>
    <h4><i class="fa fa-address-card-o"></i>&nbsp;&nbsp;Personal Detail</h4>
    <hr>
    <form action="" class="form-vertical" @submit="createPost(post)">
        <input type="hidden" v-model="data.form_data.user_id">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="inputName">Full Name &#x2a;</label>
                    <input type="text" class="form-control" v-model="data.form_data.name" id="inputName" placeholder="Enter full name" disabled>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="inputEmail">Email Address</label>
                    <input type="email" class="form-control" v-model="data.form_data.email" id="inputEmail" placeholder="Enter e-mail address">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="inputContact">Contact No &#x2a;</label>
                    <input type="text" class="form-control" v-model="data.form_data.contact" id="inputContact" placeholder="(000) 000-0000" v-mask="'(###) ###-####'">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="inputSecontact">Secondnary Contact</label>
                    <input type="text" class="form-control" v-model="data.form_data.seccontact" id="inputSecontact" placeholder="(000) 000-0000" v-mask="'(###) ###-####'">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label for="inputGender">Gender &#x2a;</label>
                    <div class="radio">
                        <label><input type="radio" value="male" name="gender" v-model="data.form_data.gender" checked="checked">Male&nbsp;&nbsp;</label>
                        <label><input type="radio" value="female" name="gender" v-model="data.form_data.gender">Female&nbsp;&nbsp;</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="inputCity">City &#x2a;</label>
                    <input type="text" class="form-control" id="inputCity" v-model="data.form_data.city" placeholder="1234 Main St">
                </div>
            </div>
            <div class="col-md-9">
                <div class="form-group ">
                    <label for="inputAddress">Address &#x2a;</label>
                    <input type="text" class="form-control" id="inputAddress" v-model="data.form_data.address" placeholder="Apartment, studio, or floor">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label for="inputOccupation">Occupation &#x2a;</label>
                    <input type="text" class="form-control" id="inputOccupation" v-model="data.form_data.occupation" placeholder="Enter occupation">
                </div>
            </div>
            <div class="col-md-9">
                <div class="form-group ">
                    <label for="inputOccupationAddr">Occupation Address &#x2a;</label>
                    <input type="text" class="form-control" id="inputOccupationAddr" v-model="data.form_data.occupation_add" placeholder="Enter occupation address">
                </div>
            </div>
        </div>
        <hr>
        <button class="btn btn-primary" @click.prevent="createClient(data.form_data)">Save</button>
    </form>
</div>
</template>
<script>
export default {
    name: 'profile-edit-tab',
    props: {
        editFormData: Object
    },
  	data(){
        return {
            data: Object.assign(this.editFormData)
        }
    },
    methods:{
        createClient:function(form_data){
            console.log(form_data);
        }
    }
}
</script>