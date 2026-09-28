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

    <v-main class="pa-0">
      <v-container>
        <v-card>
          <v-img
            alt="Bluefield College Logo"
            class="logo"
            height="100%"
            src="@/assets/why.png"
            width="100%"
          />
        </v-card>

        <h1>Why Bluefield College</h1>

        <p>At Bluefield College, we believe every child deserves an education that prepares them not only for academic success but also for a lifetime of achievement, leadership, and responsible citizenship.
          We provide a safe, inclusive, and nurturing learning environment where every student is valued, encouraged, and inspired to reach their full potential. Our highly qualified and dedicated teachers use modern teaching methods and technology to deliver engaging, student-centered lessons that promote critical thinking, creativity, collaboration, and innovation.
        </p>

        <p>
          Beyond the classroom, Bluefield College offers a wide range of extracurricular activities, including sports, robotics, music, arts, leadership programs, debates, language clubs, spelling bees, project exhibitions, and community service initiatives. These experiences help students develop confidence, communication skills, teamwork, and strong character.
          Our modern learning facilities, well-equipped laboratories, digital classrooms, library, and emphasis on technology prepare students for the demands of higher education and the rapidly changing global workforce
        </P>

        <P>At Bluefield College, discipline, integrity, respect, excellence, and compassion are at the heart of everything we do. We work closely with parents to ensure that every learner receives the guidance, support, and opportunities needed to succeed academically, socially, and emotionally.
          Choosing Bluefield College means choosing a school that is committed to excellence, innovation, and holistic education. Together, we empower students to become confident learners, ethical leaders, and responsible global citizens who are ready to make a positive impact on the world.
        </p>

      </v-container>
    </v-main>
  </v-card>

</template>
