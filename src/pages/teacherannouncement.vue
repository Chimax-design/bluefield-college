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
        Announcements Management
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
            Manage Announcements
          </h1>

          <p class="text-body-1 text-medium-emphasis mt-2">
            Create announcements for students and classes.
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

        <!-- FORM -->
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
                mdi-bullhorn
              </v-icon>
            </v-avatar>

            <div class="ml-4">
              <div class="text-h6 font-weight-bold">
                {{ editingId ? 'Edit Announcement' : 'Create Announcement' }}
              </div>

              <div class="text-body-2 text-medium-emphasis">
                Share important information with students.
              </div>
            </div>
          </div>

          <v-row>
            <!-- TITLE -->
            <v-col cols="12">
              <v-text-field
                v-model="form.title"
                label="Announcement Title"
                placeholder="e.g. School Resumes Monday"
                prepend-inner-icon="mdi-format-title"
                rounded="lg"
                variant="outlined"
              />
            </v-col>

            <!-- MESSAGE -->
            <v-col cols="12">
              <v-textarea
                v-model="form.message"
                label="Announcement Message"
                placeholder="Write your announcement here..."
                prepend-inner-icon="mdi-message-text"
                rounded="lg"
                rows="5"
                variant="outlined"
              />
            </v-col>

            <!-- TARGET CLASS -->
            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="form.target_class"
                :items="classOptions"
                label="Who should see this?"
                prepend-inner-icon="mdi-account-group"
                rounded="lg"
                variant="outlined"
              />
            </v-col>

            <!-- PUBLISHED -->
            <v-col
              cols="12"
              md="6"
            >
              <v-switch
                v-model="form.published"
                color="primary"
                hide-details
                label="Publish announcement"
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
              @click="saveAnnouncement"
            >
              {{ editingId ? 'Update Announcement' : 'Save Announcement' }}
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

        <!-- EXISTING ANNOUNCEMENTS -->
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
                mdi-bullhorn-outline
              </v-icon>

              <div>
                <div class="text-h6 font-weight-bold">
                  Existing Announcements
                </div>

                <div class="text-body-2 text-medium-emphasis">
                  Manage announcements already created.
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
              Loading announcements...
            </p>
          </div>

          <div
            v-else-if="announcements.length === 0"
            class="empty-state"
          >
            <v-icon
              color="primary"
              size="60"
            >
              mdi-bullhorn-outline
            </v-icon>

            <p class="text-medium-emphasis mt-4">
              No announcements have been created yet.
            </p>
          </div>

          <v-list v-else>
            <template
              v-for="(announcement, index) in announcements"
              :key="announcement.id"
            >
              <v-list-item class="py-4">
                <template #prepend>
                  <v-avatar
                    color="primary"
                    size="48"
                    variant="tonal"
                  >
                    <v-icon>
                      mdi-bullhorn
                    </v-icon>
                  </v-avatar>
                </template>

                <v-list-item-title class="font-weight-bold">
                  {{ announcement.title }}
                </v-list-item-title>

                <v-list-item-subtitle class="mt-2">
                  {{ announcement.message }}
                </v-list-item-subtitle>

                <div class="d-flex flex-wrap align-center ga-2 mt-3">
                  <v-chip
                    color="primary"
                    size="small"
                    variant="tonal"
                  >
                    <v-icon start>
                      mdi-account-group
                    </v-icon>

                    {{ announcement.target_class || 'All Students' }}
                  </v-chip>

                  <v-chip
                    :color="announcement.published ? 'success' : 'orange'"
                    size="small"
                  >
                    {{ announcement.published ? 'Published' : 'Draft' }}
                  </v-chip>

                  <span class="text-caption text-medium-emphasis">
                    {{ formatDate(announcement.created_at) }}
                  </span>
                </div>

                <template #append>
                  <div class="d-flex ga-2">
                    <v-btn
                      color="primary"
                      icon="mdi-pencil"
                      size="small"
                      variant="tonal"
                      @click="editAnnouncement(announcement)"
                    />

                    <v-btn
                      color="error"
                      icon="mdi-delete"
                      size="small"
                      variant="tonal"
                      @click="openDeleteDialog(announcement)"
                    />
                  </div>
                </template>
              </v-list-item>

              <v-divider
                v-if="index < announcements.length - 1"
              />
            </template>
          </v-list>
        </v-card>
      </v-container>
    </v-main>

    <!-- DELETE DIALOG -->
    <v-dialog
      v-model="deleteDialog"
      max-width="450"
    >
      <v-card rounded="xl">
        <v-card-title class="pa-6">
          Delete Announcement?
        </v-card-title>

        <v-card-text>
          Are you sure you want to delete
          <strong>{{ selectedAnnouncement?.title }}</strong>?
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
  const selectedAnnouncement = ref(null)

  const announcements = ref([])

  const classOptions = [
    'All Students',
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

  const form = reactive({
    title: '',
    message: '',
    target_class: 'All Students',
    published: false,
  })

  function clearMessages () {
    successMessage.value = ''
    errorMessage.value = ''
  }

  function resetForm () {
    editingId.value = null

    form.title = ''
    form.message = ''
    form.target_class = 'All Students'
    form.published = false
  }

  function editAnnouncement (announcement) {
    clearMessages()

    editingId.value = announcement.id

    form.title = announcement.title
    form.message = announcement.message
    form.target_class
      = announcement.target_class || 'All Students'
    form.published = announcement.published
  }

  function formatDate (date) {
    if (!date) {
      return ''
    }

    return new Date(date).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  async function loadAnnouncements () {
    loading.value = true
    clearMessages()

    try {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError || !user) {
        router.push('/studentlogin')
        return
      }

      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      announcements.value = data || []
    } catch (error) {
      console.error('Announcement loading error:', error)

      errorMessage.value
        = error?.message || 'Unable to load announcements.'
    } finally {
      loading.value = false
    }
  }

  async function saveAnnouncement () {
    clearMessages()

    if (!form.title.trim() || !form.message.trim()) {
      errorMessage.value
        = 'Please enter an announcement title and message.'
      return
    }

    saving.value = true

    try {
      const payload = {
        title: form.title.trim(),
        message: form.message.trim(),
        target_class:
          form.target_class === 'All Students'
            ? null
            : form.target_class,
        published: form.published,
      }

      if (editingId.value) {
        const { error } = await supabase
          .from('announcements')
          .update(payload)
          .eq('id', editingId.value)

        if (error) {
          throw error
        }

        successMessage.value
          = 'Announcement updated successfully.'
      } else {
        const { error } = await supabase
          .from('announcements')
          .insert(payload)

        if (error) {
          throw error
        }

        successMessage.value
          = 'Announcement created successfully.'
      }

      resetForm()
      await loadAnnouncements()
    } catch (error) {
      console.error('Announcement save error:', error)

      errorMessage.value
        = error?.message || 'Unable to save announcement.'
    } finally {
      saving.value = false
    }
  }

  function openDeleteDialog (announcement) {
    selectedAnnouncement.value = announcement
    deleteDialog.value = true
  }

  async function confirmDelete () {
    if (!selectedAnnouncement.value) {
      return
    }

    deleting.value = true
    clearMessages()

    try {
      const { error } = await supabase
        .from('announcements')
        .delete()
        .eq('id', selectedAnnouncement.value.id)

      if (error) {
        throw error
      }

      successMessage.value
        = 'Announcement deleted successfully.'

      deleteDialog.value = false
      selectedAnnouncement.value = null

      await loadAnnouncements()
    } catch (error) {
      console.error('Announcement delete error:', error)

      errorMessage.value
        = error?.message || 'Unable to delete announcement.'
    } finally {
      deleting.value = false
    }
  }

  function goBack () {
    router.push('/teacher-')
  }

  onMounted(() => {
    loadAnnouncements()
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

.empty-state {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
