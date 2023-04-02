<script setup>
import { defineNuxtConfig } from 'nuxt/config'

const value = ref(0)

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

const works = ref([
  {
    title: 'Small business management app',
    description:
      'App to manage appointments in a pet salon, I focused on delivering a great user experience with a straight forward design and hazzle free workflow.',
    stack: [
      {
        name: 'Vue 3',
        icon: 'i-vscode-icons:file-type-vue',
      },
      {
        name: 'Quasar',
        icon: 'i-vscode-icons:file-type-quasar',
      },
      {
        name: 'Firebase',
        icon: 'i-vscode-icons:file-type-firebase',
      },
    ],
    images: [
      '/dog-salon/appointments-menu.jpg',
      '/dog-salon/customer-page.jpg',
      '/dog-salon/customer-reg-form.jpg',
    ],
  },
])

console.log(works.value[0].images)
</script>

<template>
  <Head>
    <Title> Bruno De Rosa's Portfolio </Title>
  </Head>
  <Body>
    <div id="background">
      <!-- <div class="flex gap-3 absolute right-10 uppercase p-5">
        <router-link
          v-for="link in sections"
          class="no-underline hover:bg-green-200 hover:scale-105 hover:transition bg-purple-200 py-2 px-4 rounded text-slate-800 font-bold shadow"
          :to="link.href"
        >
          {{ link.text }}
        </router-link>
      </div> -->

      <section id="about" class="flex p-30 pb-10 justify-center">
        <div class="flex-col scale-150 flex justify-center items-center">
          <h1 class="text-xl scale-200">Hi! I'm Bruno</h1>
          <!-- <h3 class="text-base scale-150 ">Web Developer</h3> -->
          <p class="text-center word-wrap lg:w-3/5">
            I'm a web developer based in Argentina. I love building apps that
            solve people's problems.
          </p>
          <div class="justify-center flex gap-5">
            <a href="https://www.linkedin.com/in/bruno-de-rosa-943a83246/"
              ><div
                class="i-mdi:linkedin scale-200 bg-purple-200 hover:bg-green-200 hover:scale-210 hover:transition shadow"
              ></div
            ></a>
            <a href="https://github.com/brunoderosa1"
              ><div
                class="i-mdi:github scale-200 bg-purple-200 hover:bg-green-200 hover:scale-210 hover:transition shadow"
              ></div
            ></a>
          </div>
          <p class="font-bold">Checkout my latest work!</p>
        </div>
      </section>
      <section class="mt-10" id="work">
        <div
          v-for="(work, index) in works"
          :key="index"
          class="flex flex-col items-center"
        >
          <va-carousel
            class="lg:w-1/4 w-5/6"
            v-model="value"
            :items="work.images"
            :indicators="true"
            :swipable="true"
            :fit="'contain'"
            :ratio="1"
          />
          <div class="flex flex-col items-center p-5 w-100">
            <h1 class="text-center">{{ work.title }}</h1>
            <p class="w-100 text-center">{{ work.description }}</p>
            <div class="flex flex-row mt-5 gap-5">
              <div
                v-for="item in work.stack"
                :class="`${item.icon} scale-200`"
                :title="item.name"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="flex items-center gap-1 justify-center">
        <p class="text-center mt-15">You can contact me at</p>
        <p class="text-center mt-15">
          <a
            class="no-underline color-purple-200 hover:color-purple-600 hover:bg-green-200 hover:scale-110 hover:transition"
            :href="'mailto:brunoderosa180@email.com'"
            >brunoderosa180@gmail.com</a
          >.
        </p>
      </section>
    </div>
  </Body>
</template>

<style>
:root {
  --va-carousel-background: rgb(88, 86, 86);
}

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
  /* height: 100%; */
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
#fuzzy {
  z-index: -2;
}
</style>
