<template>
  <v-app>
    <v-main class="documents-page">
      <v-container class="py-8" max-width="1100">

        <!-- Header -->
        <div class="d-flex align-center mb-8">
          <v-btn
            icon="mdi-arrow-left"
            variant="text"
            @click="router.push('/studentportal')"
          />

          <div class="ml-3">
            <h1 class="text-h4 font-weight-bold">
              My Documents
            </h1>

            <p class="text-grey-darken-1 mt-1">
              Upload and manage your school documents
            </p>
          </div>
        </div>

        <!-- Student Information -->
        <v-card
          class="mb-6 info-card"
          elevation="2"
          rounded="xl"
        >
          <v-card-text class="pa-6">
            <div class="d-flex align-center">
              <v-avatar color="info" size="55">
                <v-icon size="30">mdi-account</v-icon>
              </v-avatar>

              <div class="ml-4">
                <div class="text-h6 font-weight-bold">
                  {{ studentName }}
                </div>

                <div class="text-grey-darken-1">
                  Admission Number: {{ admissionNumber }}
                </div>
              </div>
            </div>
          </v-card-text>
        </v-card>

        <!-- Upload Section -->
        <v-card
          class="mb-8 upload-card"
          elevation="3"
          rounded="xl"
        >
          <v-card-title class="pa-6 pb-2">
            <v-icon class="mr-2" color="info">
              mdi-file-upload
            </v-icon>

            Upload a Document
          </v-card-title>

          <v-card-text class="pa-6">

            <v-select
              v-model="documentType"
              class="mb-4"
              :items="documentTypes"
              label="Document Type"
              prepend-inner-icon="mdi-file-document"
              variant="outlined"
            />

            <v-file-input
              v-model="selectedFile"
              accept=".pdf,.jpg,.jpeg,.png"
              class="mb-2"
              label="Choose document"
              prepend-icon=""
              prepend-inner-icon="mdi-paperclip"
              show-size
              variant="outlined"
            />

            <p class="text-caption text-grey-darken-1 mb-4">
              Accepted formats: PDF, JPG, JPEG and PNG.
            </p>

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
              color="info"
              :disabled="uploading"
              :loading="uploading"
              size="large"
              @click="uploadDocument"
            >
              <v-icon class="mr-2">
                mdi-cloud-upload
              </v-icon>

              Upload Document
            </v-btn>

          </v-card-text>
        </v-card>

        <!-- Documents List -->
        <div class="d-flex align-center mb-4">
          <h2 class="text-h5 font-weight-bold">
            My Uploaded Documents
          </h2>

          <v-spacer />

          <v-btn
            icon="mdi-refresh"
            :loading="loading"
            variant="text"
            @click="loadDocuments"
          />
        </div>

        <v-card
          v-if="loading"
          class="pa-8 text-center"
          rounded="xl"
        >
          <v-progress-circular
            color="info"
            indeterminate
          />
        </v-card>

        <v-card
          v-else-if="documents.length === 0"
          class="pa-10 text-center"
          elevation="2"
          rounded="xl"
        >
          <v-icon
            color="grey"
            size="70"
          >
            mdi-folder-open-outline
          </v-icon>

          <h3 class="text-h6 mt-4">
            No documents yet
          </h3>

          <p class="text-grey-darken-1 mt-2">
            Upload your required school documents above.
          </p>
        </v-card>

        <v-row v-else>
          <v-col
            v-for="document in documents"
            :key="document.id"
            cols="12"
            md="6"
          >
            <v-card
              class="document-card"
              elevation="2"
              rounded="xl"
            >
              <v-card-text class="pa-5">

                <div class="d-flex align-center">
                  <v-avatar
                    color="blue-lighten-5"
                    size="50"
                  >
                    <v-icon color="info">
                      mdi-file-document
                    </v-icon>
                  </v-avatar>

                  <div class="ml-4 flex-grow-1">
                    <div class="font-weight-bold">
                      {{ document.document_type }}
                    </div>

                    <div class="text-caption text-grey-darken-1">
                      {{ document.file_name }}
                    </div>
                  </div>

                  <v-chip
                    :color="statusColor(document.status)"
                    size="small"
                    variant="tonal"
                  >
                    {{ document.status }}
                  </v-chip>
                </div>

                <v-divider class="my-4" />

                <div class="text-caption text-grey-darken-1">
                  Uploaded:
                  {{ formatDate(document.created_at) }}
                </div>

                <v-alert
                  v-if="document.status === 'rejected' && document.rejection_reason"
                  class="mt-4"
                  type="error"
                  variant="tonal"
                >
                  {{ document.rejection_reason }}
                </v-alert>

                <v-btn
                  block
                  class="mt-4"
                  color="info"
                  variant="outlined"
                  @click="viewDocument(document)"
                >
                  <v-icon class="mr-2">
                    mdi-eye
                  </v-icon>

                  View Document
                </v-btn>

              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient'

  const router = useRouter()

  const studentName = ref('')
  const admissionNumber = ref('')

  const documentType = ref('')
  const selectedFile = ref(null)

  const documents = ref([])

  const loading = ref(false)
  const uploading = ref(false)

  const errorMessage = ref('')
  const successMessage = ref('')

  const documentTypes = [
    'Birth Certificate',
    'Medical Certificate',
    'Previous School Result',
    'Parent/Guardian ID',
    'Passport Photograph',
    'Other Document',
  ]

  async function getStudent () {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      router.push('/studentlogin')
      return false
    }

    const { data, error } = await supabase
      .from('applications')
      .select(`
      first_name,
      last_name,
      admission_number
    `)
      .eq('email', user.email)
      .single()

    if (error) {
      errorMessage.value = error.message
      return false
    }

    studentName.value
      = `${data.first_name} ${data.last_name}`

    admissionNumber.value = data.admission_number

    return true
  }

  async function loadDocuments () {
    loading.value = true
    errorMessage.value = ''

    const { data, error } = await supabase
      .from('student_documents')
      .select('*')
      .eq('admission_number', admissionNumber.value)
      .order('created_at', { ascending: false })

    if (error) {
      errorMessage.value = error.message
    } else {
      documents.value = data || []
    }

    loading.value = false
  }

  async function uploadDocument () {
    errorMessage.value = ''
    successMessage.value = ''

    if (!documentType.value) {
      errorMessage.value = 'Please select a document type.'
      return
    }

    if (!selectedFile.value) {
      errorMessage.value = 'Please choose a file.'
      return
    }

    const file = Array.isArray(selectedFile.value)
      ? selectedFile.value[0]
      : selectedFile.value

    if (!file) {
      errorMessage.value = 'Please choose a file.'
      return
    }

    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
    ]

    if (!allowedTypes.includes(file.type)) {
      errorMessage.value
        = 'Only PDF, JPG, JPEG and PNG files are allowed.'
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      errorMessage.value
        = 'File size must not exceed 5MB.'
      return
    }

    uploading.value = true

    try {
      const safeName = file.name
        .replace(/[^a-zA-Z0-9.-]/g, '_')

      const filePath
        = `${admissionNumber.value}/${Date.now()}-${safeName}`

      const { error: uploadError }
        = await supabase.storage
          .from('student-documents')
          .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { error: databaseError }
        = await supabase
          .from('student_documents')
          .insert({
            admission_number: admissionNumber.value,
            document_type: documentType.value,
            file_name: file.name,
            file_path: filePath,
            status: 'pending',
            uploaded_by: 'student',
          })

      if (databaseError) {
        await supabase.storage
          .from('student-documents')
          .remove([filePath])

        throw databaseError
      }

      successMessage.value
        = 'Document uploaded successfully.'

      documentType.value = ''
      selectedFile.value = null

      await loadDocuments()
    } catch (error) {
      errorMessage.value
        = error.message || 'Failed to upload document.'
    } finally {
      uploading.value = false
    }
  }

  async function viewDocument (document) {
    const { data, error } = await supabase.storage
      .from('student-documents')
      .createSignedUrl(
        document.file_path,
        60 * 5,
      )

    if (error) {
      errorMessage.value = error.message
      return
    }

    window.open(data.signedUrl, '_blank')
  }

  function statusColor (status) {
    if (status === 'approved') return 'success'
    if (status === 'rejected') return 'error'
    return 'warning'
  }

  function formatDate (date) {
    return new Date(date).toLocaleDateString(
      'en-NG',
      {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      },
    )
  }

  onMounted(async () => {
    const studentLoaded = await getStudent()

    if (studentLoaded) {
      await loadDocuments()
    }
  })
</script>

<style scoped>
.documents-page {
  min-height: 100vh;
  background: #f5f7fa;
}

.info-card {
  border-left: 5px solid #1976d2;
}

.upload-card {
  border-top: 4px solid #1976d2;
}

.document-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.document-card:hover {
  transform: translateY(-3px);
}

@media (max-width: 600px) {
  .documents-page {
    padding-bottom: 30px;
  }
}
</style>
