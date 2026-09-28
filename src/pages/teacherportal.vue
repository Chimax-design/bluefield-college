<template>
  <v-app>
    <v-app-bar color="primary" height="80">
      <template #prepend>
        <img
          alt="Bluefield College"
          class="logo"
          src="/bluefield-logo.png"
        >
      </template>

      <v-toolbar-title class="font-weight-bold">
        Teacher Portal
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon="mdi-bell-outline"
        variant="text"
      />

      <v-btn
        icon="mdi-logout"
        variant="text"
        @click="logout"
      />
    </v-app-bar>

    <v-main class="portal-background">
      <v-container class="py-8">

        <!-- WELCOME -->
        <div class="mb-8">
          <p class="text-medium-emphasis">
            Teacher Dashboard
          </p>

          <h1 class="text-h4 font-weight-bold">
            Welcome back, Teacher! 👋
          </h1>

          <p class="text-body-1 text-medium-emphasis mt-2">
            Manage your classes, students and academic activities.
          </p>
        </div>

        <!-- TEACHER PROFILE -->
        <v-card
          class="mb-6 pa-6"
          elevation="3"
          rounded="xl"
        >
          <div class="d-flex align-center flex-wrap">
            <v-avatar
              class="mr-5"
              color="primary"
              size="75"
            >
              <v-icon size="40">
                mdi-account-tie
              </v-icon>
            </v-avatar>

            <div>
              <div class="text-h6 font-weight-bold">
                Teacher Account
              </div>

              <div class="text-body-2 text-medium-emphasis">
                {{ teacherEmail }}
              </div>

              <v-chip
                class="mt-2"
                color="success"
                size="small"
              >
                Active Teacher
              </v-chip>
            </div>

            <v-spacer />

            <v-btn
              color="primary"
              prepend-icon="mdi-account"
              variant="outlined"
              @click="router.push('/teacherprofile')"
            >
              My Profile
            </v-btn>
          </div>
        </v-card>

        <!-- STATISTICS -->
        <v-row>
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
                mdi-account-group
              </v-icon>

              <div class="text-h5 font-weight-bold mt-4">
                42
              </div>

              <div class="text-medium-emphasis">
                Students
              </div>
            </v-card>
          </v-col>

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
                color="success"
                size="38"
              >
                mdi-book-open-page-variant
              </v-icon>

              <div class="text-h5 font-weight-bold mt-4">
                4
              </div>

              <div class="text-medium-emphasis">
                Subjects
              </div>
            </v-card>
          </v-col>

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
                mdi-school
              </v-icon>

              <div class="text-h5 font-weight-bold mt-4">
                SS 1
              </div>

              <div class="text-medium-emphasis">
                Main Class
              </div>
            </v-card>
          </v-col>

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
                mdi-file-edit
              </v-icon>

              <div class="text-h5 font-weight-bold mt-4">
                12
              </div>

              <div class="text-medium-emphasis">
                Pending Results
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- TEACHER SERVICES -->
        <h2 class="text-h5 font-weight-bold mt-10 mb-5">
          Teacher Services
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
                Teacher Announcement
              </div>

              <div class="text-body-2 mt-1">
                Remember to update your students' academic records
                before the end of the term.
              </div>
            </div>
          </div>
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

  const services = [
    {
      title: 'My Students',
      description: 'View and manage students assigned to your classes.',
      icon: 'mdi-account-group',
      color: 'primary',
    },
    {
      title: 'Enter Results',
      description: 'Enter and update student academic results.',
      icon: 'mdi-file-edit',
      color: 'success',
      path: '/teacherresult',
    },
    {
      title: 'Classes',
      description: 'View your classes and assigned subjects.',
      icon: 'mdi-school',
      color: 'orange',
    },
    {
      title: 'Timetable',
      description: 'View your teaching timetable.',
      icon: 'mdi-calendar-clock',
      color: 'purple',
      path: '/teachertimetable',
    },
    {
      title: 'Announcements',
      description: 'View important school announcements.',
      icon: 'mdi-bullhorn',
      color: 'blue',
      path: '/teacherannouncement',
    },
    {
      title: 'Documents',
      description: 'Access important teaching documents.',
      icon: 'mdi-file-document',
      color: 'teal',
      path: '/teacherdocuments',
    },
  ]

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
  function logout () {
    localStorage.removeItem('bluefieldTeacher')
    router.push('/teacher-login')
  }
</script>

<style scoped>
.portal-background {
  min-height: 100vh;
  background: #f5f7fb;
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
