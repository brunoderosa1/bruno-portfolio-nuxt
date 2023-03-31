<script setup>
import { defineNuxtConfig } from 'nuxt/config'

const sections = [
  {
    text: 'About',
    href: '#about',
  },
  {
    text: 'Work',
    href: '#work',
  },
  {
    text: 'Contact',
    href: '#contact',
  },
]

const socialMedia = [
  {
    icon: '',
    url: '',
  },
  {
    icon: '',
    url: '',
  },
]

const works = [
  {
    title: 'Small business management app',
    description:
      'App to manage appointments in a pet salon, I focused on delivering a great user experience with a straight forward design and hazzle free workflow.',
    stack: [
      {
        name: 'Vue 3',
        icon: '',
      },
      {
        name: 'pinia',
        icon: '',
      },
      {
        name: 'Quasar',
        icon: '',
      },
      {
        name: 'Firebase',
        icon: '',
      },
    ],
    images: []
  },
]
</script>

<template>
  <div id="background">
    <div class="absolute mt-15 left-10">
      <a href="">
        <div class="i-vscode-icons:file-type-vue scale-200" ></div>
      </a>
      <a href="https://github.com/brunoderosa1"
        ><div class="i-vscode-icons:firebase">pepino</div></a
      >
      <a href="https://www.linkedin.com/in/bruno-de-rosa-943a83246/"></a>
      <div class="i-ph-anchor-simple-thin" />
    </div>
    <div class="flex gap-3 absolute right-10 uppercase p-5">
      <router-link
        v-for="link in sections"
        class="no-underline hover:bg-green-200 hover:transition bg-purple-200 py-2 px-4 rounded text-slate-800 font-bold shadow"
        :to="link.href"
      >
        {{ link.text }}
      </router-link>
    </div>

    <section id="about" class="flex p-10 justify-center">
      <div class="flex-col scale-150 mt-50 flex justify-center items-center">
        <h1 class="text-xl scale-200 ">Hi! I'm Bruno</h1>
        <!-- <h3 class="text-base scale-150 ">Web Developer</h3> -->
        <p class="text-center word-wrap px-10">
          I'm a web developer based in Argentina. I love building apps that
          solve people's problems.
        </p>
        <p>Checkout my latest work!</p>
      </div>
    </section>
    <section id="work">
      <!-- <div>

        <image-carousel :items="works" />
      </div> -->
    </section>
  </div>
</template>

<style>
* {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body {
  /* background: linear-gradient(66deg, #ce691c, #e52f1f 50%, #eb9c2e 100%); */
  background: linear-gradient(66deg, #5e7ba9, #575ab6 50%, #1c35b1 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
#fuzzy {
  z-index: -2;
}
</style>
