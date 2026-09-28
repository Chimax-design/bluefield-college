<template>
  <v-app>
    <v-main class="login-page">
      <v-container class="fill-height d-flex align-center justify-center">
        <v-card
          class="login-card pa-8"
          elevation="10"
          max-width="500"
          width="100%"
        >
          <div class="text-center mb-7">
            <img
              alt="Bluefield College"
              class="logo"
              src="/bluefield-logo.png"
            >

            <h1 class="text-h4 font-weight-bold mt-4">
              Teacher Portal
            </h1>

            <p class="text-medium-emphasis mt-2">
              Sign in to manage your classes and students
            </p>
          </div>

          <v-alert
            v-if="errorMessage"
            class="mb-5"
            type="error"
            variant="tonal"
          >
            {{ errorMessage }}
          </v-alert>

          <v-text-field
            v-model="email"
            class="mb-3"
            label="Email Address"
            prepend-inner-icon="mdi-email"
            type="email"
            variant="outlined"
          />

          <v-text-field
            v-model="password"
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            label="Password"
            prepend-inner-icon="mdi-lock"
            :type="showPassword ? 'text' : 'password'"
            variant="outlined"
            @click:append-inner="showPassword = !showPassword"
          />

          <v-btn
            block
            class="mt-5"
            color="primary"
            :loading="loading"
            size="large"
            @click="login"
          >
            <v-icon start>
              mdi-login
            </v-icon>

            Sign In
          </v-btn>

          <v-btn
            block
            class="mt-3"
            to="/"
            variant="text"
          >
            <v-icon start>
              mdi-arrow-left
            </v-icon>

            Back to Website
          </v-btn>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)
  const loading = ref(false)
  const errorMessage = ref('')

  function login () {
    errorMessage.value = ''

    if (!email.value.trim() || !password.value) {
      errorMessage.value = 'Please enter your email and password.'
      return
    }

    loading.value = true

    // Temporary presentation login.
    // We will connect this to Supabase after the portal UI is ready.
    setTimeout(() => {
      loading.value = false

      localStorage.setItem(
        'bluefieldTeacher',
        email.value.trim(),
      )

      router.push('/teacherportal')
    }, 700)
  }
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #e3f2fd,
    #ffffff
  );
}

.login-card {
  border-radius: 20px;
}

.logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
