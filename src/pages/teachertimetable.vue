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
        Timetable Management
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
            Teacher Portal
          </p>

          <h1 class="text-h4 font-weight-bold">
            Manage Timetable
          </h1>

          <p class="text-body-1 text-medium-emphasis mt-2">
            Create and manage student class timetables.
          </p>
        </div>

        <!-- SUCCESS -->
        <v-alert
          v-if="successMessage"
          class="mb-6"
          closable
          type="success"
          variant="tonal"
          @click:close="successMessage = ''"
        >
          {{ successMessage }}
        </v-alert>

        <!-- ERROR -->
        <v-alert
          v-if="errorMessage"
          class="mb-6"
          closable
          type="error"
          variant="tonal"
          @click:close="errorMessage = ''"
        >
          {{ errorMessage }}
        </v-alert>

        <!-- ADD / EDIT FORM -->
        <v-card
          class="mb-8 pa-6"
          elevation="4"
          rounded="xl"
        >
          <div class="d-flex align-center mb-6">
            <v-avatar
              color="primary"
              size="50"
              variant="tonal"
            >
              <v-icon>
                mdi-calendar-plus
              </v-icon>
            </v-avatar>

            <div class="ml-4">
              <div class="text-h6 font-weight-bold">
                {{ editingId ? 'Edit Timetable Entry' : 'Add Timetable Entry' }}
              </div>

              <div class="text-body-2 text-medium-emphasis">
                Enter the class schedule below.
              </div>
            </div>
          </div>

          <v-row>
            <!-- CLASS -->
            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="form.student_class"
                :items="classOptions"
                label="Student Class"
                prepend-inner-icon="mdi-account-school"
                rounded="lg"
                variant="outlined"
              />
            </v-col>

            <!-- DAY -->
            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="form.day"
                :items="dayOptions"
                label="Day"
                prepend-inner-icon="mdi-calendar"
                rounded="lg"
                variant="outlined"
              />
            </v-col>

            <!-- PERIOD -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="form.period"
                label="Period / Time"
                placeholder="e.g. 8:00 AM - 9:00 AM"
                prepend-inner-icon="mdi-clock-outline"
                rounded="lg"
                variant="outlined"
              />
            </v-col>

            <!-- SUBJECT -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="form.subject"
                label="Subject"
                placeholder="e.g. Mathematics"
                prepend-inner-icon="mdi-book-open-variant"
                rounded="lg"
                variant="outlined"
              />
            </v-col>

            <!-- TEACHER -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="form.teacher_name"
                label="Teacher Name"
                placeholder="e.g. Mrs. Chiamaka"
                prepend-inner-icon="mdi-account-tie"
                rounded="lg"
                variant="outlined"
              />
            </v-col>

            <!-- ROOM -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="form.room"
                label="Room / Class"
                placeholder="e.g. Room 5"
                prepend-inner-icon="mdi-door"
                rounded="lg"
                variant="outlined"
              />
            </v-col>

            <!-- PUBLISHED -->
            <v-col cols="12">
              <v-switch
                v-model="form.published"
                color="primary"
                hide-details
                label="Publish this timetable entry"
              />
            </v-col>
          </v-row>

          <!-- BUTTONS -->
          <div class="d-flex flex-wrap ga-3 mt-4">
            <v-btn
              color="primary"
              :loading="saving"
              prepend-icon="mdi-content-save"
              rounded="lg"
              size="large"
              @click="saveTimetable"
            >
              {{ editingId ? 'Update Entry' : 'Save Entry' }}
            </v-btn>

            <v-btn
              v-if="editingId"
              prepend-icon="mdi-close"
              rounded="lg"
              size="large"
              variant="outlined"
              @click="resetForm"
            >
              Cancel Edit
            </v-btn>
          </div>
        </v-card>

        <!-- EXISTING ENTRIES -->
        <v-card
          elevation="4"
          rounded="xl"
        >
          <v-card-title class="pa-6">
            <div class="d-flex align-center">
              <v-icon
                class="mr-3"
                color="primary"
              >
                mdi-calendar-month
              </v-icon>

              <div>
                <div class="text-h6 font-weight-bold">
                  Timetable Entries
                </div>

                <div class="text-body-2 text-medium-emphasis">
                  View and manage existing timetable entries.
                </div>
              </div>
            </div>
          </v-card-title>

          <v-divider />

          <div
            v-if="loading"
            class="loading-container"
          >
            <v-progress-circular
              color="primary"
              indeterminate
              size="50"
            />

            <p class="text-medium-emphasis mt-4">
              Loading timetable...
            </p>
          </div>

          <v-table
            v-else
            hover
          >
            <thead>
              <tr>
                <th>Class</th>
                <th>Day</th>
                <th>Period</th>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Room</th>
                <th>Status</th>

                <th class="text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="entry in timetable"
                :key="entry.id"
              >
                <td>{{ entry.student_class }}</td>
                <td>{{ entry.day }}</td>
                <td>{{ entry.period }}</td>

                <td class="font-weight-medium">
                  {{ entry.subject }}
                </td>

                <td>{{ entry.teacher_name || '—' }}</td>
                <td>{{ entry.room || '—' }}</td>

                <td>
                  <v-chip
                    :color="entry.published ? 'success' : 'orange'"
                    size="small"
                  >
                    {{ entry.published ? 'Published' : 'Draft' }}
                  </v-chip>
                </td>

                <td>
                  <div class="d-flex justify-center ga-2">
                    <v-btn
                      color="primary"
                      icon="mdi-pencil"
                      size="small"
                      variant="tonal"
                      @click="editEntry(entry)"
                    />

                    <v-btn
                      color="error"
                      icon="mdi-delete"
                      size="small"
                      variant="tonal"
                      @click="openDeleteDialog(entry)"
                    />
                  </div>
                </td>
              </tr>

              <tr v-if="timetable.length === 0">
                <td
                  class="text-center pa-8 text-medium-emphasis"
                  colspan="8"
                >
                  No timetable entries have been created yet.
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-container>
    </v-main>

    <!-- DELETE CONFIRMATION -->
    <v-dialog
      v-model="deleteDialog"
      max-width="450"
    >
      <v-card rounded="xl">
        <v-card-title class="pa-6">
          Delete Timetable Entry?
        </v-card-title>

        <v-card-text>
          Are you sure you want to delete the
          <strong>{{ selectedEntry?.subject }}</strong>
          timetable entry for
          <strong>{{ selectedEntry?.student_class }}</strong>?
        </v-card-text>

        <v-card-actions class="pa-6">
          <v-spacer />

          <v-btn
            variant="text"
            @click="deleteDialog = false"
          >
            Cancel
          </v-btn>

          <v-btn
            color="error"
            :loading="deleting"
            variant="flat"
            @click="confirmDelete"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
  import { onMounted, reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient'

  const router = useRouter()

  const loading = ref(true)
  const saving = ref(false)
  const deleting = ref(false)

  const successMessage = ref('')
  const errorMessage = ref('')

  const editingId = ref(null)

  const deleteDialog = ref(false)
  const selectedEntry = ref(null)

  const timetable = ref([])

  const classOptions = [
    'Babies',
    'Nursery 1',
    'Nursery 2',
    'Primary 1',
    'Primary 2',
    'Primary 3',
    'Primary 4',
    'Primary 5',
    'Primary 6',
    'JSS 1',
    'JSS 2',
    'JSS 3',
    'SS 1',
    'SS 2',
    'SS 3',
  ]

  const dayOptions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ]

  const form = reactive({
    student_class: '',
    day: '',
    period: '',
    subject: '',
    teacher_name: '',
    room: '',
    published: false,
  })

  function clearMessages () {
    successMessage.value = ''
    errorMessage.value = ''
  }

  function resetForm () {
    editingId.value = null

    form.student_class = ''
    form.day = ''
    form.period = ''
    form.subject = ''
    form.teacher_name = ''
    form.room = ''
    form.published = false
  }

  function editEntry (entry) {
    clearMessages()

    editingId.value = entry.id

    form.student_class = entry.student_class
    form.day = entry.day
    form.period = entry.period
    form.subject = entry.subject
    form.teacher_name = entry.teacher_name || ''
    form.room = entry.room || ''
    form.published = entry.published
  }

  async function loadTimetable () {
    loading.value = true
    clearMessages()

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError || !user) {
        router.push('/student-login')
        return
      }

      const { data, error } = await supabase
        .from('timetable')
        .select('*')
        .order('day', { ascending: true })
        .order('period', { ascending: true })

      if (error) {
        throw error
      }

      timetable.value = data || []
    } catch (error) {
      console.error('Timetable loading error:', error)

      errorMessage.value
        = error?.message || 'Unable to load timetable.'
    } finally {
      loading.value = false
    }
  }

  async function saveTimetable () {
    clearMessages()

    if (
      !form.student_class
      || !form.day
      || !form.period
      || !form.subject
    ) {
      errorMessage.value
        = 'Please complete the class, day, period and subject fields.'
      return
    }

    saving.value = true

    try {
      const payload = {
        student_class: form.student_class,
        day: form.day,
        period: form.period,
        subject: form.subject,
        teacher_name: form.teacher_name || null,
        room: form.room || null,
        published: form.published,
      }

      if (editingId.value) {
        const { error } = await supabase
          .from('timetable')
          .update(payload)
          .eq('id', editingId.value)

        if (error) {
          throw error
        }

        successMessage.value
          = 'Timetable entry updated successfully.'
      } else {
        const { error } = await supabase
          .from('timetable')
          .insert(payload)

        if (error) {
          throw error
        }

        successMessage.value
          = 'Timetable entry added successfully.'
      }

      resetForm()
      await loadTimetable()
    } catch (error) {
      console.error('Timetable save error:', error)

      errorMessage.value
        = error?.message || 'Unable to save timetable entry.'
    } finally {
      saving.value = false
    }
  }

  function openDeleteDialog (entry) {
    selectedEntry.value = entry
    deleteDialog.value = true
  }

  async function confirmDelete () {
    if (!selectedEntry.value) {
      return
    }

    deleting.value = true
    clearMessages()

    try {
      const { error } = await supabase
        .from('timetable')
        .delete()
        .eq('id', selectedEntry.value.id)

      if (error) {
        throw error
      }

      successMessage.value
        = 'Timetable entry deleted successfully.'

      deleteDialog.value = false
      selectedEntry.value = null

      await loadTimetable()
    } catch (error) {
      console.error('Timetable delete error:', error)

      errorMessage.value
        = error?.message || 'Unable to delete timetable entry.'
    } finally {
      deleting.value = false
    }
  }

  function goBack () {
    router.push('/teacherportal')
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
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
