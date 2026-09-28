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
