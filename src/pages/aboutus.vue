<template>
  <v-card class="mx auto">
    <v-spacer />

    <AppNavbar />

    <v-main class="bg-cyan-lighten-5 fill-height">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">

            <img
              alt="Bluefield College Logo"
              class="logo"
              height="400"
              src="/bluefield-logo.png"
              width="400"
            >

          </v-col>

          <v-col cols="12" md="6">

            <h1> About Bluefiled</h1>

            <p>
              BLUEFIELD was founded in the year 2012, it is located in the Fedral Capital Teritory (Abuja), Nigeria. It is a Private Educational Establishment consisting of the nursery and primary sections. It is a single-sexed day school.
            </p>

            <p>It was founded on christian values which has helped in the spirotual growth of the students.
              Bluefield follows a very structured curriculum which was carefully chosen by professional Academics to help and ensure students recieve standard lessons.
            </p>
          </v-col>
        </v-row>

        <h1>Our Values</h1>

        <p> Our values make us stand out and make a difference with proof of academic excellence and morally brought up students who are well groomed and diciplined.
          We engage our students in activities which other education institute has labelled unnecesary, because they dont see the great impact and values those activities would add to their students. Activities like Robotics(STEM), sports Academy and many more, also excursions to historical places and area which education the students more on their environment.
        </p>

        <p>Another thing which sets us aprt is our approah to teaching we use the montessori approach with tech enabled classrooms and well equiped laboratories. We ensure we keep our learning environment clean and in check to avoid causeing harm to our beloved students.
        </p>
      </v-container>
    </v-main>
  </v-card>
</template>

<script>
  import AppNavbar from '@/components/AppNavbar.vue'

  export default {
    components: {
      AppNavbar,
    },
  }
</script>
