<template>
  <v-app>
    <v-app-bar
      class="no-print"
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
        Academic Results
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon="mdi-arrow-left"
        variant="text"
        @click="goBack"
      />
    </v-app-bar>

    <v-main class="results-background">
      <v-container class="py-8">

        <!-- PAGE HEADER -->
        <div class="mb-8 no-print">
          <p class="text-medium-emphasis">
            Student Portal
          </p>

          <h1 class="text-h4 font-weight-bold">
            Academic Results
          </h1>

          <p class="text-body-1 text-medium-emphasis mt-2">
            View your published academic results.
          </p>
        </div>

        <!-- PRINTABLE RESULT HEADER -->
        <div class="print-only print-header">
          <img
            alt="Bluefield College"
            class="print-logo"
            src="/bluefield-logo.png"
          >

          <h1>
            BLUEFIELD COLLEGE
          </h1>

          <h2>
            STUDENT RESULT STATEMENT
          </h2>

          <div class="print-line" />
        </div>

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
            Loading your results...
          </p>
        </div>

        <template v-else>

          <!-- ERROR -->
          <v-alert
            v-if="errorMessage"
            class="mb-6 no-print"
            type="error"
            variant="tonal"
          >
            {{ errorMessage }}
          </v-alert>

          <!-- STUDENT INFO -->
          <v-card
            class="mb-6 pa-5 student-info-card"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-center flex-wrap">
              <v-avatar
                class="no-print"
                color="primary"
                size="55"
              >
                <v-icon size="30">
                  mdi-account-school
                </v-icon>
              </v-avatar>

              <div class="ml-4">
                <div class="text-h6 font-weight-bold">
                  {{ studentName }}
                </div>

                <div class="text-body-2 text-medium-emphasis">
                  Admission Number:
                  <strong>{{ admissionNumber }}</strong>
                </div>

                <div class="print-only print-student-details">
                  <strong>Student Name:</strong>
                  {{ studentName }}
                  <br>

                  <strong>Admission Number:</strong>
                  {{ admissionNumber }}
                </div>
              </div>
            </div>
          </v-card>

          <!-- NO RESULTS AT ALL -->
          <v-card
            v-if="results.length === 0"
            class="pa-10 text-center"
            elevation="3"
            rounded="xl"
          >
            <v-icon
              color="primary"
              size="70"
            >
              mdi-school-outline
            </v-icon>

            <h2 class="text-h6 font-weight-bold mt-5">
              No Results Available
            </h2>

            <p class="text-body-2 text-medium-emphasis mt-2">
              Your results will appear here once they have been
              uploaded and published by the school.
            </p>
          </v-card>

          <!-- RESULTS EXIST -->
          <template v-else>

            <!-- FILTERS -->
            <v-card
              class="mb-6 pa-5 no-print"
              elevation="3"
              rounded="xl"
            >
              <div class="d-flex align-center mb-4">
                <v-avatar
                  color="primary"
                  size="45"
                  variant="tonal"
                >
                  <v-icon>
                    mdi-filter-variant
                  </v-icon>
                </v-avatar>

                <div class="ml-4">
                  <div class="text-h6 font-weight-bold">
                    Select Results
                  </div>

                  <div class="text-body-2 text-medium-emphasis">
                    Choose the academic session and term you want to view.
                  </div>
                </div>
              </div>

              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-select
                    v-model="selectedSession"
                    hide-details
                    :items="sessionOptions"
                    label="Academic Session"
                    prepend-inner-icon="mdi-calendar"
                    rounded="lg"
                    variant="outlined"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-select
                    v-model="selectedTerm"
                    hide-details
                    :items="termOptions"
                    label="Term"
                    prepend-inner-icon="mdi-school"
                    rounded="lg"
                    variant="outlined"
                  />
                </v-col>
              </v-row>
            </v-card>

            <!-- PRINT SESSION / TERM -->
            <div
              v-if="filteredResults.length > 0"
              class="print-selection print-only"
            >
              <strong>Academic Session:</strong>
              {{ selectedSession }}

              <br>

              <strong>Term:</strong>
              {{ selectedTerm }}
            </div>

            <!-- NO RESULTS FOR SELECTED FILTER -->
            <v-card
              v-if="filteredResults.length === 0"
              class="pa-10 text-center"
              elevation="3"
              rounded="xl"
            >
              <v-icon
                color="primary"
                size="70"
              >
                mdi-file-search-outline
              </v-icon>

              <h2 class="text-h6 font-weight-bold mt-5">
                No Results for This Selection
              </h2>

              <p class="text-body-2 text-medium-emphasis mt-2">
                There are no published results for the selected
                academic session and term.
              </p>
            </v-card>

            <!-- FILTERED RESULTS -->
            <template v-else>

              <!-- SUMMARY -->
              <v-row class="mb-5">
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-card
                    class="summary-card pa-5"
                    elevation="3"
                    rounded="xl"
                  >
                    <v-icon
                      color="primary"
                      size="38"
                    >
                      mdi-book-open-page-variant
                    </v-icon>

                    <div class="text-h5 font-weight-bold mt-4">
                      {{ filteredResults.length }}
                    </div>

                    <div class="text-medium-emphasis">
                      Subjects
                    </div>
                  </v-card>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-card
                    class="summary-card pa-5"
                    elevation="3"
                    rounded="xl"
                  >
                    <v-icon
                      color="success"
                      size="38"
                    >
                      mdi-chart-line
                    </v-icon>

                    <div class="text-h5 font-weight-bold mt-4">
                      {{ averageScore }}%
                    </div>

                    <div class="text-medium-emphasis">
                      Average Score
                    </div>
                  </v-card>
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-card
                    class="summary-card pa-5"
                    elevation="3"
                    rounded="xl"
                  >
                    <v-icon
                      color="orange"
                      size="38"
                    >
                      mdi-trophy
                    </v-icon>

                    <div class="text-h5 font-weight-bold mt-4">
                      {{ passedSubjects }}
                    </div>

                    <div class="text-medium-emphasis">
                      Passed Subjects
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <!-- PRINT BUTTON -->
              <div class="d-flex justify-end mb-5 no-print">
                <v-btn
                  color="primary"
                  elevation="2"
                  prepend-icon="mdi-printer"
                  rounded="lg"
                  size="large"
                  @click="printResults"
                >
                  Print Result
                </v-btn>
              </div>

              <!-- RESULT TABLE -->
              <v-card
                class="result-card"
                elevation="3"
                rounded="xl"
              >
                <v-card-title class="pa-6">
                  <div class="d-flex align-center">
                    <v-icon
                      class="mr-3 no-print"
                      color="primary"
                    >
                      mdi-file-chart
                    </v-icon>

                    <div>
                      <div class="text-h6 font-weight-bold">
                        Published Results
                      </div>

                      <div class="text-body-2 text-medium-emphasis">
                        {{ selectedTerm }} • {{ selectedSession }}
                      </div>
                    </div>
                  </div>
                </v-card-title>

                <v-divider />

                <v-table hover>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>CA</th>
                      <th>Exam</th>
                      <th>Total</th>
                      <th>Grade</th>

                      <th class="no-print">
                        Term
                      </th>

                      <th class="no-print">
                        Session
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="result in filteredResults"
                      :key="result.id"
                    >
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
                          :color="gradeColor(result.grade)"
                          size="small"
                        >
                          {{ result.grade || '—' }}
                        </v-chip>
                      </td>

                      <td class="no-print">
                        {{ result.term }}
                      </td>

                      <td class="no-print">
                        {{ result.session }}
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>

              <!-- PRINT SUMMARY -->
              <div class="print-only print-summary">
                <div>
                  <strong>Average Score:</strong>
                  {{ averageScore }}%
                </div>

                <div>
                  <strong>Subjects Passed:</strong>
                  {{ passedSubjects }}
                </div>

                <div>
                  <strong>Total Subjects:</strong>
                  {{ filteredResults.length }}
                </div>
              </div>

              <!-- PRINT FOOTER -->
              <div class="print-only print-footer">
                <div class="signature-section">
                  <div class="signature-line" />
                  <p>Class Teacher</p>
                </div>

                <div class="signature-section">
                  <div class="signature-line" />
                  <p>Principal</p>
                </div>
              </div>

            </template>
          </template>
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

  const studentName = ref('Student')
  const admissionNumber = ref('')
  const results = ref([])

  const selectedSession = ref('')
  const selectedTerm = ref('')

  // Available academic sessions
  const sessionOptions = computed(() => {
    const sessions = [
      ...new Set(
        results.value
          .map(result => result.session)
          .filter(Boolean),
      ),
    ]

    return sessions.sort().reverse()
  })

  // Available terms
  const termOptions = computed(() => {
    const terms = [
      ...new Set(
        results.value
          .map(result => result.term)
          .filter(Boolean),
      ),
    ]

    const order = {
      'First Term': 1,
      'Second Term': 2,
      'Third Term': 3,
    }

    return terms.sort((a, b) => {
      return (order[a] || 99) - (order[b] || 99)
    })
  })

  // Results matching selected session and term
  const filteredResults = computed(() => {
    return results.value.filter(result => {
      const sessionMatches
        = !selectedSession.value
          || result.session === selectedSession.value

      const termMatches
        = !selectedTerm.value
          || result.term === selectedTerm.value

      return sessionMatches && termMatches
    })
  })

  // Average score
  const averageScore = computed(() => {
    if (filteredResults.value.length === 0) {
      return 0
    }

    const total = filteredResults.value.reduce((sum, result) => {
      return sum + Number(result.total_score || 0)
    }, 0)

    return Math.round(
      (total / filteredResults.value.length) * 100,
    ) / 100
  })

  // Number of passed subjects
  const passedSubjects = computed(() => {
    return filteredResults.value.filter(result => {
      return Number(result.total_score || 0) >= 40
    }).length
  })

  function gradeColor (grade) {
    const value = (grade || '').toUpperCase()

    if (value === 'A') {
      return 'success'
    }

    if (value === 'B' || value === 'C') {
      return 'primary'
    }

    if (value === 'D' || value === 'E') {
      return 'orange'
    }

    if (value === 'F') {
      return 'error'
    }

    return 'grey'
  }

  async function loadResults () {
    loading.value = true
    errorMessage.value = ''

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError || !user) {
        router.push('/student-login')
        return
      }

      // Find the logged-in student's application
      const { data: student, error: studentError }
        = await supabase
          .from('applications')
          .select(`
            first_name,
            last_name,
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

      admissionNumber.value
        = student.admission_number || ''

      // Get ONLY published results for this student
      const { data: resultData, error: resultError }
        = await supabase
          .from('results')
          .select(`
            id,
            subject,
            ca_score,
            exam_score,
            total_score,
            grade,
            term,
            session
          `)
          .eq('admission_number', student.admission_number)
          .eq('published', true)
          .order('subject', { ascending: true })

      if (resultError) {
        throw resultError
      }

      results.value = resultData || []

      // Automatically select the latest session
      if (sessionOptions.value.length > 0) {
        selectedSession.value = sessionOptions.value[0]
      }

      // Automatically select the first available term
      if (termOptions.value.length > 0) {
        selectedTerm.value = termOptions.value[0]
      }
    } catch (error) {
      console.error('Results loading error:', error)

      errorMessage.value
        = error?.message || 'Unable to load your results.'
    } finally {
      loading.value = false
    }
  }

  function printResults () {
    const printWindow = window.open('', '_blank', 'width=900,height=700')

    if (!printWindow) {
      errorMessage.value = 'Please allow pop-ups to print your result.'
      return
    }

    const rows = filteredResults.value.map(result => {
      return `
      <tr>
        <td>${result.subject || ''}</td>
        <td>${result.ca_score ?? 0}</td>
        <td>${result.exam_score ?? 0}</td>
        <td><strong>${result.total_score ?? 0}</strong></td>
        <td>${result.grade || '—'}</td>
      </tr>
    `
    }).join('')

    printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Student Result Statement</title>

        <style>
          * {
            box-sizing: border-box;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 30px;
            color: #000;
            background: #fff;
          }

          .header {
            text-align: center;
            margin-bottom: 25px;
          }

          .logo {
            width: 90px;
            height: 90px;
            object-fit: contain;
          }

          .school-name {
            font-size: 26px;
            font-weight: bold;
            margin-top: 10px;
          }

          .title {
            font-size: 20px;
            margin-top: 8px;
          }

          .line {
            border-bottom: 2px solid #000;
            margin: 20px 0;
          }

          .student-info {
            border: 1px solid #000;
            padding: 15px;
            margin-bottom: 20px;
          }

          .student-info p {
            margin: 6px 0;
            font-size: 15px;
          }

          .session {
            margin-bottom: 20px;
            font-size: 15px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
          }

          th,
          td {
            border: 1px solid #000;
            padding: 10px;
            text-align: left;
          }

          th {
            font-weight: bold;
            background: #eee;
          }

          .summary {
            display: flex;
            justify-content: space-between;
            border: 1px solid #000;
            padding: 15px;
            margin-top: 25px;
          }

          .summary div {
            text-align: center;
          }

          .summary strong {
            display: block;
            margin-bottom: 5px;
          }

          .signatures {
            display: flex;
            justify-content: space-between;
            margin-top: 90px;
          }

          .signature {
            width: 200px;
            text-align: center;
          }

          .signature-line {
            border-top: 1px solid #000;
            margin-bottom: 8px;
          }

          @page {
            size: A4;
            margin: 15mm;
          }
        </style>
      </head>

      <body>

        <div class="header">
          <img
            src="${window.location.origin}/bluefield-logo.png"
            class="logo"
            alt="Bluefield College"
          >

          <div class="school-name">
            BLUEFIELD COLLEGE
          </div>

          <div class="title">
            STUDENT RESULT STATEMENT
          </div>

          <div class="line"></div>
        </div>

        <div class="student-info">
          <p>
            <strong>Student Name:</strong>
            ${studentName.value}
          </p>

          <p>
            <strong>Admission Number:</strong>
            ${admissionNumber.value}
          </p>
        </div>

        <div class="session">
          <strong>Academic Session:</strong>
          ${selectedSession.value}
          <br>

          <strong>Term:</strong>
          ${selectedTerm.value}
        </div>

        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>CA</th>
              <th>Exam</th>
              <th>Total</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>
        </table>

        <div class="summary">
          <div>
            <strong>Average Score</strong>
            ${averageScore.value}%
          </div>

          <div>
            <strong>Subjects Passed</strong>
            ${passedSubjects.value}
          </div>

          <div>
            <strong>Total Subjects</strong>
            ${filteredResults.value.length}
          </div>
        </div>

        <div class="signatures">
          <div class="signature">
            <div class="signature-line"></div>
            Class Teacher
          </div>

          <div class="signature">
            <div class="signature-line"></div>
            Principal
          </div>
        </div>

      </body>
    </html>
  `)

    printWindow.document.close()

    printWindow.focus()

    setTimeout(() => {
      printWindow.print()
    }, 500)
  }

  function goBack () {
    router.push('/studentportal')
  }

  onMounted(() => {
    loadResults()
  })
