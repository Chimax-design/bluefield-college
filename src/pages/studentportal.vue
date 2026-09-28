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
        Student Portal
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon="mdi-bell-outline"
        variant="text"
        @click="router.push('/announcement')"
      />

      <v-btn
        icon="mdi-logout"
        :loading="loggingOut"
        variant="text"
        @click="logout"
      />
    </v-app-bar>

    <v-main class="portal-background">
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
            Loading your student information...
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

          <!-- WELCOME -->
          <div class="mb-8">
            <p class="text-medium-emphasis">
              Student Dashboard
            </p>

            <h1 class="text-h4 font-weight-bold">
              Welcome back, {{ studentName }}! 👋
            </h1>

            <p class="text-body-1 text-medium-emphasis mt-2">
              Here's an overview of your school information.
            </p>
          </div>

          <!-- STUDENT INFORMATION -->
          <v-card
            class="mb-6 pa-6"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-center flex-wrap">

              <!-- PASSPORT -->
              <v-avatar
                class="mr-5"
                color="primary"
                size="85"
              >
                <v-img
                  v-if="passportUrl"
                  alt="Student passport"
                  :src="passportUrl"
                />

                <v-icon
                  v-else
                  size="42"
                >
                  mdi-account-school
                </v-icon>
              </v-avatar>

              <!-- STUDENT DETAILS -->
              <div>
                <div class="text-h6 font-weight-bold">
                  {{ studentName }}
                </div>

                <div class="text-body-2 text-medium-emphasis">
                  Admission Number:
                  <strong>{{ admissionNumber }}</strong>
                </div>

                <div class="text-body-2 text-medium-emphasis mt-1">
                  Email:
                  <strong>{{ studentEmail }}</strong>
                </div>

                <v-chip
                  class="mt-2"
                  :color="statusColor"
                  size="small"
                >
                  {{ applicationStatus }}
                </v-chip>
              </div>

              <v-spacer />

              <v-btn
                color="primary"
                prepend-icon="mdi-account"
                to="/profile"
                variant="outlined"
              >
                View Profile
              </v-btn>
            </div>
          </v-card>

          <!-- QUICK STATS -->
          <v-row>

            <!-- CLASS -->
            <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-card
                class="stat-card pa-5"
                elevation="3"
                rounded="xl"
              >
                <v-icon
                  color="primary"
                  size="38"
                >
                  mdi-school
                </v-icon>

                <div class="text-h5 font-weight-bold mt-4">
                  {{ studentClass }}
                </div>

                <div class="text-medium-emphasis">
                  Class
                </div>
              </v-card>
            </v-col>

            <!-- FEES -->
            <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-card
                class="stat-card pa-5"
                elevation="3"
                rounded="xl"
              >
                <v-icon
                  color="orange"
                  size="38"
                >
                  mdi-cash-clock
                </v-icon>

                <div class="text-h5 font-weight-bold mt-4">
                  Pending
                </div>

                <div class="text-medium-emphasis">
                  Fee Status
                </div>
              </v-card>
            </v-col>

            <!-- SUBJECTS -->
            <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-card
                class="stat-card pa-5"
                elevation="3"
                rounded="xl"
              >
                <v-icon
                  color="purple"
                  size="38"
                >
                  mdi-book-open-page-variant
                </v-icon>

                <div class="text-h5 font-weight-bold mt-4">
                  --
                </div>

                <div class="text-medium-emphasis">
                  Subjects
                </div>
              </v-card>
            </v-col>

            <!-- NOTIFICATIONS -->
            <v-col
              cols="12"
              md="3"
              sm="6"
            >
              <v-card
                class="stat-card pa-5"
                elevation="3"
                rounded="xl"
              >
                <v-icon
                  color="blue"
                  size="38"
                >
                  mdi-bell
                </v-icon>

                <div class="text-h5 font-weight-bold mt-4">
                  0
                </div>

                <div class="text-medium-emphasis">
                  Notifications
                </div>
              </v-card>
            </v-col>

          </v-row>

          <!-- PORTAL FEATURES -->
          <h2 class="text-h5 font-weight-bold mt-10 mb-5">
            Student Services
          </h2>

          <v-row>
            <v-col
              v-for="service in services"
              :key="service.title"
              cols="12"
              md="4"
              sm="6"
            >
              <v-card
                class="service-card pa-6"
                elevation="3"
                hover
                rounded="xl"
                @click="openService(service.title)"
              >
                <v-icon
                  :color="service.color"
                  size="45"
                >
                  {{ service.icon }}
                </v-icon>

                <div class="text-h6 font-weight-bold mt-5">
                  {{ service.title }}
                </div>

                <p class="text-body-2 text-medium-emphasis mt-2">
                  {{ service.description }}
                </p>

                <v-btn
                  class="mt-4"
                  :color="service.color"
                  variant="text"
                >
                  Open

                  <v-icon end>
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>

          <!-- ANNOUNCEMENT -->
          <v-card
            class="mt-8 pa-6"
            color="primary"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-center">
              <v-icon
                class="mr-4"
                size="40"
              >
                mdi-bullhorn
              </v-icon>

              <div>
                <div class="text-h6 font-weight-bold">
                  School Announcement
                </div>

                <div class="text-body-2 mt-1">
                  Welcome to the new Bluefield College Student Portal.
                  Check regularly for important school updates.
                </div>
              </div>
            </div>
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
import path from 'path'

  const router = useRouter()

  const studentName = ref('Student')
  const studentEmail = ref('')
  const admissionNumber = ref('Not assigned')
  const studentClass = ref('Not assigned')
  const passportUrl = ref('')
  const applicationStatus = ref('Application')
  const loading = ref(true)
  const loggingOut = ref(false)
  const errorMessage = ref('')

  const statusColor = computed(() => {
    const status = applicationStatus.value.toLowerCase()

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

  const services = [
    {
      title: 'My Profile',
      description: 'View your personal and admission information.',
      icon: 'mdi-account-circle',
      color: 'primary',
      path: '/profile',
    },
    {
      title: 'Payments',
      description: 'View your school fees and payment history.',
      icon: 'mdi-credit-card',
      color: 'success',
      path: '/payment',
    },
    {
      title: 'Results',
      description: 'View your academic results and performance.',
      icon: 'mdi-chart-line',
      color: 'purple',
      path: '/result',
    },
    {
      title: 'Timetable',
      description: 'View your current class timetable.',
      icon: 'mdi-calendar-clock',
      color: 'orange',
      path: '/timetable',
    },
    {
      title: 'Announcements',
      description: 'Stay updated with important school information.',
      icon: 'mdi-bullhorn',
      color: 'blue',
      path: '/announcement',
    },
    {
      title: 'Documents',
      description: 'Access your important school documents.',
      icon: 'mdi-file-document-outline',
      color: 'teal',
      path: '/documents',
    },
  ]

  async function loadStudent () {
    loading.value = true
    errorMessage.value = ''

    try {
      // Get the currently logged-in student
      const { data: { user }, error: authError }
        = await supabase.auth.getUser()

      if (authError || !user) {
        router.push('/studentlogin')
        return
      }

      // Get the student's email from Supabase Auth
      studentEmail.value = user.email || ''

      // Find the student's application
      const { data: student, error: studentError }
        = await supabase
          .from('applications')
          .select(`
            id,
            first_name,
            last_name,
            email,
            applying_class,
            passport_url,
            application_status,
            admission_number
          `)
          .eq('email', user.email)
          .maybeSingle()

      if (studentError) {
        throw studentError
      }

      if (!student) {
        errorMessage.value
          = 'Your account was found, but no application record is linked to this email.'
        return
      }

      // Student name
      studentName.value
        = `${student.first_name || ''} ${student.last_name || ''}`.trim()
          || 'Student'

      // Student information
      admissionNumber.value
        = student.admission_number || 'Not assigned'

      studentClass.value
        = student.applying_class || 'Not assigned'

      passportUrl.value
        = student.passport_url || ''

      applicationStatus.value
        = student.application_status || 'Application'
    } catch (error) {
      console.error('Error loading student:', error)

      errorMessage.value
        = 'Unable to load your student information. Please try again.'
    } finally {
      loading.value = false
    }
  }

  function openService (service) {
    const selectedService = services.find(
      item => item.title === service,
    )

    if (selectedService?.path) {
      router.push(selectedService.path)
      return
    }

    alert(`${service} will be available soon.`)
  }

  async function logout () {
    loggingOut.value = true

    try {
      const { error } = await supabase.auth.signOut()

      if (error) {
        throw error
      }

      localStorage.removeItem('bluefieldStudent')

      router.push('/studentlogin')
    } catch (error) {
      console.error('Logout error:', error)

      errorMessage.value
        = 'Unable to log out. Please try again.'
    } finally {
      loggingOut.value = false
    }
  }

  onMounted(() => {
    loadStudent()
  })
</script>

<style scoped>
.portal-background {
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

.stat-card,
.service-card {
  height: 100%;
  transition: transform 0.2s ease;
}

.stat-card:hover,
.service-card:hover {
  transform: translateY(-4px);
}
</style>
