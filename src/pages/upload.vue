<template>
  <v-card class="mx-auto">
    <!-- NAVBAR -->
    <v-app-bar color="info" density="compact" height="100">
      <template #prepend>
        <img
          alt="Bluefield College Logo"
          class="logo"
          height="100"
          src="/bluefield-logo.png"
          width="100"
        >
      </template>

      <v-spacer />

      <div class="d-flex justify-center" w-100>
        <!-- Update -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              Update
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/schooloutings">
                School Outings
              </v-btn>

              <v-btn class="mb-2" to="/academicevents">
                Academic Event
              </v-btn>

              <v-btn class="mb-2" to="/schactivity">
                School Activities
              </v-btn>
            </div>
          </v-list>
        </v-menu>

        <!-- About Us -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              About Us
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/whyus">
                Why Bluefiled College
              </v-btn>

              <v-btn class="mb-2" to="/strategy">
                Strategy 2030
              </v-btn>

              <v-btn class="mb-2" to="/philosophy">
                Philosophy
              </v-btn>

              <v-btn class="mb-2" to="/vandm">
                Our Vision and Mision
              </v-btn>

              <v-btn class="mb-2" to="/aboutus">
                About Bluefield College
              </v-btn>
            </div>
          </v-list>
        </v-menu>

        <!-- Admissions -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              Admissions
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/admission">
                Admission Requirements
              </v-btn>

              <v-btn class="mb-2" to="/tuition">
                Tuition & Fees
              </v-btn>
            </div>
          </v-list>
        </v-menu>

        <!-- Administration -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              Administration
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/administraoff">
                Administrative Offices
              </v-btn>

              <v-btn class="mb-2" to="/staff">
                Department & Staff
              </v-btn>

              <v-btn class="mb-2" to="/calendar">
                Academic Calendar
              </v-btn>

              <v-btn class="mb-2" to="/Contact">
                Contact Us
              </v-btn>
            </div>
          </v-list>
        </v-menu>

        <!-- School Services -->
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              School Services
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/upload">
                Make Payment
              </v-btn>

              <v-btn class="mb-2" to="/services">
                Services
              </v-btn>
            </div>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <!-- MAIN CONTENT -->
    <v-main>
      <v-container class="py-10">

        <!-- PAYMENT FORM -->
        <v-card
          v-if="!paymentGenerated"
          class="mx-auto pa-8"
          elevation="5"
          max-width="850"
        >
          <div class="text-center mb-8">
            <v-icon
              color="primary"
              size="60"
            >
              mdi-credit-card-outline
            </v-icon>

            <h1 class="text-h4 font-weight-bold mt-3">
              Make a Payment
            </h1>

            <p class="text-medium-emphasis mt-2">
              Bluefield College Payment Portal
            </p>
          </div>

          <v-alert
            class="mb-6"
            type="info"
            variant="tonal"
          >
            This is currently a demo payment system.
            No real money will be charged.
          </v-alert>

          <v-divider class="mb-6" />

          <h3 class="text-h6 mb-4">
            Student Information
          </h3>

          <!-- Student Name -->
          <v-text-field
            v-model="studentName"
            :error-messages="studentNameError"
            label="Student Name"
            prepend-inner-icon="mdi-account"
            required
          />

          <!-- Email -->
          <v-text-field
            v-model="email"
            :error-messages="emailError"
            label="Email Address"
            prepend-inner-icon="mdi-email"
            required
            type="email"
          />
          <!-- Admission Number -->
          <v-text-field
            v-model="admissionNumber"
            :error-messages="admissionNumberError"
            inputmode="numeric"
            label="Admission Number"
            prepend-inner-icon="mdi-card-account-details"
            required
            @input="onlyNumbers"
          />

          <!-- Class -->
          <v-select
            v-model="studentClass"
            :error-messages="studentClassError"
            :items="classes"
            label="Class"
            prepend-inner-icon="mdi-school"
            required
          />

          <v-divider class="my-6" />

          <h3 class="text-h6 mb-4">
            Payment Information
          </h3>

          <!-- Purpose -->
          <v-select
            v-model="paymentPurpose"
            :error-messages="paymentPurposeError"
            :items="paymentPurposes"
            label="Payment Purpose"
            prepend-inner-icon="mdi-format-list-bulleted"
            required
          />

          <!-- Tuition amount -->
          <v-card
            v-if="paymentPurpose === 'Tuition Fees' && tuitionAmount"
            class="pa-5 mb-4"
            color="primary"
            variant="tonal"
          >
            <div class="d-flex justify-space-between align-center">
              <div>
                <div class="text-body-2">
                  Tuition for {{ studentClass }}
                </div>

                <div class="text-h5 font-weight-bold">
                  {{ formatMoney(tuitionAmount) }}
                </div>
              </div>

              <v-icon size="45">
                mdi-school
              </v-icon>
            </div>
          </v-card>

          <!-- Other payment amount -->
          <v-text-field
            v-if="paymentPurpose && paymentPurpose !== 'Tuition Fees'"
            v-model="otherAmount"
            :error-messages="amountError"
            inputmode="numeric"
            label="Amount"
            prefix="₦"
            prepend-inner-icon="mdi-cash"
            required
            type="number"
          />

          <!-- Generate Payment -->
          <v-btn
            block
            class="mt-5"
            color="primary"
            size="large"
            @click="generatePayment"
          >
            <v-icon start>
              mdi-receipt-text
            </v-icon>

            Generate Payment
          </v-btn>

          <!-- Clear -->
          <v-btn
            block
            class="mt-3"
            color="red"
            variant="outlined"
            @click="clearForm"
          >
            Clear
          </v-btn>
        </v-card>

        <!-- PAYMENT SUMMARY -->
        <v-card
          v-if="paymentGenerated && !receiptGenerated"
          class="mx-auto pa-8"
          elevation="5"
          max-width="700"
        >
          <div class="text-center mb-6">
            <v-icon
              color="primary"
              size="65"
            >
              mdi-file-document-check-outline
            </v-icon>

            <h1 class="text-h4 font-weight-bold mt-3">
              Payment Summary
            </h1>

            <p class="text-medium-emphasis">
              Please review your payment before confirming.
            </p>
          </div>

          <v-list lines="two">
            <v-list-item
              :subtitle="studentName"
              title="Student Name"
            />

            <v-list-item
              :subtitle="admissionNumber"
              title="Admission Number"
            />

            <v-list-item
              :subtitle="email"
              title="Email Address"
            />

            <v-list-item
              :subtitle="paymentPurpose"
              title="Payment Purpose"
            />

            <v-list-item
              :subtitle="formatMoney(finalAmount)"
              title="Amount"
            />
          </v-list>

          <v-divider class="my-5" />

          <div class="text-center">
            <p class="text-body-2">
              Amount to Pay
            </p>

            <div class="text-h3 font-weight-bold text-primary">
              {{ formatMoney(finalAmount) }}
            </div>
          </div>

          <v-btn
            block
            class="mt-7"
            color="success"
            size="large"
            @click="confirmPayment"
          >
            <v-icon start>
              mdi-check-circle
            </v-icon>

            Confirm Demo Payment
          </v-btn>

          <v-btn
            block
            class="mt-3"
            variant="outlined"
            @click="paymentGenerated = false"
          >
            Go Back
          </v-btn>
        </v-card>

        <!-- RECEIPT -->
        <div
          v-if="receiptGenerated"
          id="receipt"
          class="receipt-wrapper"
        >
          <v-card
            class="receipt-card mx-auto"
            elevation="8"
            max-width="800"
          >
            <!-- Receipt Header -->
            <div class="receipt-header text-center pa-8">
              <img
                alt="Bluefield College Logo"
                class="receipt-logo mb-3"
                src="/bluefield-logo.png"
              >

              <h1 class="text-h4 font-weight-bold">
                BLUEFIELD COLLEGE
              </h1>

              <p class="text-body-2">
                Excellence • Character • Knowledge
              </p>

              <v-chip
                class="mt-4"
                color="success"
                size="large"
              >
                <v-icon start>
                  mdi-check-circle
                </v-icon>

                PAYMENT SUCCESSFUL
              </v-chip>
            </div>

            <v-divider />

            <!-- Receipt Number -->
            <div class="pa-6">
              <div class="d-flex justify-space-between flex-wrap">
                <div>
                  <div class="text-caption text-medium-emphasis">
                    RECEIPT NUMBER
                  </div>

                  <div class="font-weight-bold">
                    {{ receiptNumber }}
                  </div>
                </div>

                <div class="text-right">
                  <div class="text-caption text-medium-emphasis">
                    DATE
                  </div>

                  <div class="font-weight-bold">
                    {{ paymentDate }}
                  </div>
                </div>
              </div>
            </div>

            <v-divider />

            <!-- Student Information -->
            <div class="pa-6">
              <h3 class="text-h6 mb-4">
                Student Information
              </h3>

              <v-row>
                <v-col cols="12" sm="6">
                  <div class="receipt-label">
                    Student Name
                  </div>

                  <div class="receipt-value">
                    {{ studentName }}
                  </div>
                </v-col>

                <v-col cols="12" sm="6">
                  <div class="receipt-label">
                    Admission Number
                  </div>

                  <div class="receipt-value">
                    {{ admissionNumber }}
                  </div>
                </v-col>

                <v-col cols="12" sm="6">
                  <div class="receipt-label">
                    Class
                  </div>

                  <div class="receipt-value">
                    {{ studentClass }}
                  </div>
                </v-col>
              </v-row>
            </div>

            <v-divider />

            <!-- Payment Details -->
            <div class="pa-6">
              <h3 class="text-h6 mb-4">
                Payment Details
              </h3>

              <v-table>
                <tbody>
                  <tr>
                    <td>Purpose</td>

                    <td class="text-right font-weight-bold">
                      {{ paymentPurpose }}
                    </td>
                  </tr>

                  <tr>
                    <td>Payment Method</td>

                    <td class="text-right">
                      Demo Payment
                    </td>
                  </tr>

                  <tr>
                    <td>Payment Reference</td>

                    <td class="text-right font-weight-bold">
                      {{ paymentReference }}
                    </td>
                  </tr>

                  <tr>
                    <td class="text-h6 font-weight-bold">
                      Amount Paid
                    </td>

                    <td class="text-right text-h5 font-weight-bold text-primary">
                      {{ formatMoney(finalAmount) }}
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </div>

            <!-- Paid Stamp -->
            <div class="text-center py-6">
              <div class="paid-stamp">
                PAID
              </div>
            </div>

            <v-divider />

            <!-- Footer -->
            <div class="text-center pa-6">
              <p class="mb-1 font-weight-bold">
                Thank you for your payment.
              </p>

              <p class="text-caption text-medium-emphasis">
                Please keep this receipt for your records.
              </p>
            </div>
          </v-card>

          <!-- Receipt Buttons -->
          <div class="receipt-actions text-center mt-6">
            <v-btn
              class="mr-2"
              color="primary"
              size="large"
              @click="printReceipt"
            >
              <v-icon start>
                mdi-printer
              </v-icon>

              Print / Save PDF
            </v-btn>

            <v-btn
              color="success"
              size="large"
              @click="newPayment"
            >
              <v-icon start>
                mdi-plus
              </v-icon>

              New Payment
            </v-btn>
          </div>
        </div>

        <!-- SUCCESS SNACKBAR -->
        <v-snackbar
          v-model="snackbar"
          color="green"
          timeout="5000"
        >
          🎉 Payment successful! Your receipt has been generated.
        </v-snackbar>

      </v-container>
    </v-main>
  </v-card>