</script>

<style scoped>
.results-background {
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

.summary-card {
  height: 100%;
}

/* -----------------------------
   PRINT STYLES
----------------------------- */

.print-only {
  display: none;
}

.print-header {
  text-align: center;
}

.print-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.print-header h1 {
  margin: 10px 0 5px;
  font-size: 24px;
  color: #000;
}

.print-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #000;
}

.print-line {
  margin: 20px 0;
  border-bottom: 2px solid #000;
}

.print-student-details {
  margin-top: 12px;
  color: #000;
}

.print-selection {
  margin-bottom: 20px;
  font-size: 15px;
  color: #000;
}

.print-summary {
  display: none;
}

.print-footer {
  display: none;
}

@media print {
  /* Hide everything marked no-print */
  .no-print {
    display: none !important;
  }

  /* Show print-only content */
  .print-only {
    display: block !important;
  }

  .print-footer {
    display: flex !important;
  }

  /* Remove page background */
  .results-background {
    min-height: auto !important;
    background: white !important;
  }

  /* Remove Vuetify container spacing */
  .v-container {
    max-width: none !important;
    padding: 0 !important;
  }

  /* Remove card shadows */
  .v-card {
    box-shadow: none !important;
  }

  /* Student information */
  .student-info-card {
    border: 1px solid #ccc !important;
    border-radius: 0 !important;
    padding: 15px !important;
    margin-bottom: 20px !important;
  }

  /* Result table */
  .result-card {
    border: 1px solid #ccc !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }

  .result-card .v-card-title {
    padding: 15px !important;
  }

  .v-table {
    width: 100% !important;
  }

  .v-table table {
    width: 100% !important;
    border-collapse: collapse !important;
  }

  .v-table th,
  .v-table td {
    border: 1px solid #ccc !important;
    padding: 8px !important;
    color: #000 !important;
  }

  .v-table th {
    font-weight: bold !important;
    background: #f1f1f1 !important;
  }

  /* Make grade chips print as normal text */
  .v-chip {
    color: #000 !important;
    background: transparent !important;
    border: none !important;
  }

  /* Summary information */
  .print-summary {
    display: flex !important;
    justify-content: space-between;
    margin-top: 25px;
    padding: 15px;
    border: 1px solid #ccc;
    color: #000;
    font-size: 14px;
  }

  /* Signature section */
  .print-footer {
    justify-content: space-between !important;
    margin-top: 80px;
    color: #000;
  }

  .signature-section {
    width: 180px;
    text-align: center;
  }

  .signature-line {
    border-bottom: 1px solid #000;
    margin-bottom: 8px;
  }

  .print-footer p {
    margin: 0;
  }

  /* Keep result together when possible */
  .result-card {
    break-inside: avoid;
  }

  /* A4 paper */
  @page {
    size: A4;
    margin: 15mm;
  }
}
</style>
