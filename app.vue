<script setup>

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

const works = [
  {
    title: 'Small business management app',
    description:
      'App to manage appointments in a pet salon, I focused on delivering a great user experience with a straight forward design and hassle-free workflow.',
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
]

useHead({
  title: 'Bruno De Rosa',
})

</script>

<template>
  <Body>
    <div
      id="background"
      class="min-h-100vh"
    >
      <!-- <div class="flex gap-3 absolute right-10 uppercase p-5">
        <router-link
          v-for="link in sections"
          class="no-underline hover:bg-green-200 hover:scale-105 hover:transition bg-purple-200 py-2 px-4 rounded text-slate-800 font-bold shadow"
          :to="link.href"
        >
          {{ link.text }}
        </router-link>
      </div> -->

      <section
        id="about"
        class="flex p-30 pb-10 justify-center"
      >
        <div class="flex-col scale-150 flex justify-center items-center">
          <h1 class="text-xl scale-200">Hey there!</h1>
          <!-- <h3 class="text-base scale-150 ">Web Developer</h3> -->
          <p class="md:text-left sm:text-center word-wrap lg:w-3/5">
            I'm Bruno, a web developer based in Argentina. I love building apps that
            solve people's problems. Checkout what I've been up to.
          </p>
          <div class="justify-center flex gap-5">
            <a href="https://www.linkedin.com/in/bruno-de-rosa-943a83246/">
              <div
                class="i-mdi:linkedin scale-200 bg-indigo-500 hover:bg-green-700 hover:scale-210 hover:transition shadow mix-blend-difference"
              ></div>
            </a>
            <a href="https://github.com/brunoderosa1">
              <div
                class="i-mdi:github scale-200 bg-indigo-500 hover:bg-green-700 hover:scale-210 hover:transition shadow">
              </div>
            </a>
          </div>
          <!-- <p class="font-bold">Checkout my latest work!</p> -->
        </div>
      </section>
      <section
        id="contact"
        class="flex items-center gap-1 justify-center"
      >
        <p class="text-center mt-15">You can contact me at</p>
        <p class="text-center mt-15">
          <a
            class="no-underline color-green-700 hover:color-purple-600 hover:bg-green-600 hover:scale-110 hover:transition font-semibold"
            :href="'mailto:brunoderosa180@email.com'"
          >brunoderosa180@gmail.com</a>.
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

link[rel="icon"] {
  display: none;
}

body {
  margin: 0px;
  background: linear-gradient(65deg, #eaf7d6, #fee3ff, #f5ffc6);
  background-size: 200% 200%;

  font-family: Inter !important;

  -webkit-animation: AnimationName 10s ease infinite;
  -moz-animation: AnimationName 10s ease infinite;
  -o-animation: AnimationName 10s ease infinite;
  animation: AnimationName 10s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 49%;
  }

  50% {
    background-position: 100% 52%;
  }

  100% {
    background-position: 0% 49%;
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 49%;
  }

  50% {
    background-position: 100% 52%;
  }

  100% {
    background-position: 0% 49%;
  }
}

@-o-keyframes AnimationName {
  0% {
    background-position: 0% 49%;
  }

  50% {
    background-position: 100% 52%;
  }

  100% {
    background-position: 0% 49%;
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 49%;
  }

  50% {
    background-position: 100% 52%;
  }

  100% {
    background-position: 0% 49%;
  }
}
</style>

<style scoped>
#fuzzy {
  z-index: -2;
}
</style>
