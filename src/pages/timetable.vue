<template>
  <v-app>
    <!-- NAVBAR -->
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
        My Timetable
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

        <!-- PAGE HEADER -->
        <div class="mb-8">
          <p class="text-medium-emphasis">
            Student Portal
          </p>

          <h1 class="text-h4 font-weight-bold">
            My Timetable
          </h1>

          <p class="text-body-1 text-medium-emphasis mt-2">
            View your class timetable.
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
            Loading your timetable...
          </p>
        </div>

        <template v-else>

          <!-- STUDENT CLASS -->
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
                  mdi-account-school
                </v-icon>
              </v-avatar>

              <div class="ml-4">
                <div class="text-body-2 text-medium-emphasis">
                  Student
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

          <!-- NO TIMETABLE -->
          <v-card
            v-if="timetable.length === 0"
            class="pa-10 text-center"
            elevation="3"
            rounded="xl"
          >
            <v-icon
              color="primary"
              size="70"
            >
              mdi-calendar-remove
            </v-icon>

            <h2 class="text-h6 font-weight-bold mt-5">
              No Timetable Available
            </h2>

            <p class="text-body-2 text-medium-emphasis mt-2">
              Your class timetable has not been published yet.
            </p>
          </v-card>

          <!-- TIMETABLE -->
          <template v-else>

            <!-- MOBILE / CARD VIEW -->
            <div class="mobile-timetable">
              <v-card
                v-for="day in dayOptions"
                :key="day"
                class="mb-5"
                elevation="3"
                rounded="xl"
              >
                <v-card-title class="day-title">
                  <v-icon class="mr-2">
                    mdi-calendar
                  </v-icon>

                  {{ day }}
                </v-card-title>

                <v-divider />

                <v-card-text
                  v-if="entriesForDay(day).length === 0"
                  class="text-medium-emphasis"
                >
                  No classes scheduled.
                </v-card-text>

                <v-list
                  v-else
                  lines="three"
                >
                  <v-list-item
                    v-for="entry in entriesForDay(day)"
                    :key="entry.id"
                  >
                    <template #prepend>
                      <v-avatar
                        color="primary"
                        variant="tonal"
                      >
                        <v-icon>
                          mdi-book-open-variant
                        </v-icon>
                      </v-avatar>
                    </template>

                    <v-list-item-title class="font-weight-bold">
                      {{ entry.subject }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      <div>
                        <v-icon
                          class="mr-1"
                          size="16"
                        >
                          mdi-clock-outline
                        </v-icon>

                        {{ entry.period }}
                      </div>

                      <div class="mt-1">
                        <v-icon
                          class="mr-1"
                          size="16"
                        >
                          mdi-account-tie
                        </v-icon>

                        {{ entry.teacher_name || 'Teacher not specified' }}
                      </div>

                      <div class="mt-1">
                        <v-icon
                          class="mr-1"
                          size="16"
                        >
                          mdi-door
                        </v-icon>

                        {{ entry.room || 'Room not specified' }}
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card>
            </div>

            <!-- DESKTOP TABLE -->
            <v-card
              class="desktop-timetable"
              elevation="3"
              rounded="xl"
            >
              <v-card-title class="pa-6">
                <div class="d-flex align-center">
                  <v-avatar
                    color="primary"
                    size="45"
                    variant="tonal"
                  >
                    <v-icon>
                      mdi-calendar-month
                    </v-icon>
                  </v-avatar>

                  <div class="ml-4">
                    <div class="text-h6 font-weight-bold">
                      Weekly Timetable
                    </div>

                    <div class="text-body-2 text-medium-emphasis">
                      {{ studentClass }}
                    </div>
                  </div>
                </div>
              </v-card-title>

              <v-divider />

              <v-table hover>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Period</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Room</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    v-for="entry in timetable"
                    :key="entry.id"
                  >
                    <td>
                      <v-chip
                        color="primary"
                        size="small"
                        variant="tonal"
                      >
                        {{ entry.day }}
                      </v-chip>
                    </td>

                    <td>
                      {{ entry.period }}
                    </td>

                    <td class="font-weight-bold">
                      {{ entry.subject }}
                    </td>

                    <td>
                      {{ entry.teacher_name || '—' }}
                    </td>

                    <td>
                      {{ entry.room || '—' }}
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>

          </template>
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
  const timetable = ref([])

  const dayOptions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ]

  function entriesForDay (day) {
    return timetable.value.filter(entry => entry.day === day)
  }

  async function loadTimetable () {
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

      // Get student's information
      const { data: student, error: studentError }
        = await supabase
          .from('applications')
          .select(`
            first_name,
            last_name,
            applying_class,
            admission_number
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

      // Get published timetable for student's class
      const { data, error } = await supabase
        .from('timetable')
        .select(`
          id,
          student_class,
          day,
          period,
          subject,
          teacher_name,
          room
        `)
        .eq('student_class', studentClass.value)
        .eq('published', true)

      if (error) {
        throw error
      }

      const dayOrder = {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
      }

      timetable.value = (data || []).sort((a, b) => {
        const dayDifference
          = (dayOrder[a.day] || 99)
            - (dayOrder[b.day] || 99)

        if (dayDifference !== 0) {
          return dayDifference
        }

        return String(a.period || '').localeCompare(
          String(b.period || ''),
        )
      })
    } catch (error) {
      console.error('Timetable loading error:', error)

      errorMessage.value
        = error?.message || 'Unable to load your timetable.'
    } finally {
      loading.value = false
    }
  }

  function goBack () {
    router.push('/studentportal')
  }

  onMounted(() => {
    loadTimetable()
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

/* Desktop table */
.desktop-timetable {
  display: block;
}

/* Mobile cards */
.mobile-timetable {
  display: none;
}

.day-title {
  font-weight: 700;
}

/* Mobile */
@media (max-width: 767px) {
  .desktop-timetable {
    display: none;
  }

  .mobile-timetable {
    display: block;
  }
}
</style>
