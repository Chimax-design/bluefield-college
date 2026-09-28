<template>
  <v-app>
    <v-main class="profile-page">
      <v-container
        class="py-8"
        max-width="900"
      >
        <!-- Header -->
        <div class="d-flex align-center mb-8">
          <v-btn
            icon="mdi-arrow-left"
            variant="text"
            @click="router.push('/teacherportal')"
          />

          <div class="ml-3">
            <h1 class="text-h4 font-weight-bold">
              Teacher Profile
            </h1>

            <p class="text-medium-emphasis mt-1">
              View your teacher account information
            </p>
          </div>
        </div>

        <!-- Profile Card -->
        <v-card
          class="pa-6"
          elevation="4"
          rounded="xl"
        >
          <div class="text-center mb-8">
            <v-avatar
              color="primary"
              size="100"
            >
              <v-icon size="55">
                mdi-account-tie
              </v-icon>
            </v-avatar>

            <h2 class="text-h5 font-weight-bold mt-4">
              Teacher Account
            </h2>

            <v-chip
              class="mt-2"
              color="success"
              size="small"
            >
              Active Teacher
            </v-chip>
          </div>

          <v-divider class="mb-6" />

          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Email Address"
                :model-value="teacherEmail"
                prepend-inner-icon="mdi-email"
                readonly
                variant="outlined"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Account Type"
                model-value="Teacher"
                prepend-inner-icon="mdi-account-tie"
                readonly
                variant="outlined"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Status"
                model-value="Active"
                prepend-inner-icon="mdi-check-circle"
                readonly
                variant="outlined"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="School"
                model-value="Bluefield College"
                prepend-inner-icon="mdi-school"
                readonly
                variant="outlined"
              />
            </v-col>
          </v-row>

          <v-alert
            class="mt-4"
            type="info"
            variant="tonal"
          >
            Your teacher account is managed by Bluefield College
            administration.
          </v-alert>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const teacherEmail = ref(
    localStorage.getItem('bluefieldTeacher')
    || 'teacher@bluefieldcollege.com',
  )
</script>

<style scoped>
.profile-page {
  min-height: 100vh;
  background: #f5f7fb;
}
</style>
