<template>
  <v-app>
    <v-main class="documents-page">
      <v-container class="py-8" max-width="1200">

        <!-- Header -->
        <div class="d-flex align-center mb-8">
          <v-btn
            icon="mdi-arrow-left"
            variant="text"
            @click="router.push('/teacherportal')"
          />

          <div class="ml-3">
            <h1 class="text-h4 font-weight-bold">
              Student Documents
            </h1>

            <p class="text-grey-darken-1 mt-1">
              Review, approve and upload student documents
            </p>
          </div>
        </div>

        <!-- Messages -->
        <v-alert
          v-if="errorMessage"
          class="mb-5"
          type="error"
          variant="tonal"
        >
          {{ errorMessage }}
        </v-alert>

        <v-alert
          v-if="successMessage"
          class="mb-5"
          type="success"
          variant="tonal"
        >
          {{ successMessage }}
        </v-alert>

        <!-- Teacher Upload -->
        <v-card
          class="mb-8"
          elevation="3"
          rounded="xl"
        >
          <v-card-title class="pa-6 pb-2">
            <v-icon class="mr-2" color="info">
              mdi-cloud-upload
            </v-icon>

            Upload Document for Student
          </v-card-title>

          <v-card-text class="pa-6">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="uploadForm.admissionNumber"
                  label="Student Admission Number"
                  prepend-inner-icon="mdi-card-account-details"
                  variant="outlined"
                />
              </v-col>

              <v-col cols="12" md="4">
                <v-select
                  v-model="uploadForm.documentType"
                  :items="teacherDocumentTypes"
                  label="Document Type"
                  prepend-inner-icon="mdi-file-document"
                  variant="outlined"
                />
              </v-col>

              <v-col cols="12" md="4">
                <v-file-input
                  v-model="uploadForm.file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  label="Choose Document"
                  prepend-icon=""
                  prepend-inner-icon="mdi-paperclip"
                  show-size
                  variant="outlined"
                />
              </v-col>
            </v-row>

            <v-btn
              color="info"
              :disabled="uploading"
              :loading="uploading"
              size="large"
              @click="uploadForStudent"
            >
              <v-icon class="mr-2">
                mdi-upload
              </v-icon>

              Upload for Student
            </v-btn>
          </v-card-text>
        </v-card>

        <!-- Search -->
        <v-card
          class="mb-6"
          elevation="2"
          rounded="xl"
        >
          <v-card-text>
            <v-text-field
              v-model="search"
              clearable
              hide-details
              label="Search by student, admission number or document type"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
            />
          </v-card-text>
        </v-card>

        <!-- Stats -->
        <v-row class="mb-6">
          <v-col cols="12" sm="4">
            <v-card class="stat-card" elevation="2" rounded="xl">
              <v-card-text class="d-flex align-center">
                <v-avatar color="orange-lighten-4" size="50">
                  <v-icon color="orange">
                    mdi-clock-outline
                  </v-icon>
                </v-avatar>

                <div class="ml-4">
                  <div class="text-h5 font-weight-bold">
                    {{ pendingCount }}
                  </div>

                  <div class="text-grey-darken-1">
                    Pending
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card class="stat-card" elevation="2" rounded="xl">
              <v-card-text class="d-flex align-center">
                <v-avatar color="green-lighten-4" size="50">
                  <v-icon color="green">
                    mdi-check-circle
                  </v-icon>
                </v-avatar>

                <div class="ml-4">
                  <div class="text-h5 font-weight-bold">
                    {{ approvedCount }}
                  </div>

                  <div class="text-grey-darken-1">
                    Approved
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <v-card class="stat-card" elevation="2" rounded="xl">
              <v-card-text class="d-flex align-center">
                <v-avatar color="red-lighten-4" size="50">
                  <v-icon color="red">
                    mdi-close-circle
                  </v-icon>
                </v-avatar>

                <div class="ml-4">
                  <div class="text-h5 font-weight-bold">
                    {{ rejectedCount }}
                  </div>

                  <div class="text-grey-darken-1">
                    Rejected
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Documents -->
        <div class="d-flex align-center mb-4">
          <h2 class="text-h5 font-weight-bold">
            Uploaded Documents
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
          class="pa-10 text-center"
          rounded="xl"
        >
          <v-progress-circular
            color="info"
            indeterminate
          />
        </v-card>

        <v-card
          v-else-if="filteredDocuments.length === 0"
          class="pa-10 text-center"
          rounded="xl"
        >
          <v-icon color="grey" size="70">
            mdi-folder-open-outline
          </v-icon>

          <h3 class="text-h6 mt-4">
            No documents found
          </h3>
        </v-card>

        <v-row v-else>
          <v-col
            v-for="document in filteredDocuments"
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
                    size="52"
                  >
                    <v-icon color="info" size="28">
                      mdi-file-document
                    </v-icon>
                  </v-avatar>

                  <div class="ml-4 flex-grow-1">
                    <div class="text-h6 font-weight-bold">
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

                <div class="mb-2">
                  <strong>Admission Number:</strong>
                  {{ document.admission_number }}
                </div>

                <div class="text-caption text-grey-darken-1">
                  Uploaded:
                  {{ formatDate(document.created_at) }}
                </div>

                <div class="text-caption text-grey-darken-1 mt-1">
                  Uploaded by:
                  {{ document.uploaded_by }}
                </div>

                <v-alert
                  v-if="
                    document.status === 'rejected' &&
                      document.rejection_reason
                  "
                  class="mt-4"
                  type="error"
                  variant="tonal"
                >
                  {{ document.rejection_reason }}
                </v-alert>

                <!-- Actions -->
                <div class="d-flex flex-wrap ga-2 mt-5">

                  <v-btn
                    color="info"
                    variant="outlined"
                    @click="viewDocument(document)"
                  >
                    <v-icon class="mr-1">
                      mdi-eye
                    </v-icon>
                    View
                  </v-btn>

                  <v-btn
                    color="success"
                    variant="tonal"
                    @click="approveDocument(document)"
                  >
                    <v-icon class="mr-1">
                      mdi-check
                    </v-icon>
                    Approve
                  </v-btn>

                  <v-btn
                    color="error"
                    variant="tonal"
                    @click="openRejectDialog(document)"
                  >
                    <v-icon class="mr-1">
                      mdi-close
                    </v-icon>
                    Reject
                  </v-btn>

                </div>

              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

      </v-container>

      <!-- Reject Dialog -->
      <v-dialog
        v-model="rejectDialog"
        max-width="500"
      >
        <v-card rounded="xl">

          <v-card-title class="pa-6">
            Reject Document
          </v-card-title>

          <v-card-text class="px-6">
            <p class="mb-4">
              Please provide a reason for rejecting this document.
            </p>

            <v-textarea
              v-model="rejectionReason"
              label="Reason"
              rows="4"
              variant="outlined"
            />
          </v-card-text>

          <v-card-actions class="pa-6 pt-0">
            <v-spacer />

            <v-btn
              variant="text"
              @click="rejectDialog = false"
            >
              Cancel
            </v-btn>

            <v-btn
              color="error"
              :loading="updating"
              @click="rejectDocument"
            >
              Reject Document
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-dialog>

    </v-main>
  </v-app>
