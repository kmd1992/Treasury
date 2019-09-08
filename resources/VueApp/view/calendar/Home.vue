<template>
<div id="main" style="margin-left: 0px;">
    <div class="container-fluid">
        <div class="page-header">
            <div class="pull-left">
                <h1>Blank page</h1>
            </div>
            <div class="pull-right">
                <ul class="stats">
                    <li class='satgreen'>
                        <i class="fa fa-money"></i>
                        <div class="details">
                            <span class="big">$324,12</span>
                            <span>Balance</span>
                        </div>
                    </li>
                    <li class='lightred'>
                        <i class="fa fa-calendar"></i>
                        <div class="details">
                            <span class="big">February 22, 2013</span>
                            <span>Wednesday, 13:56</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="breadcrumbs">
            <ul>
                <li>
                    <router-link :to="{ path: '/' }">Home</router-link>
                    <i class="fa fa-angle-right"></i>
                </li>
                <li>
                    <router-link :to="{ name: 'calendar'}">Calendar</router-link>
                </li>
            </ul>
            <div class="close-bread">
                <a href="#">
                    <i class="fa fa-times"></i>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="box">
                    <div class="box-title">
                        <h3>
                        <i class="fa fa-bars"></i>
                        Basic Widget
                        </h3>
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
                        :navLinks=true
                        :eventLimit=true
                        :views="calendarViews"
                        :resources="calendarResources"
                        :events="calendarEvents"
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

import ModalDirection from "./LoanPopup";

export default {
  components: {
    FullCalendar,
    ModalDirection
  },
    data: function() {
        return {
            calendarHeader:{
                left: 'prev,next today',
                center: 'title',
                right: 'resourceTimelineWeek,resourceTimelineMonth,resourceTimelineYear'
            },
            calendarPlugins: [ // plugins must be defined in the JS
                //momentPlugin, 
                resourceTimelinePlugin, 
                interactionPlugin,
                bootstrapPlugin 
            ],
            calendarViews:{
            week: {
                type: 'timeline',
                duration: {
                    weeks: 1
                },
                slotDuration: {
                    days: 1
                },
                columnHeaderFormat: 'ddd D',
            }
            },
            calendarWeekends: true,
            calendarResources: 'https://fullcalendar.io/demo-resources.json?with-nesting&with-colors',
            calendarEvents: "https://fullcalendar.io/demo-events.json?single-day&for-resource-timeline",
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
    openModal() {
        this.modalOpen = !this.modalOpen;
    }
  }
}
</script>

