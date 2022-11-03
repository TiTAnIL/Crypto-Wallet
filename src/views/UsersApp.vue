<template>
    <h1>user app</h1>
    <button @click="onListUsers">list</button>
</template>

<script>
import { userService } from '../../services/userService.js'

export default {
    data() {
        return {
            users: [],
        }
    },
    async created() {
        this.users = await userService.query()
    },
    methods:{
        onListUsers() {
            console.log(this.users)
        }
    }
}

</script>

<style>

</style>