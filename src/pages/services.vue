<template>
  <v-card class="mx auto">
    <v-spacer />
    <app-navbar />

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

<script>
  import AppNavbar from '@/components/AppNavbar.vue'

  export default {
    components: {
      AppNavbar,
    },
  }
</script>
