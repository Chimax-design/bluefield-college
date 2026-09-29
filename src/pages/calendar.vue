<template>

  <v-card class="mx-auto">
    <v-spacer />

    <v-layout>

      <AppNavbar />

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

<script>
  import AppNavbar from '@/components/AppNavbar.vue'

  export default {
    components: {
      AppNavbar,
    },
  }
</script>
