<template>

    <!-- <div class=""> -->
        <router-link to="/">
            <div class="logo-container">
                <img id="logo-img" src="./img/logo.png" />
            </div>
        </router-link>
    <!-- </div> -->


</template>

<style scoped>
.logo-container {
    width: 100px;
    display: flex;
}

.logo-container img {
    max-width: 100%;
    height: auto;
}

#logo-img {}

@media (max-width: 600px) {
    .logo-container {
        width: 60px;
        margin: 3px;
    }

}
</style>