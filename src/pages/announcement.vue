<template>
  <v-app>
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
        Announcements
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon="mdi-arrow-left"
        variant="text"
        @click="goBack"
      />
    </v-app-bar>

    <v-main class="page-background">
      <v-container class="py-8">

        <!-- HEADER -->
        <div class="mb-8">
          <p class="text-medium-emphasis">
            Student Portal
          </p>

          <h1 class="text-h4 font-weight-bold">
            Announcements
          </h1>

          <p class="text-body-1 text-medium-emphasis mt-2">
            Stay updated with important school information.
          </p>
        </div>

        <!-- ERROR -->
        <v-alert
          v-if="errorMessage"
          class="mb-6"
          type="error"
          variant="tonal"
        >
          {{ errorMessage }}
        </v-alert>

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
            Loading announcements...
          </p>
        </div>

        <template v-else>

          <!-- STUDENT INFO -->
          <v-card
            class="mb-6 pa-5"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-center">
              <v-avatar
                color="primary"
                size="50"
                variant="tonal"
              >
                <v-icon>
                  mdi-bullhorn
                </v-icon>
              </v-avatar>

              <div class="ml-4">
                <div class="text-body-2 text-medium-emphasis">
                  Announcements for
                </div>

                <div class="text-h6 font-weight-bold">
                  {{ studentName }}
                </div>

                <div class="text-body-2 text-medium-emphasis mt-1">
                  Class:
                  <strong>{{ studentClass || '—' }}</strong>
                </div>
              </div>
            </div>
          </v-card>

          <!-- NO ANNOUNCEMENTS -->
          <v-card
            v-if="announcements.length === 0"
            class="pa-10 text-center"
            elevation="3"
            rounded="xl"
          >
            <v-icon
              color="primary"
              size="70"
            >
              mdi-bullhorn-outline
            </v-icon>

            <h2 class="text-h6 font-weight-bold mt-5">
              No Announcements
            </h2>

            <p class="text-body-2 text-medium-emphasis mt-2">
              There are no announcements available for you at the moment.
            </p>
          </v-card>

          <!-- ANNOUNCEMENTS -->
          <div v-else>
            <v-card
              v-for="announcement in announcements"
              :key="announcement.id"
              class="mb-5 announcement-card"
              elevation="3"
              rounded="xl"
            >
              <v-card-item class="pa-5">
                <template #prepend>
                  <v-avatar
                    color="primary"
                    size="50"
                    variant="tonal"
                  >
                    <v-icon>
                      mdi-bullhorn
                    </v-icon>
                  </v-avatar>
                </template>

                <v-card-title class="font-weight-bold">
                  {{ announcement.title }}
                </v-card-title>

                <v-card-subtitle>
                  {{ formatDate(announcement.created_at) }}
                </v-card-subtitle>
              </v-card-item>

              <v-divider />

              <v-card-text class="pa-6">
                <p class="message">
                  {{ announcement.message }}
                </p>

                <div class="mt-5">
                  <v-chip
                    color="primary"
                    size="small"
                    variant="tonal"
                  >
                    <v-icon start>
                      mdi-account-group
                    </v-icon>

                    {{
                      announcement.target_class
                        ? announcement.target_class
                        : 'All Students'
                    }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </div>

        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient'

  const router = useRouter()

  const loading = ref(true)
  const errorMessage = ref('')

  const studentName = ref('Student')
  const studentClass = ref('')

  const announcements = ref([])

  function formatDate (date) {
    if (!date) {
      return ''
    }

    return new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  async function loadAnnouncements () {
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

      // Get logged-in student's information
      const { data: student, error: studentError }
        = await supabase
          .from('applications')
          .select(`
            first_name,
            last_name,
            applying_class
          `)
          .eq('email', user.email)
          .maybeSingle()

      if (studentError) {
        throw studentError
      }

      if (!student) {
        errorMessage.value
          = 'No student application was found for this account.'
        return
      }

      studentName.value
        = `${student.first_name || ''} ${student.last_name || ''}`.trim()
          || 'Student'

      studentClass.value
        = student.applying_class || ''

      if (!studentClass.value) {
        errorMessage.value
          = 'Your class information could not be found.'
        return
      }

      // Get all published announcements
      const { data, error } = await supabase
        .from('announcements')
        .select(`
          id,
          title,
          message,
          target_class,
          created_at
        `)
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      // Only show:
      // 1. Announcements for this student's class
      // 2. Announcements for everyone
      announcements.value = (data || []).filter(announcement => {
        return (
          !announcement.target_class
          || announcement.target_class === studentClass.value
        )
      })
    } catch (error) {
      console.error('Announcement loading error:', error)

      errorMessage.value
        = error?.message || 'Unable to load announcements.'
    } finally {
      loading.value = false
    }
  }

  function goBack () {
    router.push('/studentportal')
  }

  onMounted(() => {
    loadAnnouncements()
  })
</script>

<style scoped>
.page-background {
  min-height: 100vh;
  background: #f5f7fb;
}

.logo {
  width: 55px;
  height: 55px;
  object-fit: contain;
  margin-left: 12px;
}

.loading-container {
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.message {
  white-space: pre-line;
  line-height: 1.8;
  font-size: 15px;
}

.announcement-card {
  transition: transform 0.2s ease;
}

.announcement-card:hover {
  transform: translateY(-2px);
}
</style>
