<template>
<div id="main" style="margin-left: 0px;">
    <div class="container-fluid">
        <page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->

        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>    <!-- Breadcrums component -->
        
        <div class="row">
            <div class="col-sm-12">
                <div class="box box-bordered">
                    <div class="box-title">
                        <h3><i class="fa fa-calendar"></i></h3>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#emiModal"><i class="fa fa-plus"></i>&nbsp;ADD EMI</button>
                        <!-- MODEL POPUP START-->
                        <div class="modal fade" ref="vuemodal" id="emiModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title" id="myModalLabel">ADD EMI</h4>
                                    </div>
                                    <div class="modal-body">
                                        <form action="" class="form-vertical" @submit="createEmi(post)">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="date" class="control-label">Enter From Date</label>
                                                        <input type="text" id="fromdate" :placeholder="datePlaceholder.fromPlaceDate + ' 24:00'" name="date" v-model="emi.fromdate" class="form-control" v-mask="'##/##/#### ##:##'" >
                                                        <span class="help-block">Format: dd/mm/yyyy</span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group">
                                                        <label for="date" class="control-label">Enter To Date</label>
                                                        <input type="text" id="todate" :placeholder="datePlaceholder.toPlaceDate + ' 24:00'" name="date" v-model="emi.todate" class="form-control" v-mask="'##/##/#### ##:##'" >
                                                        <span class="help-block">Format: dd/mm/yyyy</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label for="client" class="control-label">Select client</label>
                                                        <select v-model="emi.client" id="client" name="client" class="form-control">
                                                            <option selected> --- Select Client ---</option>
                                                            <option :value="client.id" v-for="client in clientsGettersDropdown">{{ client.text }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label for="price" class="control-label">Enter EMI amount</label>
                                                        <div class="input-group">
                                                            <span class="input-group-addon">Rs.</span>
                                                            <input type="text" placeholder="Price" id="price" name="price" v-model="emi.price" class="form-control">
                                                        </div>
                                                    </div>
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
                        <!-- MODEL POPUP END-->
                        <button class="btn btn-default" v-on:click="refereaceCal()"><i class="fa fa-refresh" aria-hidden="true"></i></button>
                    </div>
                    <div class="box-content">
                        <FullCalendar
                        class='demo-app-calendar'
                        ref="fullCalendar"
                        defaultView="resourceTimelineWeek"
                        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                        :header="calendarHeader"
                        :plugins="calendarPlugins"
                        :resourceAreaWidth=280
                        :contentHeight=437
                        :navLinks=true
                        :eventLimit=true
                        :views="calendarViews"
                        themeSystem='bootstrap'
                        resourceGroupField='type'
                        :businessHours="calendarBusinessHours"
                        :resourceColumns="calendarResourceColumns"
                        :resources="calendarResources"
                        :resourceRender="calendarResourceRender"
                        :events="calendarEvents"
                        :eventRender="calendarEventRender"
                        @dateClick="handleDateClick"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { mapGetters } from 'vuex';
import Vue from 'vue';
import VueMask from 'v-mask'

import "@fullcalendar/core/main.css";
import "@fullcalendar/timeline/main.css";
import "@fullcalendar/resource-timeline/main.css";

import pageHead from '../component/pagehead';
import breadcrumbs from "./../component/breadcrumbs";

export default {
    components: {
        'page-head' : pageHead,
        'breadcrumbs' : breadcrumbs,
        FullCalendar,
    },
    data: function() {
        return {
            emi: {
                fromdate: '',
                todate:'',
                client: '--- Select Client ---',
                price: ''
            },
            datePlaceholder: {
                fromPlaceDate:'',
                toPlaceDate:'',
            },
            pageHeadData:{
                pageTitle: 'Calendar'
            },
            breadcrumbs: {
                data: [{
                    title: 'Home',
                    to: { path: '/' }
                },{
                    title: 'Calendar',
                    to: { name: 'calendar'}
                }]
            },
            calendarHeader:{
                left: 'prev,next today',
                center: 'title',
                right: 'resourceTimelineWeek,resourceTimelineMonth,resourceTimelineYear'
            },
            calendarPlugins: [ // plugins must be defined in the JS
                resourceTimelinePlugin, 
                interactionPlugin,
                bootstrapPlugin 
            ],
            calendarViews:{
                week: {
                    type: 'timeline',
                    duration: { weeks: 1 },
                    slotDuration: { days: 1 },
                    columnHeaderFormat: 'ddd D',
                }
            },
            calendarBusinessHours: {
                daysOfWeek: [ 1, 2, 3, 4, 5, 6 ], // Monday - Thursday
            },
            calendarWeekends: true,
            calendarResources: [{}],
            calendarResourceColumns: [
                {
                    labelText: 'Client',
                    field: 'name'
                },
                {
                    labelText: 'Loan',
                    field: 'loan'
                }
            ],
            calendarResourceRender: function(info) {
                const x = document.createElement("A");
                const icon = document.createElement("I");
                //console.log(info.resource);
                icon.style.color = info.resource.eventBackgroundColor;
                icon.setAttribute("class", "fa fa-circle");
                const t = document.createTextNode(' \t ' + info.el.querySelector('.fc-cell-text').innerText);
                /*----- x.setAttribute("href", route('calendar.info', {
                    'id': info.resource.id
                })); */
                x.setAttribute("href", "/client/profile/"+info.resource.id);
                x.style.textDecoration = "none";
                x.appendChild(t);
                info.el.querySelector('.fc-cell-text').innerText = "";
                info.el.querySelector('.fc-cell-text').appendChild(icon);
                info.el.querySelector('.fc-cell-text').appendChild(x);
            },
            calendarEvents: [{}],
            calendarEventRender: function(event, element) {
                let tooltip = event.event.title;
                let desc = event.event.extendedProps.description;
                let date = new Date(desc.date);
                let descDate = ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + date.getFullYear();

                //console.log(desc);
                //let desc = {name: 'Test Event Name', date: '01-01-2019', emi: '100'};
                if (event.el) {

                    //Tooltip start
                    //$(event.el).attr("data-original-title", tooltip)
                    $(event.el).tooltip({
                        html: true,
                        placement:'top',
                        boundary: 'window',
                        container: 'body',
                        title: "<span style='text-align:left'>"+
                        "<div style='height:3px;background: "+desc.color+"'></div>" + 
                        desc.name + "</br>"+
                        "Date :- " + descDate + "</br>" + 
                        "Emi :- "+desc.emi + "</br>"+
                        "Paid Amount :- "+desc.paidAmount + "</br>"+
                        "Pending Amount :- "+desc.pendingAmount + "</br>"+
                        "<div style='height:3px;background: "+desc.color+"'></div>" +
                        "</span>"
                    });
                    
                    //Tooltip end

                    //popover start.
                    /* $(event.el).attr({"rel":"popover","data-trigger":"hover","data-placement":"bottom"});
                                $(event.el).popover({
                        html : true,
                        title: '<i class="fa fa-user" aria-hidden="true"></i> '+desc.name,
                        content: function() {
                            return '<p><b>Date:</b> <em>'+desc.date+'</em><br><b> Emi:</b> <i class="fa fa-inr" aria-hidden="true"></i> '+desc.emi+'</p>';
                        }
                    }); */
                    //popover end
                }
            },
            modalOpen: false        //Model dialog
        }
    },
    mounted(){
        const date = new Date();
        this.datePlaceholder.fromPlaceDate = (this.convertDate(new Date(date.getFullYear(), date.getMonth(), 1)));
        this.datePlaceholder.toPlaceDate = (this.convertDate(new Date(date.getFullYear(), date.getMonth()+1, 0)));
        
        this.loadClients();     //API call
        $(this.$refs.vuemodal).on("hidden.bs.modal", this.clearForm)
        this.getCalendarResouces();
        this.getCalendarEvents();
    },
    methods: {
        toggleWeekends:function() {
            this.calendarWeekends = !this.calendarWeekends // update a property
        },
        gotoPast:function() {
            let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
            calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
        },
        handleDateClick:function(arg) {
            /* if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
                this.calendarEvents.push({ // add new event data
                title: 'New Event',
                start: arg.date,
                allDay: arg.allDay
                })
            } */
        },
        convertEvtTime:function(str) {
            var date = new Date(str),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        },
        getCalendarResouces: function(){
            this.$store.dispatch(`clientStore/getClientsResouces`, {params: {auth: this.$auth.user().id}}).then(
                (res) => {
                    if(res.status == 'success'){
                        this.calendarResources = res.resouces 
                        //console.log(res.resouces);
                    }
                }
            );
        },
        getCalendarEvents:function(){
            this.$store.dispatch(`clientStore/getClientsEvents`, {params: {auth: this.$auth.user().id}}).then(
                (res) => {
                    if(res.status == 'success'){
                        this.calendarEvents = res.events 
                        //console.log(res);
                    }
                }
            );
        },
        refereaceCal:function(){
            this.getCalendarResouces();
            this.getCalendarEvents();
            this.$refs.fullCalendar.$emit('refetchEvents')
            //let calendarApi = this.$refs.fullCalendar.getApi()
            //calendarApi.next()
        },
        createEmi:function(emi) {
            this.$store.dispatch('emi/createEmi', emi).then(
                (response) => {
                    if(response.status == 200){
                        this.refereaceCal();
                        $(this.$refs.vuemodal).modal('hide');
                    }
                }
            );
        },
        clearForm:function(){
            this.emi.fromdate = '';
            this.emi.todate = '';
            this.emi.client = '--- Select Client ---';
            this.emi.price = '';
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
}
</script>

<style>
.tooltip-inner{text-align: left !important; color: #ddd !important;}
.fc th, .fc td{ border-color: #ddd; }
</style>