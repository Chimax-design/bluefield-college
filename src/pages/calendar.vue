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

      <v-card class="mx-auto" color="primary">
        <v-spacer />

        <v-card-text
          border
        >

          <v-container class="pa-6" fluid>

            <!-- Page Header -->
            <v-card
              class="pa-6 mb-8 text-center"
              color="blue"
              rounded="xl"
            >
              <h1 class="text-h3 font-weight-bold white--text">
                Bluefield College Academic Calendar
              </h1>

              <p class="text-h6 mt-3">
                Stay informed about important academic activities,
                examinations, holidays and school events throughout the year.
              </p>
            </v-card>

            <!-- Academic Calendar -->
            <v-card class="mb-8" elevation="6" rounded="xl">

              <v-card-title class="text-h5 font-weight-bold">
                Academic Calendar
              </v-card-title>

              <v-table>
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Resumption of First Term</td>
                    <td>September 8</td>
                  </tr>

                  <tr>
                    <td>Orientation for New Students</td>
                    <td>September 9</td>
                  </tr>

                  <tr>
                    <td>Club Registration Begins</td>
                    <td>September 15</td>
                  </tr>

                  <tr>
                    <td>Continuous Assessment Test 1</td>
                    <td>October 6-10</td>
                  </tr>

                  <tr>
                    <td>Mid-Term Break</td>
                    <td>October 24-27</td>
                  </tr>

                  <tr>
                    <td>Continuous Assessment Test 2</td>
                    <td>November 10-14</td>
                  </tr>

                  <tr>
                    <td>Inter-House Debate</td>
                    <td>November 20</td>
                  </tr>

                  <tr>
                    <td>First Term Examination</td>
                    <td>December 1-10</td>
                  </tr>

                  <tr>
                    <td>End of First Term</td>
                    <td>December 12</td>
                  </tr>

                  <tr>
                    <td>Christmas Break</td>
                    <td>December 13- January 4</td>
                  </tr>

                  <tr>
                    <td>Resumption of Second Term</td>
                    <td>January 5</td>
                  </tr>

                  <tr>
                    <td>Welcome Assembly</td>
                    <td>January 6</td>
                  </tr>

                  <tr>
                    <td>Continuous Assessment Test 1</td>
                    <td>February 9-13</td>
                  </tr>

                  <tr>
                    <td>Science Fair</td>
                    <td>February 20</td>
                  </tr>

                  <tr>
                    <td>Cultural Day</td>
                    <td>March 6</td>
                  </tr>

                  <tr>
                    <td>Inter-House Sports</td>
                    <td>March 20</td>
                  </tr>

                  <tr>
                    <td>Second Term Examination</td>
                    <td>April 6-15</td>
                  </tr>

                  <tr>
                    <td>End of Second Term</td>
                    <td>April 17</td>
                  </tr>

                  <tr>
                    <td>Resumption of Third Term</td>
                    <td>May 4</td>
                  </tr>

                  <tr>
                    <td>Career Day</td>
                    <td>May 15</td>
                  </tr>

                  <tr>
                    <td>Spelling Bee Competition</td>
                    <td>June 5</td>
                  </tr>

                  <tr>
                    <td>Robotics Competition</td>
                    <td>June 18</td>
                  </tr>

                  <tr>
                    <td>Project Exhibition</td>
                    <td>July 10</td>
                  </tr>

                  <tr>
                    <td>Final Examination</td>
                    <td>July 13-24</td>
                  </tr>

                  <tr>
                    <td>Graduation Ceremony</td>
                    <td>August 7</td>
                  </tr>

                  <tr>
                    <td>Summer Holiday Begins</td>
                    <td>August 8</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>

          </v-container>
        </v-card-text>
      </v-card>

    </v-layout>
  </v-card>
</template>
