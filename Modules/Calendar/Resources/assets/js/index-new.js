import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin from '@fullcalendar/interaction';
import momentPlugin from '@fullcalendar/moment';
import bootstrapPlugin from '@fullcalendar/bootstrap';

var calenderObj = function(){
	var calenderRender = function(data=null){
		initCalendar('#calendar', data);
	};
	var datepicker_init = function(){
		const date = new Date();
		const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		const date_picker = $('.datepicker');
		date_picker.attr("autocomplete", "off");
		date_picker.datepicker({
			clearBtn:true,
			format:'yyyy-mm-dd',
			todayHighlight: true,
		});
		date_picker.datepicker('setDate', today);
	};
	var initCalendar = function(selector, data){
		var calendar = new Calendar(document.getElementById('calendar'), {
		schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
		plugins: [ momentPlugin , interactionPlugin , resourceTimelinePlugin , bootstrapPlugin],
		timeZone: 'UTC',
		aspectRatio: 2.4,
		navLinks: true, // can click day/week names to navigate views
		defaultView: 'resourceTimelineWeek',
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth,resourceTimelineYear'
		},
		//selectHelper: true,
		selectable: true,
		selectMirror: true,
		editable: true,
		eventLimit: true, // allow "more" link when too many events//droppable: true,
		droppable:false,
		themeSystem: 'bootstrap',
		select: function(arg) {
			console.log(arg.start)
			console.log(arg.end)
			console.log(arg.startStr)
			console.log(arg.endStr)
			console.log(arg.allDay)
			console.log(arg.jsEvent)
			console.log(arg.view)
			console.log(arg.resource)
			var title = prompt('Event Title:');
			if (title) {
				calendar.addEvent({
					title: title,
					start: arg.start,
					end: arg.end,
					allDay: arg.allDay
				})
			}
			calendar.unselect()
		},
		resourceColumns: [
		{
			labelText: 'Client',
			field: 'name'
		},
		{
			labelText: 'Loan',
			field: 'loan'
		}],
		views: {
			week: {
				type: 'timeline',
				duration: { weeks: 1 },
				slotDuration: { days: 1},
				titleFormat: 'D MMMM YYYY',
				columnHeaderFormat: 'ddd D',
			}
		},
		dayClick: function(date, allDay, jsEvent, view) {
			console.log("---dayClick strat---");
			/*	     	$("#dialog").dialog("option", "position", {
			my: "bottom-10",
			of: jsEvent
			});
			$("#dialog").dialog("open");*/
			alert('Clicked on: ' + date.format());
			alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
			alert('Current view: ' + view.name);
			// change the day's background color just for fun
			$(this).css('background-color', 'red');
			console.log("---dayClick end---");
		},
		dayRender: function (dayRenderInfo) {
			console.log("--Day reander start--")
			console.log(dayRenderInfo.el);
			console.log("--Day reander end--")
			//date.el.append("<span class='hoverEffect' style='display:none;'>+</span>");
			/*date.el.mouseenter(function() {
			date.el.find(".hoverEffect").show();
			date.el.css("background", "rgba(0,0,0,.1)");
			}).mouseleave(function() {
			$(".hoverEffect").hide();
			date.el.removeAttr('style');
			});*/

		},
		resources: data.resources,
		resourceRender: function(info) {
			const x = document.createElement("A");
			const icon = document.createElement("I");
			icon.style.color = info.resource._resource.ui.backgroundColor;
			icon.setAttribute("class","fa fa-circle");
			const t = document.createTextNode(' \t ' + info.el.querySelector('.fc-cell-text').innerText);
			x.setAttribute("href", route('calendar.info',{'id':info.resource.id}));
			x.setAttribute("target","_Blank");
			x.style.textDecoration = "none";
			x.appendChild(t);
			info.el.querySelector('.fc-cell-text').innerText = "";
			info.el.querySelector('.fc-cell-text').appendChild(icon);
			info.el.querySelector('.fc-cell-text').appendChild(x);
		},
		events: data.events,
		eventRender: function (event, element) {
			let tooltip = event.event.title;
			let desc = event.event.extendedProps.description;
			if(event.el)
			{
				//Tooltip start
				//$(event.el).attr("data-original-title", tooltip)
				$(event.el).tooltip({
					html:true,
					boundary: 'window',
					title: "<span>"+desc.name+"</br><em>"+desc.date+"</em></br>"+desc.emi+"</span>"
				});
				//Tooltip end
				//popover start.
				/*$(event.el).attr({"rel":"popover","data-trigger":"hover","data-placement":"bottom"});
				$(event.el).popover({
				html : true,
				title: '<i class="fa fa-user" aria-hidden="true"></i> '+desc.name,
				content: function() {
				return '<p><b>Date:</b> <em>'+desc.date+'</em><br><b> Emi:</b> <i class="fa fa-inr" aria-hidden="true"></i> '+desc.emi+'</p>';
				}
				});*/
				//popover end
			}
		},
		//Event Click
		eventClick: function (event) {
			console.log("--- eventClick start ---");
			console.log(event.event);
			console.log("--- eventClick end ---");
		}
	});
	calendar.render();
	};
	var ajaxSetup = function(){
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});
	}
	var loadData = function(){
		$.ajax({
			url:route('calendar.data'),
			type:'post',
			data:'',
			success:function(res){
				calenderRender(res);
			},
			error:function(res){ alert("Error"); }
		});
	}
	var storemi = function(){
		$('.btn-emi-js').on('click', function(e){
			const form = $('.store_emi');
			let url = form.data('url');
			let data = form.serializeArray();
			data = $.merge( $.merge( [], data ), [{name:"loan_id",value:$( "#emiFormControlSelect1 option:selected" ).data('loanid')}] );
			$.ajax({
				url:url,
				type:'post',
				data:data,
				success:function(res){
					loadData();
					$('#emiModal').modal('hide');
				},
				error:function(err_res){ alert("! Error "); }
			})
		});
	};
	return{
		init: function () {
			datepicker_init();
			ajaxSetup();
			loadData();
			storemi();
		}
	};
}();
jQuery(function() {
	calenderObj.init();
});