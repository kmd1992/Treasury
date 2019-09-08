<template>
<div class="main-content">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card bg-boxshadow mb-30">
                    <div class="card-body">
                        <div class="col-12">
                            <!-- Main Content Area -->
                            <div class="d-flex justify-content-center nifty-modals">
                                <button class="btn rounded-btn  btn-fill btn-fill-primary mr-3 md-trigger" data-modal="modal-1" >ADD EMI</button>
                                
                                <div class="md-modal md-effect-1" id="modal-1">
                                    <div class="md-content">
                                        <h3 class="pt-4">Add EMI</h3>
                                        <div>
                                            <form class="forms-sample">
                                                <div class="form-group">
                                                    <label for="exampleInputName1">Date</label>
                                                    <input type="text" class="form-control" id="exampleInputName1" placeholder="Name">
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleFormControlSelect2">Choose Client</label>
                                                    <select class="form-control" id="exampleFormControlSelect2">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputName1">EMI</label>
                                                    <input type="text" class="form-control" id="exampleInputName1" placeholder="Name">
                                                </div>
                                                <button type="submit" class="btn- btn-c-gradient-1 text-white" style="display:initial">Submit</button>
                                                <button class="btn- btn-c-gradient-5 text-white" style="display:initial">Cancel</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="md-overlay"></div>
                            </div>
                            <hr/>
                            <FullCalendar
                            class='demo-app-calendar'
                            ref="fullCalendar"
                            defaultView="resourceTimelineWeek"
                            schedulerLicenseKey="CC-Attribution-NonCommercial-NoDerivatives"
                            :header="calendarHeader"
                            :plugins="calendarPlugins"
                            timeZone="UTC"
                            aspectRatio="1.8"
                            navLinks="false"
                            eventLimit="true"
                            :views="calendarViews"
                            themeSystem="bootstrap"
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
            var overlay = document.querySelector('.md-overlay');
		        [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
                var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                    close = modal.querySelector('.md-close');

                function removeModal(hasPerspective) {
                    classie.remove(modal, 'md-show');
                    if (hasPerspective) {
                        classie.remove(document.documentElement, 'md-perspective');
                    }
                }

                function removeModalHandler() {
                    removeModal(classie.has(el, 'md-setperspective'));
                }
                el.addEventListener('click', function (ev) {
                    classie.add(modal, 'md-show');
                    overlay.removeEventListener('click', removeModalHandler);
                    overlay.addEventListener('click', removeModalHandler);
                    if (classie.has(el, 'md-setperspective')) {
                        setTimeout(function () {
                            classie.add(document.documentElement, 'md-perspective');
                        }, 25);
                    }
                });
                close.addEventListener('click', function (ev) {
                    ev.stopPropagation();
                    removeModalHandler();
                });
            });
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

