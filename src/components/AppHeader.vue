
<template>
    <nav class="wrapper">
        <RouterLink to="/" class="logo"><img src="../assets/logo.svg" /></RouterLink>
        <div class="navigators">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <div>Sign In</div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>
<style>
.wrapper {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}
.navigators {
    display: flex;
    gap: 1rem;
}
</style>