</template>

<script setup>
  import { computed, ref } from 'vue'

  import { supabase } from '@/lib/supabaseClient'

  /* -----------------------------
   Student information
----------------------------- */

  const studentName = ref('')
  const admissionNumber = ref('')
  const studentClass = ref('')
  const email = ref('')

  /* -----------------------------
   Payment information
----------------------------- */

  const paymentPurpose = ref('')
  const otherAmount = ref('')

  /* -----------------------------
   Payment state
----------------------------- */

  const paymentGenerated = ref(false)
  const receiptGenerated = ref(false)
  const snackbar = ref(false)

  /* -----------------------------
   Messages
----------------------------- */

  const errorMessage = ref('')
  const successMessage = ref('')

  /* -----------------------------
   Receipt information
----------------------------- */

  const receiptNumber = ref('')
  const paymentReference = ref('')
  const paymentDate = ref('')

  /* -----------------------------
   Error messages
----------------------------- */

  const studentNameError = ref('')
  const admissionNumberError = ref('')
  const studentClassError = ref('')
  const paymentPurposeError = ref('')
  const amountError = ref('')
  const emailError = ref('')

  /* -----------------------------
   Classes + tuition fees
----------------------------- */

  const tuitionFees = {
    'Babies': 300_000,
    'Nursery 1': 500_000,
    'Nursery 2': 550_000,
    'Primary 1': 700_000,
    'Primary 2': 750_000,
    'Primary 3': 800_000,
    'Primary 4': 850_000,
    'Primary 5': 1_000_000,
    'Primary 6': 1_000_000,
    'JSS 1': 1_500_000,
    'JSS 2': 2_000_000,
    'JSS 3': 3_000_000,
    'SS 1': 5_000_000,
    'SS 2': 6_000_000,
    'SS 3': 10_000_000,
  }

  const classes = Object.keys(tuitionFees)

  const paymentPurposes = [
    'Tuition Fees',
    'Project Fees',
    'Practical Fees',
    'Registration',
    'Textbooks',
    'Uniform',
    'Transport',
    'Other',
  ]

  /* -----------------------------
   Automatically get tuition
----------------------------- */

  const tuitionAmount = computed(() => {
    if (
      paymentPurpose.value === 'Tuition Fees'
      && studentClass.value
    ) {
      return tuitionFees[studentClass.value]
    }

    return 0
  })

  /* -----------------------------
   Final payment amount
----------------------------- */

  const finalAmount = computed(() => {
    if (paymentPurpose.value === 'Tuition Fees') {
      return tuitionAmount.value
    }

    return Number(otherAmount.value) || 0
  })

  /* -----------------------------
   Format money
----------------------------- */

  function formatMoney (amount) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(amount)
  }

  /* -----------------------------
   Numbers only
----------------------------- */

  function onlyNumbers (event) {
    admissionNumber.value = event.target.value.replace(/\D/g, '')
  }

  /* -----------------------------
   Generate payment
----------------------------- */

  function generatePayment () {
    // Clear old errors
    studentNameError.value = ''
    admissionNumberError.value = ''
    studentClassError.value = ''
    paymentPurposeError.value = ''
    amountError.value = ''
    errorMessage.value = ''
    emailError.value = ''

    let valid = true

    if (!studentName.value.trim()) {
      studentNameError.value = 'Student name is required.'
      valid = false
    }

    if (!email.value.trim()) {
      emailError.value = 'Email address is required.'
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailError.value = 'Please enter a valid email address.'
      valid = false
    }

    if (!admissionNumber.value) {
      admissionNumberError.value = 'Admission number is required.'
      valid = false
    }

    if (!studentClass.value) {
      studentClassError.value = 'Please select the student class.'
      valid = false
    }

    if (!paymentPurpose.value) {
      paymentPurposeError.value = 'Please select a payment purpose.'
      valid = false
    }

    if (
      paymentPurpose.value
      && paymentPurpose.value !== 'Tuition Fees'
      && (!otherAmount.value || Number(otherAmount.value) <= 0)
    ) {
      amountError.value = 'Please enter a valid payment amount.'
      valid = false
    }

    if (
      paymentPurpose.value === 'Tuition Fees'
      && !tuitionAmount.value
    ) {
      amountError.value = 'Please select a class first.'
      valid = false
    }

    if (!valid) {
      return
    }

    paymentGenerated.value = true
  }

  /* -----------------------------
   Confirm demo payment
----------------------------- */

  async function confirmPayment () {
    errorMessage.value = ''
    successMessage.value = ''

    if (
      !studentName.value.trim()
      || !admissionNumber.value
      || !studentClass.value
      || !email.value.trim()
    ) {
      errorMessage.value
        = 'Please complete all required student information.'
      return
    }

    if (!paymentPurpose.value) {
      errorMessage.value = 'Please select a payment purpose.'
      return
    }

    if (finalAmount.value <= 0) {
      errorMessage.value = 'Please enter a valid payment amount.'
      return
    }

    const year = new Date().getFullYear()

    // Generate unique receipt number
    const newReceiptNumber
      = `BFC-${year}-${Math.floor(10_000 + Math.random() * 90_000)}`

    // Generate payment reference
    const newPaymentReference
      = `PAY-${Date.now()}`

    // Save payment to Supabase
    const { error } = await supabase
      .from('payments')
      .insert({
        receipt_number: newReceiptNumber,
        payment_reference: newPaymentReference,
        student_name: studentName.value,
        email: email.value,
        admission_number: admissionNumber.value,
        student_class: studentClass.value,
        payment_purpose: paymentPurpose.value,
        amount: finalAmount.value,
        payment_status: 'pending',
      })

    // Stop if Supabase couldn't save it
    if (error) {
      console.error('Payment save error:', error)

      errorMessage.value
        = `Payment could not be saved: ${error.message}`

      return
    }

    // Send receipt email
    const { data: emailResult, error: emailError }
      = await supabase.functions.invoke('rapid-handler', {
        body: {
          email: email.value,
          studentName: studentName.value,
          admissionNumber: admissionNumber.value,
          studentClass: studentClass.value,
          paymentPurpose: paymentPurpose.value,
          amount: finalAmount.value,
          receiptNumber: newReceiptNumber,
          paymentReference: newPaymentReference,
        },
      })

    // check if receipt email was sent successfully
    if (emailError) {
      console.error('Receipt email error:', emailError)

      // Payment was saved, so don't cancel the receipt.
      successMessage.value
        = 'Payment recorded, but the receipt email could not be sent.'
    } else {
      console.log('Receipt email result:', emailResult)

      successMessage.value
        = 'Payment recorded successfully! Receipt sent to your email.'
    }

    // Save receipt information
    receiptNumber.value = newReceiptNumber
    paymentReference.value = newPaymentReference
    paymentDate.value = new Date().toLocaleDateString('en-NG')

    // Show receipt
    paymentGenerated.value = false
    receiptGenerated.value = true

    // Show success message
    snackbar.value = true
  }

  /* -----------------------------
   Print / Save receipt as PDF
----------------------------- */

  function printReceipt () {
    window.print()
  }

  /* -----------------------------
   Start new payment
----------------------------- */

  function newPayment () {
    studentName.value = ''
    admissionNumber.value = ''
    studentClass.value = ''
    email.value = ''
    paymentPurpose.value = ''
    otherAmount.value = ''

    paymentGenerated.value = false
    receiptGenerated.value = false
    snackbar.value = false

    receiptNumber.value = ''
    paymentReference.value = ''
    paymentDate.value = ''

    errorMessage.value = ''
    successMessage.value = ''

    studentNameError.value = ''
    admissionNumberError.value = ''
    studentClassError.value = ''
    paymentPurposeError.value = ''
    amountError.value = ''
  }

  /* -----------------------------
   Clear form
----------------------------- */

  function clearForm () {
    studentName.value = ''
    admissionNumber.value = ''
    studentClass.value = ''
    email.value = ''
    paymentPurpose.value = ''
    otherAmount.value = ''

    paymentGenerated.value = false
    receiptGenerated.value = false

    errorMessage.value = ''
    successMessage.value = ''

    studentNameError.value = ''
    admissionNumberError.value = ''
    studentClassError.value = ''
    paymentPurposeError.value = ''
    amountError.value = ''
  }
</script>

<style>
.receipt-wrapper {
  width: 100%;
}

.receipt-card {
  overflow: hidden;
}

.receipt-header {
  background: rgba(25, 118, 210, 0.08);
}

.receipt-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.receipt-label {
  font-size: 12px;
  color: #777;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.receipt-value {
  font-size: 16px;
  font-weight: 600;
}

.paid-stamp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border: 5px solid #2e7d32;
  border-radius: 50%;
  color: #2e7d32;
  font-size: 28px;
  font-weight: 800;
  transform: rotate(-12deg);
}

@media print {
  @page {
    size: A4;
    margin: 15mm;
  }

  body {
    margin: 0;
    padding: 0;
    background: white !important;
  }

  /* Hide everything except the receipt */
  body * {
    visibility: hidden !important;
  }

  #receipt,
  #receipt * {
    visibility: visible !important;
  }

  #receipt {
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  .receipt-card {
    width: 100% !important;
    max-width: 100% !important;
    box-shadow: none !important;
    border: 1px solid #ddd !important;
  }

  .receipt-actions {
    display: none !important;
  }
}
</style>
