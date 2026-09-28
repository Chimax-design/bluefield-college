```vue
<template>
  <v-app>
    <v-main class="register-page">
      <v-container class="fill-height d-flex align-center justify-center">
        <v-card
          class="register-card pa-8"
          elevation="10"
          max-width="500"
          width="100%"
        >
          <div class="text-center mb-6">
            <img
              alt="Bluefield College Logo"
              class="logo mb-4"
              src="/bluefield-logo.png"
            >

            <h2 class="text-h4 font-weight-bold">
              Student Registration
            </h2>

            <p class="text-medium-emphasis mt-2">
              Create your password to access the Student Portal.
            </p>
          </div>

          <!-- EMAIL -->
          <v-text-field
            v-model="email"
            label="Email Address"
            prepend-inner-icon="mdi-email"
            readonly
            variant="outlined"
          />

          <!-- PASSWORD -->
          <v-text-field
            v-model="password"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            label="Create Password"
            prepend-inner-icon="mdi-lock"
            :type="showPassword ? 'text' : 'password'"
            variant="outlined"
            @click:append-inner="showPassword = !showPassword"
          />

          <!-- CONFIRM PASSWORD -->
          <v-text-field
            v-model="confirmPassword"
            :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
            label="Confirm Password"
            prepend-inner-icon="mdi-lock-check"
            :type="showConfirmPassword ? 'text' : 'password'"
            variant="outlined"
            @click:append-inner="showConfirmPassword = !showConfirmPassword"
          />

          <v-alert
            v-if="errorMessage"
            class="mb-4"
            type="error"
            variant="tonal"
          >
            {{ errorMessage }}
          </v-alert>

          <v-alert
            v-if="successMessage"
            class="mb-4"
            type="success"
            variant="tonal"
          >
            {{ successMessage }}
          </v-alert>

          <v-btn
            block
            class="mb-4"
            color="primary"
            :loading="loading"
            size="large"
            @click="registerStudent"
          >
            Create Student Account
          </v-btn>

          <div class="text-center">
            <span class="text-medium-emphasis">
              Already have an account?
            </span>

            <v-btn
              class="ml-1"
              color="primary"
              to="/studentlogin"
              variant="text"
            >
              Login
            </v-btn>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient.js'

  const router = useRouter()

  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')

  const showPassword = ref(false)
  const showConfirmPassword = ref(false)

  const loading = ref(false)
  const errorMessage = ref('')
  const successMessage = ref('')

  // Get the email from the admission form
  onMounted(() => {
    const savedEmail = sessionStorage.getItem('admissionEmail')

    if (!savedEmail) {
      errorMessage.value
        = 'No admission application was found. Please complete the admission form first.'
      return
    }

    email.value = savedEmail
  })

  async function registerStudent () {
    errorMessage.value = ''
    successMessage.value = ''

    if (!email.value) {
      errorMessage.value
        = 'No admission email was found. Please complete the admission form first.'
      return
    }

    if (!password.value) {
      errorMessage.value = 'Please create a password.'
      return
    }

    if (password.value.length < 6) {
      errorMessage.value
        = 'Password must be at least 6 characters long.'
      return
    }

    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Passwords do not match.'
      return
    }

    loading.value = true

    try {
      // Create the student account in Supabase Auth
      const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      })

      if (error) {
        errorMessage.value = error.message.toLowerCase().includes('already registered') ? 'An account with this email already exists. Please log in instead.' : error.message

        return
      }

      // Registration successful
      sessionStorage.removeItem('admissionEmail')

      successMessage.value
        = 'Your student account has been created successfully. Redirecting to login...'

      setTimeout(() => {
        router.push('/studentlogin')
      }, 2000)
    } catch (error) {
      console.error('Registration error:', error)
      errorMessage.value
        = `Something went wrong: ${error.message}`
    } finally {
      loading.value = false
    }
  }
</script>

<style scoped>
.register-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #e3f2fd, #ffffff);
}

.register-card {
  border-radius: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
