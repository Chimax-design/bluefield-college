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

    <v-container class="py-8">

      <!-- Page Title -->
      <v-card class="mb-8" elevation="5">
        <v-card-title class="text-h3 text-center py-6 text-primary">
          Staff & Departments
        </v-card-title>

        <v-card-text class="text-center text-body-1">
          Meet the dedicated professionals and support staff who work
          tirelessly to provide quality education and maintain a safe,
          welcoming environment for every Bluefield College student.
        </v-card-text>
      </v-card>

      <!-- Leadership -->
      <h2 class="text-h4 mb-4 text-primary">School Leadership</h2>

      <v-row>

        <v-col cols="12" md="4">
          <v-card elevation="3">
            <v-img
              cover
              height="100%"
              src="@/assets/prin.png"
            />

            <v-card-title>College Principal</v-card-title>
            <v-card-subtitle>Mrs. Deborah Williams</v-card-subtitle>

            <v-card-text>
              Oversees the overall management of the college and ensures
              academic excellence.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="3">
            <v-img
              cover
              height="100%"
              src="@/assets/principal.png"
            />

            <v-card-title>Primary School Principal</v-card-title>
            <v-card-subtitle>Mr. Johnson</v-card-subtitle>

            <v-card-text>
              Supervises the primary section and promotes quality teaching
              and learning for young pupils.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="3">
            <v-img
              cover
              height="100%"
              src="@/assets/vice.png"
            />

            <v-card-title>Vice Principal</v-card-title>
            <v-card-subtitle>Mr. Samuel Peters</v-card-subtitle>

            <v-card-text>
              Coordinates academic activities and supports the Principal
              in school administration.
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>

      <!-- Teaching Staff -->
      <h2 class="text-h4 mt-10 mb-4 text-primary">
        Teaching Staff
      </h2>

      <v-row>

        <v-col cols="12" md="3">
          <v-card elevation="2">
            <v-card-title>Mathematics Teacher</v-card-title>

            <v-card-text>
              Teaches Mathematics and prepares students for competitions.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card elevation="2">
            <v-card-title>English Teacher</v-card-title>

            <v-card-text>
              Develops students' reading, writing and communication skills.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card elevation="2">
            <v-card-title>Science Teacher</v-card-title>

            <v-card-text>
              Conducts science lessons and laboratory practicals.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card elevation="2">
            <v-card-title>ICT Teacher</v-card-title>

            <v-card-text>
              Teaches computer studies, coding and digital skills.
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>

      <!-- Administrative Staff -->
      <h2 class="text-h4 mt-10 mb-4 text-primary">
        Administrative Staff
      </h2>

      <v-row>

        <v-col cols="12" md="4">
          <v-card elevation="2">
            <v-card-title>Registrar</v-card-title>

            <v-card-text>
              Maintains student records and official documentation.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="2">
            <v-card-title>Bursar</v-card-title>

            <v-card-text>
              Handles financial records and school fee management.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card elevation="2">
            <v-card-title>Reception Officer</v-card-title>

            <v-card-text>
              Welcomes visitors and provides front desk assistance.
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>

      <!-- Support Staff -->
      <h2 class="text-h4 mt-10 mb-4 text-primary">
        Support Staff
      </h2>

      <v-row>

        <v-col cols="12" md="3">
          <v-card elevation="2">
            <v-card-title>School Nurse</v-card-title>

            <v-card-text>
              Provides first aid and healthcare support to students.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card elevation="2">
            <v-card-title>Guidance Counsellor</v-card-title>

            <v-card-text>
              Offers academic, career and personal counselling services.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card elevation="2">
            <v-card-title>Security Personnel</v-card-title>

            <v-card-text>
              Ensures the safety of students, staff and school property.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card elevation="2">
            <v-card-title>Cleaners & Janitors</v-card-title>

            <v-card-text>
              Maintain clean classrooms, offices and the school environment.
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>

      <!-- Other Staff -->
      <h2 class="text-h4 mt-10 mb-4 text-primary">
        Other Essential Staff
      </h2>

      <v-list lines="one">

        <v-list-item title="Librarian" />
        <v-list-item title="Laboratory Technologist" />
        <v-list-item title="School Driver" />
        <v-list-item title="Sports Coach" />
        <v-list-item title="Maintenance Officer" />
        <v-list-item title="Electrician" />
        <v-list-item title="Plumber" />
        <v-list-item title="Groundskeeper / Gardener" />
        <v-list-item title="Kitchen / Cafeteria Staff" />
        <v-list-item title="Tuck Shop Attendant" />

      </v-list>

    </v-container>

  </v-card>
</template>
