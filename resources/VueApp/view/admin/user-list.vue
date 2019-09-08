<template>
<div>
    <table class="table table-hover table-nomargin table-bordered" v-if="usersGetters.length > 0">
        <thead>
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Date d'inscription</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in usersGetters" v-bind:key="user.id">
                <th>{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.created_at}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
export default {
   name: "user-list",
   props: ['usersGetters']
}
</script>