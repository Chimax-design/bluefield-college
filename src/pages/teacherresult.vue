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
        Teacher Results Portal
      </v-toolbar-title>
    </v-app-bar>

    <v-main class="page-background">
      <v-container class="py-8">

        <!-- PAGE HEADER -->
        <div class="mb-8">
          <p class="text-medium-emphasis">
            Academic Management
          </p>

          <h1 class="text-h4 font-weight-bold">
            {{ editingResult ? 'Edit Student Result' : 'Upload Student Result' }}
          </h1>

          <p class="text-body-1 text-medium-emphasis mt-2">
            {{
              editingResult
                ? 'Update the selected student academic result.'
                : 'Enter and publish a student academic result.'
            }}
          </p>
        </div>

        <!-- SUCCESS MESSAGE -->
        <v-alert
          v-if="successMessage"
          class="mb-6"
          type="success"
          variant="tonal"
        >
          {{ successMessage }}
        </v-alert>

        <!-- ERROR MESSAGE -->
        <v-alert
          v-if="errorMessage"
          class="mb-6"
          type="error"
          variant="tonal"
        >
          {{ errorMessage }}
        </v-alert>

        <!-- RESULT FORM -->
        <v-card
          class="pa-6"
          elevation="3"
          rounded="xl"
        >
          <div class="section-title mb-5">
            <v-icon
              class="mr-3"
              color="primary"
            >
              mdi-file-edit
            </v-icon>

            <h2 class="text-h6 font-weight-bold">
              Result Details
            </h2>
          </div>

          <v-divider class="mb-6" />

          <v-row>
            <!-- ADMISSION NUMBER -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="form.admissionNumber"
                label="Admission Number"
                prepend-inner-icon="mdi-card-account-details"
                :readonly="editingResult"
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
                prepend-inner-icon="mdi-book-open-page-variant"
                variant="outlined"
              />
            </v-col>

            <!-- CA SCORE -->
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model.number="form.caScore"
                label="CA Score"
                max="40"
                min="0"
                prepend-inner-icon="mdi-pencil"
                type="number"
                variant="outlined"
              />
            </v-col>

            <!-- EXAM SCORE -->
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model.number="form.examScore"
                label="Exam Score"
                max="60"
                min="0"
                prepend-inner-icon="mdi-file-document"
                type="number"
                variant="outlined"
              />
            </v-col>

            <!-- TOTAL -->
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                label="Total Score"
                :model-value="totalScore"
                prepend-inner-icon="mdi-calculator"
                readonly
                variant="outlined"
              />
            </v-col>

            <!-- GRADE -->
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                label="Grade"
                :model-value="grade"
                prepend-inner-icon="mdi-medal"
                readonly
                variant="outlined"
              />
            </v-col>

            <!-- TERM -->
            <v-col
              cols="12"
              md="4"
            >
              <v-select
                v-model="form.term"
                :items="terms"
                label="Term"
                prepend-inner-icon="mdi-calendar"
                variant="outlined"
              />
            </v-col>

            <!-- SESSION -->
            <v-col
              cols="12"
              md="4"
            >
              <v-select
                v-model="form.session"
                :items="sessions"
                label="Academic Session"
                prepend-inner-icon="mdi-school"
                variant="outlined"
              />
            </v-col>

            <!-- PUBLISH -->
            <v-col cols="12">
              <v-switch
                v-model="form.published"
                color="success"
                label="Publish result immediately"
              />
            </v-col>
          </v-row>

          <v-divider class="my-5" />

          <div class="d-flex justify-end">
            <!-- CLEAR / CANCEL -->
            <v-btn
              class="mr-3"
              variant="outlined"
              @click="resetForm"
            >
              {{ editingResult ? 'Cancel Edit' : 'Clear' }}
            </v-btn>

            <!-- SAVE / UPDATE -->
            <v-btn
              color="primary"
              :loading="saving"
              :prepend-icon="
                editingResult
                  ? 'mdi-content-save-edit'
                  : 'mdi-content-save'
              "
              @click="editingResult ? updateResult() : saveResult()"
            >
              {{ editingResult ? 'Update Result' : 'Save Result' }}
            </v-btn>
          </div>
        </v-card>

        <!-- SCORE GUIDE -->
        <v-card
          class="mt-6 pa-6"
          elevation="2"
          rounded="xl"
        >
          <h2 class="text-h6 font-weight-bold mb-4">
            Grading Guide
          </h2>

          <v-row>
            <v-col cols="6" md="2">
              <v-chip block color="success">
                A — 70–100
              </v-chip>
            </v-col>

            <v-col cols="6" md="2">
              <v-chip block color="primary">
                B — 60–69
              </v-chip>
            </v-col>

            <v-col cols="6" md="2">
              <v-chip block color="primary">
                C — 50–59
              </v-chip>
            </v-col>

            <v-col cols="6" md="2">
              <v-chip block color="orange">
                D — 45–49
              </v-chip>
            </v-col>

            <v-col cols="6" md="2">
              <v-chip block color="orange">
                E — 40–44
              </v-chip>
            </v-col>

            <v-col cols="6" md="2">
              <v-chip block color="error">
                F — 0–39
              </v-chip>
            </v-col>
          </v-row>
        </v-card>

        <!-- EXISTING RESULTS -->
        <v-card
          class="mt-6 pa-6"
          elevation="3"
          rounded="xl"
        >
          <div class="section-title mb-5">
            <v-icon
              class="mr-3"
              color="primary"
            >
              mdi-format-list-bulleted
            </v-icon>

            <div>
              <h2 class="text-h6 font-weight-bold">
                Existing Results
              </h2>

              <p class="text-body-2 text-medium-emphasis mt-1">
                Search and manage results already entered.
              </p>
            </div>
          </div>

          <v-divider class="mb-6" />

          <!-- SEARCH -->
          <v-text-field
            v-model="searchAdmission"
            class="mb-5"
            clearable
            label="Search by Admission Number"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
          />

          <!-- LOADING -->
          <div
            v-if="loadingResults"
            class="text-center py-8"
          >
            <v-progress-circular
              color="primary"
              indeterminate
            />

            <p class="text-medium-emphasis mt-3">
              Loading results...
            </p>
          </div>

          <!-- NO RESULTS -->
          <v-alert
            v-else-if="filteredResults.length === 0"
            type="info"
            variant="tonal"
          >
            No results found.
          </v-alert>

          <!-- RESULTS TABLE -->
          <v-table
            v-else
            class="results-table"
          >
            <thead>
              <tr>
                <th>Admission No.</th>
                <th>Subject</th>
                <th>CA</th>
                <th>Exam</th>
                <th>Total</th>
                <th>Grade</th>
                <th>Term</th>
                <th>Session</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="result in filteredResults"
                :key="result.id"
              >
                <td>
                  {{ result.admission_number }}
                </td>

                <td class="font-weight-medium">
                  {{ result.subject }}
                </td>

                <td>
                  {{ result.ca_score }}
                </td>

                <td>
                  {{ result.exam_score }}
                </td>

                <td class="font-weight-bold">
                  {{ result.total_score }}
                </td>

                <td>
                  <v-chip
                    :color="getGradeColor(result.grade)"
                    size="small"
                  >
                    {{ result.grade }}
                  </v-chip>
                </td>

                <td>
                  {{ result.term }}
                </td>

                <td>
                  {{ result.session }}
                </td>

                <td>
                  <v-chip
                    :color="result.published ? 'success' : 'orange'"
                    size="small"
                  >
                    {{ result.published ? 'Published' : 'Unpublished' }}
                  </v-chip>
                </td>

                <!-- ACTIONS -->
                <td>
                  <div class="d-flex ga-2">

                    <!-- EDIT -->
                    <v-btn
                      color="primary"
                      icon="mdi-pencil"
                      size="small"
                      variant="tonal"
                      @click="editResult(result)"
                    />

                    <!-- DELETE -->
                    <v-btn
                      color="error"
                      icon="mdi-delete"
                      size="small"
                      variant="tonal"
                      @click="openDeleteDialog(result)"
                    />

                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card>

        <!-- DELETE CONFIRMATION DIALOG -->
        <v-dialog
          v-model="deleteDialog"
          max-width="450"
        >
          <v-card rounded="xl">

            <v-card-title class="text-h6 font-weight-bold pa-6">
              Delete Result?
            </v-card-title>

            <v-card-text class="px-6">

              <p>
                Are you sure you want to delete this result?
              </p>

              <div
                v-if="resultToDelete"
                class="mt-4 pa-4 bg-grey-lighten-4 rounded-lg"
              >
                <strong>
                  {{ resultToDelete.subject }}
                </strong>

                <br>

                Admission Number:
                {{ resultToDelete.admission_number }}

                <br>

                Total Score:
                {{ resultToDelete.total_score }}
              </div>

              <p class="text-error mt-4 mb-0">
                This action cannot be undone.
              </p>

            </v-card-text>

            <v-card-actions class="pa-6 pt-0">

              <v-spacer />

              <!-- CANCEL -->
              <v-btn
                :disabled="deleting"
                variant="outlined"
                @click="closeDeleteDialog"
              >
                Cancel
              </v-btn>

              <!-- CONFIRM DELETE -->
              <v-btn
                color="error"
                :loading="deleting"
                prepend-icon="mdi-delete"
                @click="confirmDelete"
              >
                Delete
              </v-btn>

            </v-card-actions>

          </v-card>
        </v-dialog>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import {
    computed,
    onMounted,
    reactive,
    ref,
  } from 'vue'

  import { supabase } from '@/lib/supabaseClient'

  const saving = ref(false)
  const loadingResults = ref(false)
  const deleting = ref(false)

  const deleteDialog = ref(false)
  const resultToDelete = ref(null)

  const successMessage = ref('')
  const errorMessage = ref('')

  const searchAdmission = ref('')

  const results = ref([])

  const editingResult = ref(false)
  const editingResultId = ref(null)

  const terms = [
    'First Term',
    'Second Term',
    'Third Term',
  ]

  const sessions = [
    '2026/2027',
    '2027/2028',
    '2028/2029',
  ]

  const form = reactive({
    admissionNumber: '',
    subject: '',
    caScore: 0,
    examScore: 0,
    term: 'First Term',
    session: '2026/2027',
    published: false,
  })

  const totalScore = computed(() => {
    return Number(form.caScore || 0)
      + Number(form.examScore || 0)
  })

  const grade = computed(() => {
    const score = totalScore.value

    if (score >= 70) return 'A'
    if (score >= 60) return 'B'
    if (score >= 50) return 'C'
    if (score >= 45) return 'D'
    if (score >= 40) return 'E'

    return 'F'
  })

  const filteredResults = computed(() => {
    const search = searchAdmission.value
      .trim()
      .toLowerCase()

    if (!search) {
      return results.value
    }

    return results.value.filter(result =>
      result.admission_number
        ?.toLowerCase()
        .includes(search),
    )
  })

  onMounted(async () => {
    const { data, error } = await supabase.auth.getUser()

    if (error) {
      console.error('AUTH ERROR:', error)
    } else {
      console.log('CURRENT USER:', data.user)
      console.log('CURRENT EMAIL:', data.user?.email)
    }

    await loadResults()
  })

  async function loadResults () {
    loadingResults.value = true

    try {
      const { data, error } = await supabase
        .from('results')
        .select(`
        id,
        admission_number,
        subject,
        ca_score,
        exam_score,
        total_score,
        grade,
        term,
        session,
        published
      `)
        .order('created_at', {
          ascending: false,
        })

      if (error) {
        throw error
      }

      results.value = data || []
    } catch (error) {
      console.error('Load results error:', error)

      errorMessage.value
        = error?.message || 'Unable to load results.'
    } finally {
      loadingResults.value = false
    }
  }

  async function saveResult () {
    successMessage.value = ''
    errorMessage.value = ''

    if (
      !form.admissionNumber.trim()
      || !form.subject.trim()
    ) {
      errorMessage.value
        = 'Please enter the admission number and subject.'
      return
    }

    if (
      Number(form.caScore) < 0
      || Number(form.caScore) > 40
    ) {
      errorMessage.value
        = 'CA score must be between 0 and 40.'
      return
    }

    if (
      Number(form.examScore) < 0
      || Number(form.examScore) > 60
    ) {
      errorMessage.value
        = 'Exam score must be between 0 and 60.'
      return
    }

    saving.value = true

    try {
      const { data: student, error: studentError }
        = await supabase
          .from('applications')
          .select('admission_number')
          .eq(
            'admission_number',
            form.admissionNumber.trim(),
          )
          .maybeSingle()

      if (studentError) {
        throw studentError
      }

      if (!student) {
        errorMessage.value
          = 'No student was found with that admission number.'
        return
      }

      const { error } = await supabase
        .from('results')
        .insert({
          admission_number:
            form.admissionNumber.trim(),

          subject:
            form.subject.trim(),

          ca_score:
            Number(form.caScore),

          exam_score:
            Number(form.examScore),

          grade:
            grade.value,

          term:
            form.term,

          session:
            form.session,

          published:
            form.published,
        })

      if (error) {
        throw error
      }

      successMessage.value
        = form.published
          ? 'Result saved and published successfully.'
          : 'Result saved successfully. It is not published yet.'

      resetForm()

      await loadResults()
    } catch (error) {
      console.error('Save result error:', error)

      errorMessage.value
        = error?.message || 'Unable to save the result.'
    } finally {
      saving.value = false
    }
  }

  async function updateResult () {
    successMessage.value = ''
    errorMessage.value = ''

    if (!editingResultId.value) {
      errorMessage.value
        = 'No result selected for editing.'
      return
    }

    if (!form.subject.trim()) {
      errorMessage.value
        = 'Please enter the subject.'
      return
    }

    if (
      Number(form.caScore) < 0
      || Number(form.caScore) > 40
    ) {
      errorMessage.value
        = 'CA score must be between 0 and 40.'
      return
    }

    if (
      Number(form.examScore) < 0
      || Number(form.examScore) > 60
    ) {
      errorMessage.value
        = 'Exam score must be between 0 and 60.'
      return
    }

    saving.value = true

    try {
      const { error } = await supabase
        .from('results')
        .update({
          subject:
            form.subject.trim(),

          ca_score:
            Number(form.caScore),

          exam_score:
            Number(form.examScore),

          grade:
            grade.value,

          term:
            form.term,

          session:
            form.session,

          published:
            form.published,
        })
        .eq('id', editingResultId.value)

      if (error) {
        throw error
      }

      successMessage.value
        = 'Result updated successfully.'

      resetForm()

      await loadResults()
    } catch (error) {
      console.error('Update result error:', error)

      errorMessage.value
        = error?.message || 'Unable to update the result.'
    } finally {
      saving.value = false
    }
  }

  function openDeleteDialog (result) {
    successMessage.value = ''
    errorMessage.value = ''

    resultToDelete.value = result
    deleteDialog.value = true
  }

  function closeDeleteDialog () {
    if (deleting.value) return

    deleteDialog.value = false
    resultToDelete.value = null
  }

  async function confirmDelete () {
    if (!resultToDelete.value) {
      return
    }

    deleting.value = true
    successMessage.value = ''
    errorMessage.value = ''

    const resultId = resultToDelete.value.id

    try {
      const { error } = await supabase
        .from('results')
        .delete()
        .eq('id', resultId)

      if (error) {
        throw error
      }

      if (editingResultId.value === resultId) {
        resetForm()
      }

      deleteDialog.value = false
      resultToDelete.value = null

      successMessage.value
        = 'Result deleted successfully.'

      await loadResults()
    } catch (error) {
      console.error(
        'Delete result error:',
        error,
      )

      errorMessage.value
        = error?.message || 'Unable to delete the result.'
    } finally {
      deleting.value = false
    }
  }

  function editResult (result) {
    successMessage.value = ''
    errorMessage.value = ''

    editingResult.value = true
    editingResultId.value = result.id

    form.admissionNumber
      = result.admission_number

    form.subject
      = result.subject

    form.caScore
      = Number(result.ca_score || 0)

    form.examScore
      = Number(result.exam_score || 0)

    form.term
      = result.term

    form.session
      = result.session

    form.published
      = result.published

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  function resetForm () {
    editingResult.value = false
    editingResultId.value = null

    form.admissionNumber = ''
    form.subject = ''
    form.caScore = 0
    form.examScore = 0
    form.term = 'First Term'
    form.session = '2026/2027'
    form.published = false
  }

  function getGradeColor (resultGrade) {
    if (resultGrade === 'A') return 'success'
    if (resultGrade === 'B') return 'primary'
    if (resultGrade === 'C') return 'primary'
    if (resultGrade === 'D') return 'orange'
    if (resultGrade === 'E') return 'orange'

    return 'error'
  }
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

.section-title {
  display: flex;
  align-items: center;
}

.results-table {
  white-space: nowrap;
}
</style>
