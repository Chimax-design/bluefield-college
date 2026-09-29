<template>
  <v-card class="mx-auto">
    <v-spacer />

    <v-layout>

      <AppNavbar />

      <v-main>
        <v-card
          border
        >
          <v-img
            cover
            height="100%"
            src="@/assets/robotics.png"
            width="100%"
          />

          <v-card-title>
            Robotics Competition
          </v-card-title>

          <v-card-subtitle>
            Science and technology
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer />

            <v-btn
              :icon="showRobotics ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="showRobotics = !showRobotics"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showRobotics">
              <v-divider />

              <v-card-text>
                Introducing robotics into Bluefield College transforms students from passive learners into active creators,
                bridging theoretical science and applied technology.
                It builds a crucial foundation in STEM (Science, Technology, Engineering, and Mathematics),
                equipping the next generation with the technical skills needed for an automated,
                AI-driven global workforce.
                Integrating robotics into the curriculum offers multiple tangible advantages:
                Hands-on Learning: It grounds abstract physics and math concepts (like friction, acceleration, and velocity) in real-world movement.Logical & Computational.
                Thinking: Students learn the step-by-step process of coding, teaching them to break down complex problems into manageable tasks.
                Collaboration & Soft Skills: Building and programming robots require teamwork, fostering communication and project management
                skills.Resilience: The trial-and-error nature of debugging code teaches patience.
              </v-card-text>
            </div>
          </v-expand-transition>

          <v-img
            cover
            height="100%"
            src="@/assets/spelling.png"
            width="100%"
          />

          <v-card-title>
            Spelling Bees
          </v-card-title>

          <v-card-subtitle>
            Literacy and Communication
          </v-card-subtitle>

          <v-card-actions>

            <v-spacer />

            <v-btn
              :icon="showSpelling ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="showSpelling = !showSpelling"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showSpelling">
              <v-divider />

              <v-card-text>
                At Bluefields College, our Spelling Bee programme is designed to develop confident communicators, excellent readers, and lifelong learners. Through regular spelling competitions and language activities, students expand their vocabulary, improve their pronunciation, strengthen their grammar, and build the confidence to speak and compete on larger academic platforms. The programme also promotes healthy competition, critical thinking, and a love for the English language.
              </v-card-text>
            </div>
          </v-expand-transition>

          <v-img
            cover
            height="100%"
            src="@/assets/language.png"
            width="100%"
          />

          <v-card-title>
            Language Days
          </v-card-title>

          <v-card-subtitle>
            Social Science and Art
          </v-card-subtitle>

          <v-card-actions>

            <v-spacer />

            <v-btn
              :icon="showLanguage ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="showLanguage = !showLanguage"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showLanguage">
              <v-divider />

              <v-card-text>
                At Bluefields College, we celebrate the richness of languages and cultures through our exciting Language Days. These special events encourage students to appreciate linguistic diversity, build confidence in communication, and develop a deeper understanding of different cultures from around the world.
                During Language Days, students participate in a variety of engaging activities, including cultural exhibitions, drama presentations, poetry recitals, debates, storytelling, language quizzes, traditional dances, and speech competitions. Students also have the opportunity to dress in cultural attire and showcase the customs, food, music, and traditions of different countries.
              </v-card-text>
            </div>
          </v-expand-transition>

          <v-img
            cover
            height="100%"
            src="@/assets/exhibition.png"
            width="100%"
          />

          <v-card-title>
            Project Exhibitions
          </v-card-title>

          <v-card-subtitle>
            General or world wide activites
          </v-card-subtitle>

          <v-card-actions>

            <v-spacer />

            <v-btn
              :icon="showExhibition ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="showExhibition = !showExhibition"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="showExhibition">
              <v-divider />

              <v-card-text>
                ## Project Exhibition Day at Bluefields College

                At Bluefields College, our **Project Exhibition Day** is a celebration of creativity, innovation, and academic excellence. This special event provides students with the opportunity to showcase projects they have developed across various subjects, demonstrating their knowledge, research skills, and ability to solve real-world problems.
                Students present a wide range of projects in Science, Technology, Engineering, Mathematics (STEM), Arts, Social Sciences, and Entrepreneurship. Parents, teachers, invited guests, and fellow students are encouraged to explore the exhibitions, interact with the presenters, and learn about the ideas behind each project.
                Project Exhibition Day fosters critical thinking, creativity, teamwork, confidence, and effective communication. It inspires students to think beyond the classroom, apply their learning in practical ways, and develop the skills needed to become future innovators and leaders.
                At Bluefields College, we are committed to nurturing curious minds and providing every student with opportunities to explore, create, and excel.
              </v-card-text>
            </div>
          </v-expand-transition>

        </v-card>
      </v-main></v-layout>
  </v-card>
</template>

<script>
  import AppNavbar from '@/components/AppNavbar.vue'

  export default {
    components: {
      AppNavbar,
    },

    data () {
      return {
        showRobotics: false,
        showSpelling: false,
        showLanguage: false,
        showExhibition: false,
      }
    },
  }
</script>
