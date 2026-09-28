<template>
  <v-card class="mx-auto">
    <v-spacer />

    <v-layout>
      <v-app-bar color="info" density="compact" height="100">
        <template #prepend>
          <!-- <v-app-bar-nav-icon /> -->
          <img
            alt="Bluefield College Logo"
            class="logo"
            height="100"
            src="/bluefield-logo.png"
            width="100"
          >

        </template>

        <v-spacer />

        <div class="d-flex justify-center" w-100>
          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                Update
              </v-btn>
            </template>

            <v-list>
              <div class="d-flex flex-column">
                <v-btn class="mb-2" to="/schooloutings">School Outings</v-btn>
                <v-btn class="mb-2" to="/academicevents">Academic Event</v-btn>
                <v-btn class="mb-2" to="/schactivity">School Activities</v-btn>
              </div>
            </v-list>
          </v-menu>

          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                About Us
              </v-btn>
            </template>

            <v-list>
              <div class="d-flex flex-column">
                <v-btn class="mb-2" to="/whyus">Why Bluefiled College</v-btn>
                <v-btn class="mb-2" to="/strategy">Strategy 2030</v-btn>
                <v-btn class="mb-2" to="/philosophy">Philosophy</v-btn>
                <v-btn class="mb-2" to="/vandm">Our Vision and Mision</v-btn>
                <v-btn class="mb-2" to="/aboutus">About Bluefield College</v-btn>
              </div>
            </v-list>
          </v-menu>

          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                Admissions
              </v-btn>
            </template>

            <v-list>
              <div class="d-flex flex-column">
                <v-btn class="mb-2" to="/admission">Admission Requirements</v-btn>
                <v-btn class="mb-2" to="/tuition">Tuition & Fees</v-btn>
              </div>
            </v-list>
          </v-menu>

          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                Administration
              </v-btn>
            </template>

            <v-list>
              <div class="d-flex flex-column">
                <v-btn class="mb-2" to="/administraoff">Administrative Offices</v-btn>
                <v-btn class="mb-2" to="/staff">Department & Staff</v-btn>
                <v-btn class="mb-2" to="/calendar">Academic Calendar</v-btn>
                <v-btn class="mb-2" to="/Contact">Contact Us</v-btn>
              </div>
            </v-list>
          </v-menu>

          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                School Services
              </v-btn>
            </template>

            <v-list>
              <!-- Courses submenu -->
              <div class="d-flex flex-column">
                <v-btn class="mb-2" to="/upload">Make Payment</v-btn>
                <v-btn class="mb-2" to="/services">Services</v-btn>
              </div></v-list>
          </v-menu>
          <!-- <v-app-bar-title>Bluefield College</v-app-bar-title> -->
        </div>
      </v-app-bar>

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
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
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
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
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
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
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
              :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show = !show"
            />
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
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

<script setup>
  import { ref } from 'vue'

  const show = ref(false)
</script>
