<template>
  <v-card class="mx auto">
    <v-spacer />

   <AppNavbar />

    <v-container class="py-8">

      <!-- Page Title -->
      <v-card class="mb-6" elevation="5">
        <v-img
          cover
          height="100%"
          src="@/assets/admin.png"
        />

        <div class="d-flex align-center justify-center fill-height">
          <h1 class="text-blue text-h2 font-weight-bold">
            Administrative Office
          </h1>
        </div>

      </v-card>

      <!-- Welcome -->
      <v-card class="mb-6 pa-6" elevation="3">
        <v-card-title class="text-h4 text-primary">
          Welcome to the Administrative Office
        </v-card-title>

        <v-card-text class="text-body-1">
          The Administrative Office serves as the central hub for all
          administrative activities at Bluefield College. We provide
          professional support to students, parents, staff, and visitors
          while ensuring the smooth operation of the school.
        </v-card-text>
      </v-card>

      <!-- Responsibilities -->
      <v-card class="mb-6 pa-6" color="primary" elevation="3">
        <v-card-title class="text-h5">
          Our Responsibilities
        </v-card-title>

        <v-list>
          <v-list-item title=" ~ Student Admissions and Registration" />
          <v-list-item title=" ~ Student Records Management" />
          <v-list-item title=" ~ School Fee Inquiries" />
          <v-list-item title=" ~ Issuing Admission Letters" />
          <v-list-item title=" ~ Academic Documentation" />
          <v-list-item title=" ~ General Administrative Support" />
          <v-list-item title=" ~ Parent and Visitor Assistance" />
          <v-list-item title=" ~ Official School Correspondence" />
        </v-list>
      </v-card>

      <!-- Services -->
      <v-row>

        <v-col cols="12" md="6">
          <v-card color="primary" elevation="3" height="100%">
            <v-card-title class="text-h5">
              Student Services
            </v-card-title>

            <v-card-text>
              <ul>
                <li>Student Registration</li>
                <li>Identity Card Processing</li>
                <li>Academic Records</li>
                <li>Examination Information</li>
                <li>Clearance Forms</li>
                <li>General Student Support</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card color="primary" elevation="3" height="100%">
            <v-card-title class="text-h5">
              Parent Services
            </v-card-title>

            <v-card-text>
              <ul>
                <li>Admission Enquiries</li>
                <li>Fee Information</li>
                <li>Appointment Scheduling</li>
                <li>Student Progress Enquiries</li>
                <li>School Policies</li>
                <li>Payment Verification</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>

      <!-- Office Hours -->
      <v-card class="mt-6 pa-6" elevation="3">
        <v-card-title class="text-h5">
          Office Hours
        </v-card-title>

        <v-table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Monday - Friday</td>
              <td>8:00 AM - 4:30 PM</td>
            </tr>

            <tr>
              <td>Saturday</td>
              <td>9:00 AM - 1:00 PM</td>
            </tr>

            <tr>
              <td>Sunday</td>
              <td>Closed</td>
            </tr>
          </tbody>
        </v-table>
      </v-card>

      <!-- Contact -->
      <v-card class="mt-6 pa-6" color="primary" elevation="3">
        <v-card-title class="text-h5">
          Contact Us
        </v-card-title>

        <v-card-text>
          📍 Bluefield College Administrative Building <br><br>

          ☎ Phone: +234 123 456 7890 <br><br>

          📧 Email: admin@bluefieldcollege.edu.ng <br><br>

          🕒 Office Hours: Monday - Friday (8:00 AM - 4:30 PM)
        </v-card-text>
      </v-card>

      <!-- Buttons -->
      <div class="text-center mt-8">

        <v-btn
          class="ma-2"
          color="primary"
          rounded
          to="/Contact"
        >
          Contact Office
        </v-btn>

      </div>

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
