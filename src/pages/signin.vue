<template>
  <v-card class="mx-auto">
    <v-spacer />

    <v-layout>
      <!-- =========================
           NAVBAR
      ========================== -->
      <AppNavbar />

      <!-- =========================
           MAIN CONTENT
      ========================== -->
      <v-main>
        <v-container>
          <!-- PAGE HEADER -->
          <v-card
            class="pa-16 mb-6"
            color="primary"
            elevation="3"
          >
            <v-card-title class="text-h4 text-center">
              Bluefield College Online Admission Form
            </v-card-title>
          </v-card>
          <!-- ADMISSION FORM -->
          <v-card
            class="pa-16 mb-6"
            elevation="3"
          >
            <!-- =========================
                 STUDENT INFORMATION
            ========================== -->
            <v-text-field
              v-model="firstName"
              :error-messages="firstNameError"
              label="First Name"
              required
            />

            <v-text-field
              v-model="lastName"
              :error-messages="lastNameError"
              label="Last Name"
              required
            />

            <v-text-field
              v-model="admissionNumber"
              label="Student Admission Number"
              required
            />

            <v-select
              v-model="gender"
              :error-messages="genderError"
              :items="['Male', 'Female']"
              label="Gender"
              required
            />

            <v-text-field
              v-model="dob"
              :error-messages="dobError"
              label="Date of Birth"
              required
              type="date"
            />

            <v-text-field
              v-model="phone"
              :error-messages="phoneError"
              inputmode="numeric"
              label="Phone Number"
              maxlength="11"
              required
              type="tel"
              @input="onlyNumbers(phone, 'phone')"
            />

            <v-text-field
              v-model="email"
              :error-messages="emailError"
              label="Email Address"
              required
              type="email"
            />

            <v-textarea
              v-model="address"
              :error-messages="addressError"
              label="Home Address"
              required
            />

            <v-text-field
              v-model="previousSchool"
              label="Previous School"
            />

            <v-select
              v-model="applyingClass"
              :error-messages="applyingClassError"
              :items="classOptions"
              label="Class Applying For"
              required
            />

            <!-- =========================
                 PARENT / GUARDIAN
            ========================== -->
            <v-divider class="my-5" />

            <h3>Parent / Guardian Information</h3>

            <v-text-field
              v-model="guardianName"
              :error-messages="guardianNameError"
              label="Guardian Name"
              required
            />

            <v-text-field
              v-model="guardianPhone"
              :error-messages="guardianPhoneError"
              inputmode="numeric"
              label="Guardian Phone"
              maxlength="11"
              required
              type="tel"
              @input="onlyNumbers(guardianPhone, 'guardianPhone')"
            />

            <!-- =========================
                 PASSPORT
            ========================== -->
            <v-file-input
              v-model="passport"
              accept="image/*"
              label="Upload Passport Photograph"
            />

            <!-- =========================
                 BUTTONS
            ========================== -->
            <v-row class="mt-4">
              <v-col>
                <v-btn
                  block
                  color="success"
                  @click="submitApplication"
                >
                  Submit Application
                </v-btn>
              </v-col>

              <v-col>
                <v-btn
                  block
                  color="red"
                  @click="clearForm"
                >
                  Clear
                </v-btn>
              </v-col>
            </v-row>
          </v-card>

          <!-- =========================
               SUCCESS MESSAGE
          ========================== -->
          <v-snackbar
            v-model="snackbar"
            color="green"
            timeout="5000"
          >
            🎉 Thank you for applying to Bluefield College.

            Your admission application has been submitted successfully.

            Our admissions office will contact you after reviewing your application.
          </v-snackbar>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import AppNavbar from '@/components/AppNavbar.vue'
  import { supabase } from '@/lib/supabaseClient.js'

  const router = useRouter()

  // =========================
  // FORM FIELDS
  // =========================

  const firstName = ref('')
  const lastName = ref('')
  const admissionNumber = ref('')
  const gender = ref('')
  const dob = ref('')
  const phone = ref('')
  const email = ref('')
  const address = ref('')
  const previousSchool = ref('')
  const applyingClass = ref('')
  const guardianName = ref('')
  const guardianPhone = ref('')
  const passport = ref([])

  // =========================
  // FORM STATE
  // =========================

  const snackbar = ref(false)
  const errorMessage = ref('')

  // =========================
  // ERROR MESSAGES
  // =========================

  const firstNameError = ref('')
  const lastNameError = ref('')
  const genderError = ref('')
  const dobError = ref('')
  const phoneError = ref('')
  const emailError = ref('')
  const addressError = ref('')
  const applyingClassError = ref('')
  const guardianNameError = ref('')
  const guardianPhoneError = ref('')

  // =========================
  // CLASS OPTIONS
  // =========================

  const classOptions = [
    'Creche',
    'Nursery 1',
    'Nursery 2',
    'Primary1',
    'Primary2',
    'Primary3',
    'Primary4',
    'Primary5',
    'Primary6 (optional)',
    'JSS1',
    'JSS2',
    'JSS3',
    'SS1',
    'SS2',
    'SS3',
  ]

  // =========================
  // NUMBERS ONLY
  // =========================

  function onlyNumbers (value, field) {
    const numbersOnly = value.replace(/\D/g, '')

    if (field === 'phone') {
      phone.value = numbersOnly
    }

    if (field === 'guardianPhone') {
      guardianPhone.value = numbersOnly
    }
  }

  // =========================
  // SUBMIT APPLICATION
  // =========================

  async function submitApplication () {
    // Clear previous errors
    firstNameError.value = ''
    lastNameError.value = ''
    genderError.value = ''
    dobError.value = ''
    phoneError.value = ''
    emailError.value = ''
    addressError.value = ''
    applyingClassError.value = ''
    guardianNameError.value = ''
    guardianPhoneError.value = ''

    let valid = true

    // First name
    if (!firstName.value.trim()) {
      firstNameError.value = 'First name is required.'
      valid = false
    }

    // Last name
    if (!lastName.value.trim()) {
      lastNameError.value = 'Last name is required.'
      valid = false
    }

    // Gender
    if (!gender.value) {
      genderError.value = 'Please select a gender.'
      valid = false
    }

    // Date of birth
    if (!dob.value) {
      dobError.value = 'Date of birth is required.'
      valid = false
    }

    // Phone
    if (!phone.value) {
      phoneError.value = 'Phone number is required.'
      valid = false
    } else if (phone.value.length !== 11) {
      phoneError.value = 'Phone number must contain 11 digits.'
      valid = false
    }

    // Email
    if (!email.value.trim()) {
      emailError.value = 'Email address is required.'
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailError.value = 'Please enter a valid email address.'
      valid = false
    }

    // Address
    if (!address.value.trim()) {
      addressError.value = 'Home address is required.'
      valid = false
    }

    // Applying class
    if (!applyingClass.value) {
      applyingClassError.value
        = 'Please select the class you are applying for.'
      valid = false
    }

    // Guardian name
    if (!guardianName.value.trim()) {
      guardianNameError.value = 'Guardian name is required.'
      valid = false
    }

    // Guardian phone
    if (!guardianPhone.value) {
      guardianPhoneError.value = 'Guardian phone number is required.'
      valid = false
    } else if (guardianPhone.value.length !== 11) {
      guardianPhoneError.value
        = 'Guardian phone number must contain 11 digits.'
      valid = false
    }

    // Stop if validation fails
    if (!valid) {
      return
    }

    try {
      // =========================
      // UPLOAD PASSPORT
      // =========================

      let passportUrl = null

      const selectedFile = Array.isArray(passport.value)
        ? passport.value[0]
        : passport.value

      if (selectedFile) {
        const fileExt = selectedFile.name.split('.').pop()

        const fileName
          = `${admissionNumber.value}-${Date.now()}.${fileExt}`

        const { error: uploadError } = await supabase.storage
          .from('passports')
          .upload(fileName, selectedFile)

        if (uploadError) {
          console.error('Passport upload error:', uploadError)

          alert(
            `Passport upload failed: ${uploadError.message}`,
          )

          return
        }

        const { data } = supabase.storage
          .from('passports')
          .getPublicUrl(fileName)

        passportUrl = data.publicUrl
      }

      // =========================
      // SAVE APPLICATION
      // =========================

      const { error } = await supabase
        .from('applications')
        .insert({
          admission_number: admissionNumber.value,
          first_name: firstName.value,
          last_name: lastName.value,
          gender: gender.value,
          dob: dob.value,
          phone: phone.value,
          email: email.value,
          address: address.value,
          previous_school: previousSchool.value,
          applying_class: applyingClass.value,
          guardian_name: guardianName.value,
          guardian_phone: guardianPhone.value,
          passport_url: passportUrl,
        })

      // =========================
      // DATABASE ERROR
      // =========================

      if (error) {
        errorMessage.value
          = error.code === '23505'
            && error.message.includes('email')
            ? 'An application with this email already exists.'
            : error.message

        alert(errorMessage.value)

        return
      }

      // =========================
      // SAVE EMAIL FOR REGISTRATION
      // =========================

      sessionStorage.setItem(
        'admissionEmail',
        email.value.trim(),
      )

      // =========================
      // GO TO STUDENT REGISTRATION
      // =========================

      await router.push('/studentregister')
    } catch (error) {
      console.error('Unexpected error:', error)

      alert(
        `Something went wrong: ${error.message}`,
      )
    }
  }

  // =========================
  // CLEAR FORM
  // =========================

  function clearForm () {
    // Clear fields
    firstName.value = ''
    lastName.value = ''
    admissionNumber.value = ''
    gender.value = ''
    dob.value = ''
    phone.value = ''
    email.value = ''
    address.value = ''
    previousSchool.value = ''
    applyingClass.value = ''
    guardianName.value = ''
    guardianPhone.value = ''
    passport.value = []

    // Clear errors
    firstNameError.value = ''
    lastNameError.value = ''
    genderError.value = ''
    dobError.value = ''
    phoneError.value = ''
    emailError.value = ''
    addressError.value = ''
    applyingClassError.value = ''
    guardianNameError.value = ''
    guardianPhoneError.value = ''
  }
</script>
