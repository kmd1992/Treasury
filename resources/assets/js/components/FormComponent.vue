<template>
    <div class="col-md-4">
        <form>
            <div class="form-group">
                <textarea 
                    class="form-control" 
                    rows="8" cols="8" 
                    maxlength="130" 
                    required>
                </textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">
                    Tweet
                </button>
            </div>
        </form>        
    </div>
</template>
<script>
export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>