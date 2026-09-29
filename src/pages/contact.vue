<template>
  <v-card class="mx auto" rounded>
    <v-spacer />

    <AppNavbar />

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

<script>
  import AppNavbar from '@/components/AppNavbar.vue'

  export default {
    components: {
      AppNavbar,
    },
  }
</script>
