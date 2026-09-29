<template>
  <div>
    <!-- APP BAR -->
    <v-app-bar
      color="info"
      density="compact"
      height="90"
    >
      <!-- LOGO -->
      <template #prepend>
        <div class="logo-container">
          <img
            alt="Bluefield College Logo"
            class="app-logo"
            src="/bluefield-logo.png"
          >
        </div>
      </template>

      <v-spacer />

      <v-btn
        class="mx-2"
        color="primary"
        href="/homepage"
      >
        Home
      </v-btn>

      <!-- DESKTOP NAVIGATION -->
      <div class="desktop-nav d-none d-md-flex" />

      <!-- MOBILE MENU BUTTON -->
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = !drawer"
      />
    </v-app-bar>

    <!-- MOBILE DRAWER -->
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
    >
      <v-list>

        <v-list-subheader>
          Update
        </v-list-subheader>

        <v-list-item
          title="School Outings"
          to="/schooloutings"
        />

        <v-list-item
          title="Academic Event"
          to="/academicevents"
        />

        <v-list-item
          title="School Activities"
          to="/schactivity"
        />

        <v-divider />

        <v-list-subheader>
          About Us
        </v-list-subheader>

        <v-list-item
          title="Why Bluefield College"
          to="/whyus"
        />

        <v-list-item
          title="Strategy 2030"
          to="/strategy"
        />

        <v-list-item
          title="Philosophy"
          to="/philosophy"
        />

        <v-list-item
          title="Our Vision and Mission"
          to="/vandm"
        />

        <v-list-item
          title="About Bluefield College"
          to="/aboutus"
        />

        <v-divider />

        <v-list-subheader>
          Admissions
        </v-list-subheader>

        <v-list-item
          title="Admission Requirements"
          to="/admission"
        />

        <v-list-item
          title="Tuition & Fees"
          to="/tuition"
        />

        <v-divider />

        <v-list-subheader>
          Administration
        </v-list-subheader>

        <v-list-item
          title="Administrative Offices"
          to="/administraoff"
        />

        <v-list-item
          title="Department & Staff"
          to="/staff"
        />

        <v-list-item
          title="Academic Calendar"
          to="/calendar"
        />

        <v-list-item
          title="Contact Us"
          to="/contact"
        />

        <v-divider />

        <v-list-subheader>
          School Services
        </v-list-subheader>

        <v-list-item
          title="Make Payment"
          to="/upload"
        />

        <v-list-item
          title="Services"
          to="/services"
        />

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
      }
    },
  }
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  height: 90px;
  padding-left: 10px;
}

.app-logo {
  width: 150px;
  height: 75px;
  object-fit: contain;
  display: block;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
