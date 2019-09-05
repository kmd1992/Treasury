<template>
    <!-- Error Page Area -->
    <div class="error-page-area">
        <!-- Error Content -->
        <div class="error-content text-center">
            <!-- Error Thumb -->
            <div class="erro-thumb">
                <img src="img/bg-img/bg.png" alt="">
            </div>
            <h2>Opps! This page Could Not Be Found!</h2>
            <p>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
            <router-link :to="{name: 'home'}" class="admetro-btn">Back To Homepage</router-link>
        </div>
    </div>
</template>