<template>
    <div>
        <input class="form-control datepicker"
        ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)"
        data-date-format="dd-mm-yyyy"
        data-date-end-date="0d"
        placeholder="dd-mm-yyyy"
        type="text"  />
    </div>
</template>
<script>
import moment from 'moment'

export default {
    props: {
        value: {
            type: String,
            default: moment().format('DD-MM-YYYY')
        }
    },
    mounted: function() {
        let self = this;
        this.$nextTick(function() {
            $(this.$el).datepicker({
                startView: 1,
                todayHighlight: true,
                todayBtn: "linked",
                autoclose: true,
                format: "dd-mm-yyyy"
            })
            .on('changeDate', function(e) {
                var date = e.format('dd-mm-yyyy');
                self.updateValue(date);
            });
        });
    },
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);
        },
    }
}
</script>
<style>
.isDisabled { color: currentColor; cursor: auto; opacity: 0.6; text-decoration: none !important; }
</style>