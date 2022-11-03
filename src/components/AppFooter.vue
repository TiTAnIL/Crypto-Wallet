
<template>
    <nav class="wrapper">
        <div class="userControls">
            <div>Sign In</div>
            <div>Log Out</div>
            <div>My Profile</div>
        </div>
        <div class="navigators">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/Users">Users</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </div>
    </nav>
    <h3 class="coffee-rigths">CoffeeRights ©</h3>
</template>

<script>
export default {

}
</script>
<style scoped>
.wrapper {
    display: flex;
    justify-content: space-around;

}
.navigators {
    display: flex;
    flex-direction: column;
}
.coffee-rigths{
    text-align: center;
}
</style>