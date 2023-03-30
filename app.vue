<script setup>
  import { defineNuxtConfig } from 'nuxt/config'
</script>

<template>
  
    <div class="flex gap-3 absolute right-10 uppercase p-5" >
      <router-link class="no-underline text-slate-800" :to="'#about'" >About</router-link>
      <router-link class="no-underline text-slate-800" :to="'#work'" >Work</router-link>
      <router-link class="no-underline text-slate-800" :to="'#contact'" >Contact</router-link>
    </div>
  
  <section id="about" class="flex p-10 justify-center" >
    <nav class="flex-col flex justify-center items-center">
      <h1 class="pt-6">Hi! I'm Bruno</h1>
      <h2>Web Developer</h2>
      <p>I'm a web developer based in Argentina. I love building apps that solve people's problems.</p>
      <p>Checkout my latest work!</p>
    </nav>
  </section>
  <section id="work">
    <div>
     <img src="" alt="">
    </div>
  </section>
</template>

<style scoped>

* {
  font-family: Inter;
  font-size: 2rem;
  background-color: salmon;
}

</style>