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
      <v-container color="blue">

        <v-row>
          <v-col cols="12" md="6">
            <v-card>

              <v-img
                alt="Bluefield College Logo"
                class="logo"
                height="100%"
                src="@/assets/entrance.png"
                width="100%"
              />
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <h1> ~ VISION</h1>
            <h3>1. Academic Excellence Focus</h3>
            <p>To a leading centre of academic excellence that nutures globally competitive, innovative, and responsible leaders.</p>
            <h3>2. Character + Faith-Based</h3>
            <p> To raise a generation of disciplined, God-fearing, and purpose-driven individuals who will transform the society </p>
          </v-col>
        </v-row>

        <h3>3. Future/Tech Focus</h3>
        <p>To inspire lifelong learners who are creative, technologically adept, and equipped to solve tommorrow's challenges.</p>
        <h3>4. Holistic Development</h3>
        <p>To develop well-rounded individuals who excel academically, socially, and morally in acaring community.</p>

        <h1>~ OUR MISSION</h1>
        <h3>1. Standard Nigerian Private School</h3>
        <p> Toprovide a safe, disciplined, and stimulatig learning environment wher every child is equipped with sound knowledge, strong character, and practical skills for success.</p>
        <h3>2. Holistic/British Cirriculum Style</h3>
        <p>To deliver a broad, balanced, and enriched cirriculum that fosters intellectual curiosity, creativity, and respect for others, enabling each student to achieve their full potentials.</p>
        <h3>3. Short and Punchy</h3>
        <p>To nuture minds, build character, and empower futures through quality education and values.</p>
        <h3>4. Community/Service Focused</h3>
        <p>To educate students with excellence and integrity, preparing them to serve their communities and lead with compassion.</p>
      </v-container>
    </v-main>
  </v-card>
</template>
