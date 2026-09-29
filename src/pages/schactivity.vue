<template>
  <v-card class="mx-auto">
    <v-spacer />

    <v-layout>
      <app-navbar />

      <v-main>
        <v-container>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <img
                    alt="Students"
                    class="logo"
                    height="100%"
                    src="@/assets/game.png"
                    width="100%"
                  >
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <h1> SPORT ACTIVITIES </h1>

                <p>
                  At Bluefield College, we believe that sports play a vital role in developing confident, disciplined, and healthy students. Through football, athletics, basketball, volleyball, and other sporting events, our students build teamwork, leadership, resilience, and sportsmanship while striving for excellence both on and off the field.
                </p>

              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <img
                    alt="Students"
                    class="logo"
                    height="100%"
                    src="@/assets/robotics.png"
                    width="100%"
                  >
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <h1> CLUB AND SOCIETIAL ACTIVITES </h1>

                <p>
                  At Bluefield College, learning extends beyond the classroom. Our clubs and social activities provide students with opportunities to explore their interests, develop leadership skills, build lasting friendships, and express their creativity. From debate and literary clubs to music, drama, cultural events, and community service, every student is encouraged to participate and grow.
                </p>

              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <img
                    alt="Students"
                    class="logo"
                    height="100%"
                    src="/students.png"
                    width="100%"
                  >
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <h1> CULTURAL AND SOCIAL ACTIVITIES </h1>

                <p>
                  Bluefield College celebrates diversity and encourages students to appreciate different cultures and traditions. Through cultural festivals, language days, talent shows, social gatherings, and community events, students build confidence, strengthen friendships, and develop respect for one another while creating unforgettable memories.
                </p>

              </v-col>
            </v-row>
          </v-card-text>

          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <img
                    alt="Students"
                    class="logo"
                    height="100%"
                    src="@/assets/alumni.png"
                    width="100%"
                  >
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <h1> LEADERSHIP AND SERVICE </h1>

                <p>
                  At Bluefield College, we empower students to become responsible leaders and compassionate citizens. Through the Students' Representative Council (SRC), prefectship, mentoring programs, and community service initiatives, students develop leadership skills, integrity, teamwork, and a strong commitment to serving others.
                </p>
              </v-col>
            </v-row>
          </v-card-text>

        </v-container>
      </v-main>

    </v-layout>
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
