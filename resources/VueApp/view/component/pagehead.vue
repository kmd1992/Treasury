<template>
  <div class="page-header">
    <div class="pull-left">
      <h1>{{ pageTitle }}</h1>
    </div>
    <div class="pull-right">
      <ul class="stats">
        <!-- <li class='satgreen'>
                <i class="fa fa-money"></i>
                <div class="details">
                    <span class="big">Rs. 324,12</span>
                    <span>Balance</span>
                </div>
        </li>-->
        <li class="lightred">
          <i class="fa fa-calendar"></i>
          <div class="details">
            <span class="big">{{ calendar.date }}</span>
            <span>{{ calendar.day }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
export default {
  props: ["pageTitle"],
  data() {
    return {
      calendar: {
        date: $.datepicker.formatDate("dd M yy", new Date()),
        day: weekday[new Date().getDay()],
        time: null
      }
    };
  }
};
</script>