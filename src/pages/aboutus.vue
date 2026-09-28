<template>
  <v-card class="mx auto">
    <v-spacer />

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
