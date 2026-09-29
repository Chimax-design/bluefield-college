<template>
  <v-card class="mx auto">
    <v-spacer />

    <AppNavbar />

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

<script>
  import AppNavbar from '@/components/AppNavbar.vue'

  export default {
    components: {
      AppNavbar,
    },
  }
</script>