</template>

<script setup>
  import { computed, onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { supabase } from '@/lib/supabaseClient'

  const router = useRouter()

  const documents = ref([])
  const loading = ref(false)
  const uploading = ref(false)
  const updating = ref(false)

  const search = ref('')

  const errorMessage = ref('')
  const successMessage = ref('')

  const rejectDialog = ref(false)
  const rejectionReason = ref('')
  const selectedDocument = ref(null)

  const uploadForm = ref({
    admissionNumber: '',
    documentType: '',
    file: null,
  })

  const teacherDocumentTypes = [
    'Graduation Certificate',
    'School Leaving Certificate',
    'Transcript',
    'Academic Report',
    'Recommendation Letter',
    'Admission Letter',
    'Other School Document',
  ]

  async function loadDocuments () {
    loading.value = true
    errorMessage.value = ''

    const { data, error } = await supabase
      .from('student_documents')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      errorMessage.value = error.message
    } else {
      documents.value = data || []
    }

    loading.value = false
  }

  const filteredDocuments = computed(() => {
    const query = search.value.toLowerCase().trim()

    if (!query) {
      return documents.value
    }

    return documents.value.filter(document =>
      document.admission_number
        ?.toLowerCase()
        .includes(query)
        || document.document_type
        ?.toLowerCase()
        .includes(query)
        || document.file_name
        ?.toLowerCase()
        .includes(query),
    )
  })

  const pendingCount = computed(() =>
    documents.value.filter(
      document => document.status === 'pending',
    ).length,
  )

  const approvedCount = computed(() =>
    documents.value.filter(
      document => document.status === 'approved',
    ).length,
  )

  const rejectedCount = computed(() =>
    documents.value.filter(
      document => document.status === 'rejected',
    ).length,
  )

  async function viewDocument (document) {
    errorMessage.value = ''

    const { data, error } = await supabase.storage
      .from('student-documents')
      .createSignedUrl(
        document.file_path,
        60 * 10,
      )

    if (error) {
      errorMessage.value = error.message
      return
    }

    window.open(data.signedUrl, '_blank')
  }

  async function approveDocument (document) {
    updating.value = true
    errorMessage.value = ''
    successMessage.value = ''

    const { error } = await supabase
      .from('student_documents')
      .update({
        status: 'approved',
        rejection_reason: null,
      })
      .eq('id', document.id)

    if (error) {
      errorMessage.value = error.message
    } else {
      successMessage.value
        = 'Document approved successfully.'

      await loadDocuments()
    }

    updating.value = false
  }

  function openRejectDialog (document) {
    selectedDocument.value = document
    rejectionReason.value = ''
    rejectDialog.value = true
  }

  async function rejectDocument () {
    if (!rejectionReason.value.trim()) {
      errorMessage.value
        = 'Please provide a rejection reason.'

      return
    }

    if (!selectedDocument.value) {
      return
    }

    updating.value = true
    errorMessage.value = ''
    successMessage.value = ''

    const { error } = await supabase
      .from('student_documents')
      .update({
        status: 'rejected',
        rejection_reason:
          rejectionReason.value.trim(),
      })
      .eq('id', selectedDocument.value.id)

    if (error) {
      errorMessage.value = error.message
    } else {
      successMessage.value
        = 'Document rejected.'

      rejectDialog.value = false
      await loadDocuments()
    }

    updating.value = false
  }

  async function uploadForStudent () {
    errorMessage.value = ''
    successMessage.value = ''

    if (!uploadForm.value.admissionNumber.trim()) {
      errorMessage.value
        = 'Please enter the student admission number.'

      return
    }

    if (!uploadForm.value.documentType) {
      errorMessage.value
        = 'Please select a document type.'

      return
    }

    if (!uploadForm.value.file) {
      errorMessage.value
        = 'Please choose a file.'

      return
    }

    const file = Array.isArray(uploadForm.value.file)
      ? uploadForm.value.file[0]
      : uploadForm.value.file

    if (!file) {
      errorMessage.value
        = 'Please choose a file.'

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
        = `${uploadForm.value.admissionNumber.trim()}/${Date.now()}-${safeName}`

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
            admission_number:
              uploadForm.value.admissionNumber.trim(),

            document_type:
              uploadForm.value.documentType,

            file_name: file.name,

            file_path: filePath,

            status: 'approved',

            uploaded_by: 'teacher',
          })

      if (databaseError) {
        await supabase.storage
          .from('student-documents')
          .remove([filePath])

        throw databaseError
      }

      successMessage.value
        = 'Document uploaded successfully for the student.'

      uploadForm.value = {
        admissionNumber: '',
        documentType: '',
        file: null,
      }

      await loadDocuments()
    } catch (error) {
      errorMessage.value
        = error.message || 'Failed to upload document.'
    } finally {
      uploading.value = false
    }
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

  onMounted(() => {
    loadDocuments()
  })
</script>

<style scoped>
.documents-page {
  min-height: 100vh;
  background: #f5f7fa;
}

.stat-card {
  border-top: 4px solid #1976d2;
}

.document-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.document-card:hover {
  transform: translateY(-3px);
}
</style>
