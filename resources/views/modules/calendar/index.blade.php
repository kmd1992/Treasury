@extends('calendar::layouts.master')

@push('style')
<link href='{{ url('css/modules/timeandreports/timeandreports.css') }}' rel='stylesheet' />
 @endpush

@section('content')
<div class="row">
    <div class="col-md-12">
	  	<div class="card">
		  	<div class="card-header">
		    Quote <i class="fa fa-check" aria-hidden="true"></i>
		  	</div>
		  	<div class="card-body">
		    	<div id='calendar'></div>
		 	</div>
		</div>
	</div>
</div>
@stop

@push('script')
<script type="text/javascript" src="{{ url('js/modules/calendar/index.js') }}"></script>
@endpush