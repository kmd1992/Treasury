<template id="bs-modal">
    <!-- MODAL -->
    <div class="modal fade" id="myModal" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">ADD EMI</h4>
                </div>
                <div class="modal-body">
                    <form action="#" method="POST" class="form-vertical">
                        <div class="form-group">
                            <label for="date" class="control-label">Choose Date</label>
                            <input type="text" name="textfield" id="date" placeholder="Text input" class="form-control datepick">
                        </div>
                        <div class="form-group">
                            <label for="client" class="control-label">Select client</label>
                            <select2Client></select2Client>
                        </div>
                        <div class="form-group">
                            <label for="price" class="control-label">Enter EMI amount</label>
                            <div class="input-group">
                                <span class="input-group-addon">Rs.</span>
                                <input type="text" placeholder="Price" class="form-control">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
//import 'bootstrap-datepicker';
import select2Client from './Select2';
export default {
    name: 'modal',
    template: '#bs-modal',
    components : {
        select2Client
    },
    data () {
        return {
        }
    },
    mounted() {
        console.log("Load Modal popup");
        $('.datepick').datepicker({
            format: 'dd/mm/yyyy',
            clearBtn: true,
            autoclose: true,
        }).datepicker('setDate', 'today');
    },
};
</script>

