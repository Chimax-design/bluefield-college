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

        <v-card class="mx-auto">
          <v-spacer />

          <v-card-text
            border
          >
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <img
                    alt="Students"
                    class="logo"
                    height="100%"
                    src="@/assets/view.png"
                    width="100%"
                  >
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <h2>About Us </h2>
                <h1>School Excursions </h1>

                <p>
                  Excursions at Bluefields College

                  At Bluefields College, we believe that learning extends beyond the classroom. Our educational excursions provide students with the opportunity to experience real-world environments, explore new ideas, and connect classroom knowledge with practical applications. These trips inspire curiosity, build confidence, and encourage teamwork while creating unforgettable learning experiences.

                  ### Some of Our Excursions

                  * Educational visit to a university campus to explore higher education opportunities.
                  * Science and Technology Museum tour to discover scientific innovations and inventions.
                  * Industrial visit to a manufacturing company to understand modern production processes.
                  * Historical site excursion to learn about our nation's culture and heritage.
                  * Nature and Wildlife Park visit to study biodiversity and environmental conservation.
                  * Community service outreach to promote leadership, responsibility, and social impact.

                  Every excursion is carefully planned to ensure a safe, engaging, and enriching experience that supports the academic and personal development of every Bluefields College student.
                </p>

              </v-col>
            </v-row>

            <v-main>
              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mb-2"
                  density="compact"
                  prepend-avatar=""
                  title="To the Zoo"
                  variant="text"
                >
                  <v-img alt="Bluefield College Campus" cover src="@/assets/zoo.png" />
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mb-2"
                  density="compact"
                  prepend-avatar=""
                  title="To the Museum"
                  variant="text"
                >
                  <v-img alt="Bluefield College Campus" cover src="@/assets/museum.png" />
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mb-2"
                  density="compact"
                  prepend-avatar=""
                  title="To a University"
                  variant="text"
                >
                  <v-img alt="Bluefield College Campus" cover src="@/assets/university.png" />
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mb-2"
                  density="compact"
                  prepend-avatar=""
                  title="Wildlife Park Visit"
                  variant="text"
                >
                  <v-img alt="Bluefield College Campus" cover src="@/assets/park.png" />
                </v-card>
              </v-col>

            </v-main>
          </v-card-text>
        </v-card>

      </v-main>
    </v-layout>
  </v-card>
</template>
