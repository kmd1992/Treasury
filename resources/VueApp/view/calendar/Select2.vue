<template>
    <select class="form-control">
        <slot></slot>
    </select>
</template>
<script type="text/babel">
    import $ from 'jquery';
    import select2 from 'select2'
    import 'select2/dist/css/select2.min.css';
    export default {
        props: ['options', 'value'],
        mounted: function () {
            var vm = this
            $(this.$el).select2({
                            placeholder: "Select Client",
                            allowClear: true,
                            data: this.options,
                            width: '100%'
                        })
                    .val(this.value)
                    .trigger('change')
                    .on('change', function () {
                        vm.$emit('input', this.value)
                    })
        },
        watch: {
            value: function (value) {
                // update value
                $(this.$el).val(value).trigger('change');
            },
            options: function (options) {
                // update options
                $(this.$el).select2({ data: options })
            }
        },
        destroyed: function () {
            $(this.$el).off().select2('destroy')
        }
    }
</script>
<style>
.select2-container--default .select2-selection--single{border-radius:0px;height: 34px;padding: 2px 4px;font-size: 14px;}
.select2-container--default .select2-selection--single .select2-selection__arrow{height: 32px;}
</style>