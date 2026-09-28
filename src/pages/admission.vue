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

    <v-container>

      <v-main class="pa-0">
        <v-card>
          <img
            alt="Bluefield College Logo"
            class="logo"
            height="100%"
            src="@/assets/form.png"
            width="100%"
          >
        </v-card>

        <h1>Admission Requirements</h1>
        <p>At Bluefield College, we are committed to admitting students who are eager to learn, grow, and contribute positively to our school community. Our admission process is simple, transparent, and designed to ensure every applicant has the opportunity to succeed.</p>

        <h2>Requirements</h2>
        <p>~ A completed Bluefield College Application Form.</p>
        <p>~ A copy of the applicant's Birth Certificate or National Identification document.</p>
        <p>~ Recent passport-sized photographs.</p>
        <p>~ Academic records or report cards from the previous school.</p>
        <p>~ A Transfer Certificate or Testimonial (for transfer students).</p>
        <p>~ Successful performance in the Bluefield College Entrance Assessment (where applicable).</p>
        <p>~ Participation in an admission interview with the student and parent or guardian.</p>
        <p>~ Evidence of payment of the prescribed application and admission fees.</p>
        <p>~ A completed medical history or health record (if required).</p>

        <h2>Admission Process</h2>
        <p>1. Obtain and complete the admission application form.</p>
        <p>2. Submit all required supporting documents.</p>
        <p>3. Sit for the entrance assessment (where applicable).</p>
        <p>4. Attend the admission interview.</p>
        <p>5. Receive an admission decision.</p>
        <p>6. Pay the acceptance and tuition fees.</p>
        <p>7. Complete registration and begin your academic journey at Bluefield College.</p>

        <h2>Who Can Apply?</h2>

        <p>Bluefield College welcomes applications from students of all backgrounds who demonstrate a commitment to learning, discipline, and personal growth. We seek students who are ready to embrace academic excellence, leadership, creativity, and innovation in a supportive and inclusive environment.
          We look forward to welcoming you into the Bluefield College family, where your future begins with excellence.</p>

        <v-btn class="mb-2" color="primary" to="/signin">Apply Now</v-btn>
      </v-main>
    </v-container>
  </v-card>
</template>
