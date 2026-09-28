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
          <img
            alt="Bluefield College Logo"
            class="logo"
            height="100%"
            src="@/assets/lab.png"
            width="100%"
          >
        </v-card>

        <h1 class="text-center mb-6">Tuition & Fees</h1>

        <v-card class="mb-6">
          <v-card-title>
            Tuition Fees by Class
          </v-card-title>

          <v-table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Fee</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Babies </td>
                <td>₦300,000</td>
              </tr>

              <tr>
                <td>Nursery 1</td>
                <td>₦500,000</td>
              </tr>

              <tr>
                <td>Nursery 2</td>
                <td>₦550,000</td>
              </tr>

              <tr>
                <td>Primary 1</td>
                <td>₦700,000</td>
              </tr>

              <tr>
                <td>Primary 2</td>
                <td>₦750,000</td>
              </tr>

              <tr>
                <td>Primary 3</td>
                <td>₦800,000</td>
              </tr>

              <tr>
                <td>Primary 4</td>
                <td>₦850,000</td>
              </tr>

              <tr>
                <td>Primary 5</td>
                <td>₦1,000,000 </td>
              </tr>

              <tr>
                <td>Primary 6 (optional) </td>
                <td>₦1,000,000</td>
              </tr>

              <tr>
                <td>JSS 1</td>
                <td>₦1,500,000</td>
              </tr>

              <tr>
                <td>JSS 2</td>
                <td>₦2,000,000</td>
              </tr>

              <tr>
                <td>JSS 3</td>
                <td>₦3,000,000</td>
              </tr>

              <tr>
                <td>SSS 1</td>
                <td>₦5,000,000</td>
              </tr>

              <tr>
                <td>SSS 2</td>
                <td>₦6,000,000</td>
              </tr>

              <tr>
                <td>SSS 3</td>
                <td>₦10,000,000</td>
              </tr>

            </tbody>
          </v-table>
        </v-card>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="mb-6">
              <v-table>
                <thead>
                  <v-card-title>
                    New Student Fees
                  </v-card-title>
                </thead>

                <tbody>
                  <tr>
                    <td>Fee</td>
                    <td>Amount (₦)</td>
                  </tr>

                  <tr>
                    <td>Admission Form</td>
                    <td>₦50,000</td>
                  </tr>

                  <tr>
                    <td>Registration fee</td>
                    <td>₦30,000</td>
                  </tr>

                  <tr>
                    <td>Acceptance Fee</td>
                    <td>₦100,000</td>
                  </tr>

                  <tr>
                    <td>Student ID Card</td>
                    <td>₦5,000</td>
                  </tr>

                  <tr>
                    <td>Uniform</td>
                    <td>₦100,000</td>
                  </tr>

                  <tr>
                    <td>Orientation</td>
                    <td>₦70,000</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="mb-6">
              <v-table>
                <thead>
                  <v-card-title>
                    Returning Student Fees
                  </v-card-title>
                </thead>

                <tbody>
                  <tr>
                    <td>Re-registration</td>
                    <td>₦10,000</td>
                  </tr>

                  <tr>
                    <td>Student Development Levy</td>
                    <td>₦200,000</td>
                  </tr>

                  <tr>
                    <td>ICT Fee</td>
                    <td>₦500,000</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="mb-6">
              <v-table>
                <thead>
                  <v-card-title>
                    Academic and Practical Fees
                  </v-card-title>
                </thead>

                <tbody>
                  <tr>
                    <td>Activities</td>
                    <td>Amount (₦)</td>
                  </tr>

                  <tr>
                    <td>Science Practicals</td>
                    <td>₦1,000,000</td>
                  </tr>

                  <tr>
                    <td>Computer Laboratory</td>
                    <td>₦70,000</td>
                  </tr>

                  <tr>
                    <td>Robotics Programme</td>
                    <td>₦100,000</td>
                  </tr>

                  <tr>
                    <td>Art and Craft Materials</td>
                    <td>₦50,000</td>
                  </tr>

                  <tr>
                    <td>Home Economics Practicals</td>
                    <td>₦50,000</td>
                  </tr>

                  <tr>
                    <td>Agric Science Practical</td>
                    <td>₦100,000</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="mb-6">
              <v-table>
                <thead>
                  <tr>
                    <td>Educational Projects and Activities</td>
                    <td>Amount (₦)</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>STEM Project Fair</td>
                    <td>₦50,000</td>
                  </tr>

                  <tr>
                    <td>Robotics Competition</td>
                    <td>₦50,000</td>
                  </tr>

                  <tr>
                    <td>Language Day</td>
                    <td>₦30,000</td>
                  </tr>

                  <tr>
                    <td>Cultural Day</td>
                    <td>₦20,000</td>
                  </tr>

                  <tr>
                    <td>Sport Festival</td>
                    <td>₦20,000</td>
                  </tr>

                  <tr>
                    <td>Educational Excursions</td>
                    <td>₦60,000</td>
                  </tr>

                  <tr>
                    <td>Graduation Ceremony</td>
                    <td>₦80,000</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>

        <v-card class="mb-6">
          <v-table>
            <thead>
              <tr>
                <td>Examination Fees</td>
                <td>Amount (₦)</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mid-Term Examination</td>
                <td>₦30,000</td>
              </tr>

              <tr>
                <td>End-of-Term Examination</td>
                <td>₦50,000</td>
              </tr>

              <tr>
                <td>Mock Examination</td>
                <td>₦50,000</td>
              </tr>

              <tr>
                <td>External Examination (where applicable)</td>
                <td>₦70,000</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>

        <v-card>
          <v-card-title>
            Discounts
          </v-card-title>

          <v-card-text>

            <v-alert
              class="mb-3"
              type="success"
              variant="tonal"
            >
              🎓 Parents with three or more children receive a 10% tuition discount.
            </v-alert>

            <v-alert
              type="info"
              variant="tonal"
            >
              👨‍🏫 Children of Bluefield College teachers receive a 20% tuition discount.
            </v-alert>
          </v-card-text>
        </v-card>

        <v-row class="mt-6">

          <!-- Payment Information -->
          <v-col cols="12" md="6">

            <v-card elevation="4" rounded="lg">

              <v-card-title class="bg-primary text-white">
                Payment Information
              </v-card-title>

              <v-card-text>

                <p><strong>Bank Name:</strong> Bluefield Bank</p>

                <p><strong>Account Name:</strong> Bluefield College</p>

                <p><strong>Account Number:</strong> 0123456789</p>

                <p><strong>Payment Reference:</strong> Student's Full Name & Class</p>

                <v-alert
                  class="mt-4"
                  type="info"
                  variant="tonal"
                >
                  Kindly send proof of payment to the Bursary Office or upload it through the student portal for confirmation.
                </v-alert>

              </v-card-text>

            </v-card>

          </v-col>

          <!-- Need Help -->
          <v-col cols="12" md="6">

            <v-card elevation="4" rounded="lg">

              <v-card-title class="bg-success text-white">
                Need Help?
              </v-card-title>

              <v-card-text>

                <p>
                  If you have any questions regarding tuition fees, payment plans,
                  or admissions, please contact our Admissions Office.
                </p>

                <v-divider class="my-4" />

                <p>
                  📍 <strong>Address:</strong><br>
                  Bluefield College,<br>
                  Lagos, Nigeria
                </p>

                <p>
                  📞 <strong>Phone:</strong><br>
                  +234 800 123 4567
                </p>

                <p>
                  ✉️ <strong>Email:</strong><br>
                  admissions@bluefieldcollege.edu.ng
                </p>

                <p>
                  🕒 <strong>Office Hours:</strong><br>
                  Monday – Friday<br>
                  8:00 AM – 4:00 PM
                </p>

                <v-btn
                  block
                  class="mt-4"
                  color="success"
                  to="/Contact"
                >
                  Contact Admissions
                </v-btn>

              </v-card-text>

            </v-card>

          </v-col>

        </v-row>

        <v-btn class="mb-2" color="primary" to="/upload">Pay Now</v-btn>

      </v-container>
    </v-main>
  </v-card>
</template>
