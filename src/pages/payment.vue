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
        Payment History
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon="mdi-arrow-left"
        variant="text"
        @click="goBack"
      />
    </v-app-bar>

    <v-main class="payment-background">
      <v-container class="py-8">

        <!-- PAGE HEADER -->
        <div class="mb-8">
          <p class="text-medium-emphasis">
            Student Portal
          </p>

          <h1 class="text-h4 font-weight-bold">
            Payment History
          </h1>

          <p class="text-body-1 text-medium-emphasis mt-2">
            View your school payment records and transaction status.
          </p>
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
            Loading your payments...
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

          <!-- STUDENT INFO -->
          <v-card
            class="mb-6 pa-5"
            elevation="3"
            rounded="xl"
          >
            <div class="d-flex align-center flex-wrap">
              <v-avatar
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
              </div>
            </div>
          </v-card>

          <!-- PAYMENT SUMMARY -->
          <v-row class="mb-4">
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
                  mdi-cash-multiple
                </v-icon>

                <div class="text-h5 font-weight-bold mt-4">
                  {{ formatAmount(totalAmount) }}
                </div>

                <div class="text-medium-emphasis">
                  Total Payments
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
                  mdi-check-circle
                </v-icon>

                <div class="text-h5 font-weight-bold mt-4">
                  {{ successfulPayments }}
                </div>

                <div class="text-medium-emphasis">
                  Successful Payments
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
                  mdi-clock-outline
                </v-icon>

                <div class="text-h5 font-weight-bold mt-4">
                  {{ pendingPayments }}
                </div>

                <div class="text-medium-emphasis">
                  Pending Payments
                </div>
              </v-card>
            </v-col>
          </v-row>

          <!-- PAYMENT TABLE -->
          <v-card
            elevation="3"
            rounded="xl"
          >
            <v-card-title class="pa-6">
              <div class="d-flex align-center">
                <v-icon
                  class="mr-3"
                  color="primary"
                >
                  mdi-receipt-text
                </v-icon>

                <span class="text-h6 font-weight-bold">
                  Transactions
                </span>
              </div>
            </v-card-title>

            <v-divider />

            <!-- NO PAYMENTS -->
            <div
              v-if="payments.length === 0"
              class="empty-state"
            >
              <v-icon
                color="primary"
                size="65"
              >
                mdi-receipt-text-outline
              </v-icon>

              <h3 class="text-h6 font-weight-bold mt-4">
                No payments yet
              </h3>

              <p class="text-medium-emphasis mt-2">
                Your payment transactions will appear here.
              </p>
            </div>

            <!-- PAYMENTS -->
            <v-table
              v-else
              hover
            >
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Purpose</th>
                  <th>Amount</th>
                  <th>Reference</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="payment in payments"
                  :key="payment.id"
                >
                  <td>
                    {{ formatDate(payment.created_at) }}
                  </td>

                  <td>
                    {{ payment.payment_purpose || 'Payment' }}
                  </td>

                  <td class="font-weight-bold">
                    {{ formatAmount(payment.amount) }}
                  </td>

                  <td>
                    {{ payment.payment_reference || '—' }}
                  </td>

                  <td>
                    <v-chip
                      :color="statusColor(payment.payment_status)"
                      size="small"
                    >
                      {{ payment.payment_status || 'Pending' }}
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </v-table>
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

  const studentName = ref('Student')
  const admissionNumber = ref('')
  const payments = ref([])

  const totalAmount = computed(() => {
    return payments.value.reduce((total, payment) => {
      return total + Number(payment.amount || 0)
    }, 0)
  })

  const successfulPayments = computed(() => {
    return payments.value.filter(payment => {
      const status
        = (payment.payment_status || '').toLowerCase()

      return (
        status === 'successful'
        || status === 'success'
        || status === 'completed'
      )
    }).length
  })

  const pendingPayments = computed(() => {
    return payments.value.filter(payment => {
      const status
        = (payment.payment_status || '').toLowerCase()

      return status === 'pending'
    }).length
  })

  function formatAmount (amount) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(amount || 0))
  }

  function formatDate (date) {
    if (!date) {
      return '—'
    }

    return new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  function statusColor (status) {
    const value = (status || '').toLowerCase()

    if (
      value === 'successful'
      || value === 'success'
      || value === 'completed'
    ) {
      return 'success'
    }

    if (value === 'failed' || value === 'cancelled') {
      return 'error'
    }

    return 'orange'
  }

  async function loadPayments () {
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

      // Get the student's application
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

      // Get payments using admission number
      const { data: paymentData, error: paymentError }
        = await supabase
          .from('payments')
          .select(`
            id,
            receipt_number,
            payment_reference,
            student_name,
            admission_number,
            student_class,
            payment_purpose,
            amount,
            payment_status,
            created_at
          `)
          .eq('admission_number', student.admission_number)
          .order('created_at', { ascending: false })

      if (paymentError) {
        throw paymentError
      }

      payments.value = paymentData || []
    } catch (error) {
      console.error('Payment history error:', error)

      errorMessage.value
        = error?.message || 'Unable to load your payment history.'
    } finally {
      loading.value = false
    }
  }

  function goBack () {
    router.push('/studentportal')
  }

  onMounted(() => {
    loadPayments()
  })
</script>

<style scoped>
.payment-background {
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

.empty-state {
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
}
</style>
