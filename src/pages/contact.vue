<template>
  <v-card class="mx auto" rounded>
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
        <v-card

          <v-card
          class="mb-6 pa-6"
          color="primary"
          elevation="3"
        >

          <h1>Contact Information</h1>

          <v-card class="mb-6 pa-6" elevation="3">
            <h4>Bluefield College</h4>
            <h4>123 Education Avenue,</h4>
            <h4>Abuja, Nigeria.</h4>

            <h1>Phone Number</h1>
            <h4>+234 123 456 7890</h4>
            <h4>+234 987 654 3210</h4>

            <h1>Email Address</h1>
            <h4>info@bluefieldcollege.edu.ng</h4>

            <h1>Office Hours</h1>
            <h4>Monday - Friday: 9:00 AM - 5:00 PM</h4>
            <h4>Saturday: 10:00 AM - 2:00 PM</h4>
            <h4>Sunday: Closed</h4>

            <h1>Social Media</h1>
            <h4>Follow us on social media for the latest updates and news:</h4>
            <h4>Facebook: facebook.com/bluefieldcollege</h4>
            <h4>Twitter: twitter.com/bluefieldcollege</h4>
            <h4>Instagram: instagram.com/bluefieldcollege</h4>
            <h4>LinkedIn: linkedin.com/company/bluefieldcollege</h4>
          </v-card>
        </v-card>

      </v-container>
    </v-main>

  </v-card>
</template>
