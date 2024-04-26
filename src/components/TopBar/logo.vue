<template>
    <div class="logo-container">
        <router-link to="/">
            <div class="logo-image-container ct">
                <img id="logo-img" src="./img/fav4.png" />
            </div>
        </router-link>
    </div>
</template>
<style scoped>
#logo-img {
  /* widows: 50px; */
  /* height: 50px; */
  /* animation: rotate 5s linear infinite; */
}




@media (max-width: 600px) {
    .logo-container{
        display: none;
    }
}
</style>