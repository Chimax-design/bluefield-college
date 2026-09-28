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

      <h1 class="text-center text-blue-darken-3 mb-6">
        School Services & Charges
      </h1>

      <v-card elevation="6">

        <v-table>

          <thead class="bg-blue-darken-2">
            <tr>
              <th class="text-white">Service</th>
              <th class="text-white">Description</th>
              <th class="text-white">Price (₦)</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item, index) in services"
              :key="index"
            >
              <td>{{ item.service }}</td>
              <td>{{ item.description }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Lunch</td>
              <td>Daily Lunch for one term</td>
              <td>₦120,000</td>
            </tr>

            <tr>
              <td>After-School Care</td>
              <td>Child care fee for a week</td>
              <td>₦50,000</td>
            </tr>

            <tr>
              <td>Tuck Shop</td>
              <td>Shopping fee, reduces on purchase on item</td>
              <td>Whatever you pay in(₦)</td>
            </tr>

            <tr>
              <td>Transportation</td>
              <td>School Bus Transportaion fee for a term </td>
              <td>₦300,000</td>
            </tr>

            <tr>
              <td>Health Services</td>
              <td>Immediate assistance (if there is an accident) </td>
              <td>₦500,000</td>
            </tr>
          </tbody>

        </v-table>

      </v-card>
    </v-container>

  </v-card>
</template>
