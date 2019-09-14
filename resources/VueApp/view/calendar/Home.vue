<template>
<div id="main" style="margin-left: 0px;">
    <div class="container-fluid">
        <page-head v-bind="pageHeadData"></page-head>      <!-- Page header -->

        <breadcrumbs v-bind="breadcrumbs"></breadcrumbs>    <!-- Breadcrums component -->
        
        <div class="row">
            <div class="col-sm-12">
                <div class="box">
                    <div class="box-title">
                        <h3><i class="fa fa-bars"></i></h3>

                        <model></model>     <!-- Model popup component -->

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">ADD EMI</button>
                    </div>
                    <div class="box-content nopadding">
                        <FullCalendar
                        class='demo-app-calendar'
                        ref="fullCalendar"
                        defaultView="resourceTimelineWeek"
                        schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                        :header="calendarHeader"
                        :plugins="calendarPlugins"
                        :resourceAreaWidth=180
                        :contentHeight=437
                        :navLinks=true
                        :eventLimit=true
                        :views="calendarViews"
                        themeSystem='bootstrap'
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
            calendarResources: 'https://fullcalendar.io/demo-resources.json?with-nesting&with-colors',
            calendarResourceRender: function(info) {
                const x = document.createElement("A");
                const icon = document.createElement("I");
                //----- icon.style.color = info.resource._resource.ui.backgroundColor;
                icon.style.color = "#577CFF";
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
            calendarEvents: "https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline",
            calendarEventRender: function(event, element) {
                let tooltip = event.event.title;
                console.log(event.event);
                //----- let desc = event.event.extendedProps.description;
                let desc = {name: 'Test Event Name', date: '01-01-2019', emi: '100'};
                if (event.el) {

                    //Tooltip start
                    //$(event.el).attr("data-original-title", tooltip)
                    $(event.el).tooltip({
                        html: true,
                        placement:'top',
                        boundary: 'window',
                        container: 'body',
                        title: "<span><i class='fa fa-circle' style='color: rgb(87, 124, 255);'></i>&nbsp;&nbsp;" + desc.name + "</br><em>" + desc.date + "</em></br>" + desc.emi + "</span>"
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
        // ...
        $( document ).ready( function()
        {

        });
    },
  methods: {
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends // update a property
    },
    gotoPast() {
      let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
      calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    },
    handleDateClick(arg) {
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents.push({ // add new event data
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      }
    },
    convertEvtTime(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    },
    openModal() {
        this.modalOpen = !this.modalOpen;
    }
  }
}
</script>

<style>
.fc th, .fc td{ border-color: #ddd; }
</style>