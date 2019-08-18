import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

var calenderObj = function(){
	var calenderRender = function(){
		initCalendar('#calendar');	
	}
	var initCalendar = function(selector){
		var calendar = new Calendar(document.getElementById('calendar'), {
		  	plugins: [ resourceTimelinePlugin ],
		  	editable: true,
		  	aspectRatio: 2.4,
		  	timeZone: 'UTC',
			header: {
			      left: 'prev,next',
			      center: 'title',
			      right: 'resourceTimelineWeek,resourceTimelineMonth,resourceTimelineYear'
			},
		  	defaultView: 'resourceTimelineWeek',
		  	//resourceLabelText: 'Employes',
		  	resourceColumns: [
	        	{
	          		labelText: 'Client',
	          		field: 'client'
	        	},
	        	{
	          		labelText: 'Loan',
	          		field: 'amount'
	        	},
	        	{
	          		labelText: 'EMI (daily)',
	          		field: 'emi'
	        	}
	      	],
	      	views: {
			    week: {
			        type: 'timeline',
			        duration: { weeks: 1 },
			        slotDuration: { days: 1}
			    }
			},
		  	resources: [
		        { id: '1', amount: 5000, client: 'Kishan', emi: '100'},
		        { id: '2', amount: 10000, client: 'Ranchhod', emi: '200', eventColor: '#D33A1A' },
		        { id: '3', amount: 15000, client: 'Parth', emi: '300', eventColor: '#09B5F0' },
		        { id: '4', amount: 20000, client: 'RD Modi', emi: '500', eventColor: '#1AD32E' },
		    ],
		    events: [
		        { id: '1', resourceId: '1', start: '2019-04-07', end: '2019-04-08', title: '100' },
		        { id: '2', resourceId: '2', start: '2019-04-07', end: '2019-04-08', title: '200' },
		        { id: '3', resourceId: '3', start: '2019-04-07', end: '2019-03-08', title: '250' },
		        { id: '4', resourceId: '4', start: '2019-04-07', end: '2019-04-08', title: '300' },
		        { id: '5', resourceId: '4', start: '2019-04-07', end: '2019-04-08', title: '300' }
		    ]
		});	
		calendar.render();
	};

	return{
	    init: function () {
        	calenderRender();
    	}
    };
}();

jQuery(function() {
	calenderObj.init();
})