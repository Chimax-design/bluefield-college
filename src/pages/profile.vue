<template>
  <v-app>
    <!-- TOP BAR -->
    <v-app-bar
      color="primary"
      height="80"
    >
      <template #prepend>
        <img
          alt="Bluefield College"
          class="logo"
          src="/bluefield-logo.png"
        >
      </template>

      <v-toolbar-title class="font-weight-bold">
        My Profile
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon="mdi-arrow-left"
        variant="text"
        @click="goBack"
      />
    </v-app-bar>

    <v-main class="profile-background">
      <v-container class="py-8">

        <!-- LOADING -->
        <div
          v-if="loading"
          class="loading-container"
        >
          <v-progress-circular
            color="primary"
            indeterminate
            size="55"
          />

          <p class="text-medium-emphasis mt-4">
            Loading your profile...
          </p>
        </div>

        <template v-else>

          <!-- ERROR -->
          <v-alert
            v-if="errorMessage"
            class="mb-6"
            type="error"
            variant="tonal"
          >
            {{ errorMessage }}
          </v-alert>

          <!-- PROFILE HEADER -->
          <v-card
            class="profile-header pa-6 mb-6"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-center flex-wrap">

              <v-avatar
                color="primary"
                size="110"
              >
                <v-img
                  v-if="student.passport_url"
                  alt="Student passport"
                  :src="student.passport_url"
                />

                <v-icon
                  v-else
                  size="55"
                >
                  mdi-account-school
                </v-icon>
              </v-avatar>

              <div class="ml-5 mt-3 mt-sm-0">
                <h1 class="text-h4 font-weight-bold">
                  {{ fullName }}
                </h1>

                <p class="text-body-1 text-medium-emphasis mt-1">
                  Admission Number:
                  <strong>{{ student.admission_number || 'Not assigned' }}</strong>
                </p>

                <v-chip
                  class="mt-2"
                  :color="statusColor"
                  size="small"
                >
                  {{ student.application_status || 'Application' }}
                </v-chip>
              </div>
            </div>
          </v-card>

          <!-- PERSONAL INFORMATION -->
          <v-card
            class="mb-6 pa-6"
            elevation="3"
            rounded="xl"
          >
            <div class="section-title">
              <v-icon
                class="mr-2"
                color="primary"
              >
                mdi-account
              </v-icon>

              <h2 class="text-h6 font-weight-bold">
                Personal Information
              </h2>
            </div>

            <v-divider class="my-5" />

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  First Name
                </div>

                <div class="info-value">
                  {{ student.first_name || 'Not provided' }}
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Last Name
                </div>

                <div class="info-value">
                  {{ student.last_name || 'Not provided' }}
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Gender
                </div>

                <div class="info-value">
                  {{ student.gender || 'Not provided' }}
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Date of Birth
                </div>

                <div class="info-value">
                  {{ formatDate(student.dob) }}
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Email Address
                </div>

                <div class="info-value">
                  {{ student.email || 'Not provided' }}
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Phone Number
                </div>

                <div class="info-value">
                  {{ student.phone || 'Not provided' }}
                </div>
              </v-col>

              <v-col cols="12">
                <div class="info-label">
                  Address
                </div>

                <div class="info-value">
                  {{ student.address || 'Not provided' }}
                </div>
              </v-col>
            </v-row>
          </v-card>

          <!-- SCHOOL INFORMATION -->
          <v-card
            class="mb-6 pa-6"
            elevation="3"
            rounded="xl"
          >
            <div class="section-title">
              <v-icon
                class="mr-2"
                color="primary"
              >
                mdi-school
              </v-icon>

              <h2 class="text-h6 font-weight-bold">
                School Information
              </h2>
            </div>

            <v-divider class="my-5" />

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Admission Number
                </div>

                <div class="info-value">
                  {{ student.admission_number || 'Not assigned' }}
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Applying Class
                </div>

                <div class="info-value">
                  {{ student.applying_class || 'Not provided' }}
                </div>
              </v-col>

              <v-col cols="12">
                <div class="info-label">
                  Previous School
                </div>

                <div class="info-value">
                  {{ student.previous_school || 'Not provided' }}
                </div>
              </v-col>
            </v-row>
          </v-card>

          <!-- GUARDIAN INFORMATION -->
          <v-card
            class="mb-6 pa-6"
            elevation="3"
            rounded="xl"
          >
            <div class="section-title">
              <v-icon
                class="mr-2"
                color="primary"
              >
                mdi-account-supervisor
              </v-icon>

              <h2 class="text-h6 font-weight-bold">
                Guardian Information
              </h2>
            </div>

            <v-divider class="my-5" />

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Guardian Name
                </div>

                <div class="info-value">
                  {{ student.guardian_name || 'Not provided' }}
                </div>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="info-label">
                  Guardian Phone
                </div>

                <div class="info-value">
                  {{ student.guardian_phone || 'Not provided' }}
                </div>
              </v-col>
            </v-row>
          </v-card>

        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient'

  const router = useRouter()

  const loading = ref(true)
  const errorMessage = ref('')

  const student = ref({
    first_name: '',
    last_name: '',
    gender: '',
    dob: '',
    email: '',
    phone: '',
    address: '',
    previous_school: '',
    applying_class: '',
    guardian_name: '',
    guardian_phone: '',
    passport_url: '',
    application_status: '',
    admission_number: '',
  })

  const fullName = computed(() => {
    return `${student.value.first_name || ''} ${student.value.last_name || ''}`.trim()
      || 'Student'
  })

  const statusColor = computed(() => {
    const status
      = (student.value.application_status || '').toLowerCase()

    if (
      status.includes('approved')
      || status.includes('admitted')
      || status.includes('active')
    ) {
      return 'success'
    }

    if (
      status.includes('pending')
      || status.includes('review')
    ) {
      return 'orange'
    }

    if (
      status.includes('rejected')
      || status.includes('declined')
    ) {
      return 'error'
    }

    return 'primary'
  })

  function formatDate (date) {
    if (!date) {
      return 'Not provided'
    }

    return new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  async function loadProfile () {
    loading.value = true
    errorMessage.value = ''

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError || !user) {
        router.push('/studentlogin')
        return
      }

      const { data, error } = await supabase
        .from('applications')
        .select(`
          id,
          first_name,
          last_name,
          gender,
          dob,
          email,
          phone,
          address,
          previous_school,
          applying_class,
          guardian_name,
          guardian_phone,
          passport_url,
          application_status,
          admission_number
        `)
        .eq('email', user.email)
        .maybeSingle()

      if (error) {
        throw error
      }

      if (!data) {
        errorMessage.value
          = 'No application record was found for this account.'
        return
      }

      student.value = data
    } catch (error) {
      console.error('Profile loading error:', error)

      errorMessage.value
        = error?.message || 'Unable to load your profile.'
    } finally {
      loading.value = false
    }
  }

  function goBack () {
    router.push('/studentportal')
  }

  onMounted(() => {
    loadProfile()
  })
</script>

<style scoped>
.profile-background {
  min-height: 100vh;
  background: #f5f7fb;
}

.loading-container {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 55px;
  height: 55px;
  object-fit: contain;
  margin-left: 12px;
}

.profile-header {
  background: white;
}

.section-title {
  display: flex;
  align-items: center;
}

.info-label {
  color: #777;
  font-size: 0.85rem;
  margin-bottom: 5px;
}

.info-value {
  font-size: 1rem;
  font-weight: 500;
}
</style>
