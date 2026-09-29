<template>
  <v-card class="mx auto">
    <v-spacer />

    <AppNavbar />

    <v-main class="pa-0">
      <v-container>

        <v-row>
          <v-col cols="12" md="6">

            <v-card>
              <v-img
                alt="Bluefield College Logo"
                class="logo"
                height="100%"
                src="@/assets/library.png"
                width="100%"
              />
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <h1>OUR PHILOSOPHY</h1>

            <p>

              At Bluefield College, we believe that every student possesses unique talents and limitless potential. Our philosophy is centered on providing a safe, inclusive, and stimulating learning environment where students are inspired to pursue academic excellence, develop strong moral character, and become responsible global citizens.
              We are committed to nurturing the intellectual, social, emotional, and physical growth of every learner through innovative teaching methods, modern technology, and practical learning experiences. We encourage curiosity, creativity, critical thinking, and lifelong learning while promoting values such as integrity, respect, discipline, compassion, and excellence.
            </p>
          </v-col>

          <p>Bluefield College recognizes that education is a partnership between the school, parents, and the wider community. Together, we strive to equip students with the knowledge, skills, confidence, and leadership qualities needed to thrive in an ever-changing world and make meaningful contributions to society.
            Our philosophy is founded on the belief that education extends beyond the classroom. By fostering teamwork, cultural appreciation, innovation, and community service, we prepare students not only for academic success but also for purposeful and fulfilling lives.
          </p>

        </v-row></v-container>
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
