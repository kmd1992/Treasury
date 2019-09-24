<template>
<div id="main" style="margin-left: 0px;">
    <div class="container-fluid">
        <page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->

        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>    <!-- Breadcrums component -->
        
        <div class="row">
            <div class="col-sm-12">
                <div class="box box-bordered">
                    <div class="box-title">
                        <h3><i class="fa fa-bars"></i></h3>

                        <model></model>     <!-- Model popup component -->

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">ADD EMI</button>
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

import "@fullcalendar/core/main.css";
import "@fullcalendar/timeline/main.css";
import "@fullcalendar/resource-timeline/main.css";

import pageHead from '../component/pagehead';
import breadcrumbs from "./../component/breadcrumbs";
import Model from "./LoanPopup";

export default {
    components: {
        'page-head' : pageHead,
        'breadcrumbs' : breadcrumbs,
        'model' : Model,
        FullCalendar,
    },
    data: function() {
        return {
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
                x.setAttribute("href", "#");
                x.setAttribute("target", "_Blank");
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
                        "<i class='fa fa-circle' style='color: "+desc.color+"'></i>&nbsp;&nbsp;" + 
                        desc.name + "</br>"+
                        "<em>" + desc.date + "</em></br>" + 
                        "Emi :- "+desc.emi + "</br>"+
                        "Paid Amount :- "+desc.paidAmount + "</br>"+
                        "Pending Amount :- "+desc.pendingAmount + "</br>"+
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
    created() {
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
            if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
                this.calendarEvents.push({ // add new event data
                title: 'New Event',
                start: arg.date,
                allDay: arg.allDay
                })
            }
        },
        convertEvtTime:function(str) {
            var date = new Date(str),
                mnth = ("0" + (date.getMonth() + 1)).slice(-2),
                day = ("0" + date.getDate()).slice(-2);
            return [date.getFullYear(), mnth, day].join("-");
        },
        openModal:function() {
            this.modalOpen = !this.modalOpen;
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
        }
    }
}
</script>

<style>
.tooltip-inner{text-align: left !important; color: #ddd !important;}
.fc th, .fc td{ border-color: #ddd; }
</style>