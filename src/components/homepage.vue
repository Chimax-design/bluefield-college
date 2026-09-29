<template>
  <v-card class="mx-auto">
    <v-spacer />

    <v-layout>
      <v-app>
        <AppNavbar />

        <v-main>
          <v-container fluid>

            <!-- WELCOME SECTION -->
            <v-card
              border
              class="mb-6"
              density="compact"
              prepend-avatar=""
              subtitle="Mrs Davis"
              title="Administrator"
              variant="text"
            >
              <v-img
                alt="School Administrator"
                cover
                height="50%"
                src="@/assets/campus.jpg"
                width="100%"
              />
            </v-card>

            <v-card-text>
              WELCOME TO BLUEFIELD COLLEGE, A PLACE OF EXCELLENCE IN EDUCATION.
              OUR MISSION IS TO PROVIDE QUALITY EDUCATION AND FOSTER A CULTURE
              OF INNOVATION AND LEADERSHIP AMONG OUR STUDENTS. WE ARE COMMITTED
              TO NURTURING THE POTENTIAL OF EACH STUDENT AND PREPARING THEM FOR
              SUCCESS IN THEIR FUTURE ENDEAVORS. Over the years, Bluefield
              College has established itself as a beacon of academic excellence,
              offering a wide range of programs and opportunities for students
              to thrive. Our dedicated faculty and staff are passionate about
              creating a supportive and inclusive learning environment where
              students can grow both academically and personally. We invite you
              to explore our website to learn more about our programs, campus
              life, and the vibrant community that makes Bluefield College a
              unique and inspiring place to learn.
            </v-card-text>

            <!-- ================================= -->
            <!-- BLUEFIELD PORTALS SECTION -->
            <!-- ================================= -->

            <div class="portal-section mb-8">
              <div class="text-center mb-6">
                <h1 class="portal-title">
                  Bluefield College Portals
                </h1>

                <p class="portal-subtitle">
                  Access your dedicated school portal quickly and securely.
                </p>
              </div>

              <v-row justify="center">

                <!-- STUDENT PORTAL -->
                <v-col cols="12" md="5">
                  <v-card
                    class="portal-card student-card"
                    elevation="6"
                    rounded="xl"
                  >
                    <div class="portal-icon student-icon">
                      <v-icon size="55">
                        mdi-school
                      </v-icon>
                    </div>

                    <v-card-title class="text-center text-h5 font-weight-bold">
                      Student Portal
                    </v-card-title>

                    <v-card-text class="text-center">
                      <p class="mb-4">
                        Access your student dashboard, results, payment
                        information, timetable, announcements and other
                        academic resources.
                      </p>

                      <v-btn
                        block
                        color="info"
                        rounded="lg"
                        size="large"
                        to="/studentlogin"
                      >
                        <v-icon start>
                          mdi-login
                        </v-icon>

                        Student Login
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>

                <!-- TEACHER PORTAL -->
                <v-col cols="12" md="5">
                  <v-card
                    class="portal-card teacher-card"
                    elevation="6"
                    rounded="xl"
                  >
                    <div class="portal-icon teacher-icon">
                      <v-icon size="55">
                        mdi-human-male-board
                      </v-icon>
                    </div>

                    <v-card-title class="text-center text-h5 font-weight-bold">
                      Teacher Portal
                    </v-card-title>

                    <v-card-text class="text-center">
                      <p class="mb-4">
                        Access teaching resources, student information,
                        classes, results, timetable and school announcements.
                      </p>

                      <v-btn
                        block
                        color="indigo"
                        rounded="lg"
                        size="large"
                        to="/teacherlogin"
                      >
                        <v-icon start>
                          mdi-login
                        </v-icon>

                        Teacher Login
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-col>

              </v-row>
            </div>

            <!-- EXISTING CARDS -->
            <v-row>
              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mb-2"
                  density="compact"
                  prepend-avatar=""
                  title="Press Stop"
                  variant="text"
                >
                  <v-img
                    alt="Bluefield College Campus"
                    cover
                    src="@/assets/press.png"
                    width="100%"
                  />

                  <v-card-text>
                    Get update on the latest news and events happening at
                    Bluefield College. Stay informed about upcoming activities,
                    achievements, and important announcements. Our news section
                    is your go-to source for all things Bluefield College.
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mb-2"
                  density="compact"
                  prepend-avatar=""
                  title="Staff Portal"
                  variant="text"
                >
                  <v-img
                    alt="Bluefield College Campus"
                    cover
                    src="@/assets/staff.png"
                  />

                  <v-card-text>
                    Get access to the staff portal for important resources,
                    updates, and communication. For staff members, the portal
                    provides a centralized hub for accessing essential
                    information, tools, and resources related to their roles and
                    responsibilities.
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mb-2"
                  density="compact"
                  prepend-avatar=""
                  title="Alumni"
                  variant="text"
                >
                  <v-img
                    alt="Bluefield College Campus"
                    cover
                    src="@/assets/alumni.png"
                  />

                  <v-card-text>
                    Connect with fellow alumni and stay updated on alumni events
                    and initiatives. The alumni section is dedicated to fostering
                    connections among former students and keeping them informed
                    about upcoming events and opportunities.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <!-- PROGRAMMES -->
            <h1 class="text-center">
              Programmes Designed for Impact
            </h1>

            <h2 class="text-center">
              Our Academic structure is designed to prepare students for
              real-world challenges, advanced research, and leadership
              opportunities.
            </h2>

            <v-row>
              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mx-auto"
                  color="surface-variant"
                  image="@/assets/blu.png"
                  max-height="600"
                  max-width="340"
                >
                  <template #actions>
                    <v-btn
                      append-icon="mdi-chevron-right"
                      block
                      color="red-lighten-2"
                      text="WEAC"
                      variant="outlined"
                    />
                  </template>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mx-auto"
                  color="surface-variant"
                  image="@/assets/blu.png"
                  max-height="600"
                  max-width="340"
                >
                  <template #actions>
                    <v-btn
                      append-icon="mdi-chevron-right"
                      block
                      color="black"
                      text="NECO"
                      variant="outlined"
                    />
                  </template>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card
                  border
                  class="mx-auto"
                  color="surface-variant"
                  image="@/assets/blu.png"
                  max-height="600"
                  max-width="340"
                >
                  <template #actions>
                    <v-btn
                      append-icon="mdi-chevron-right"
                      block
                      color="red-lighten-2"
                      text="BECE"
                      variant="outlined"
                    />
                  </template>
                </v-card>
              </v-col>
            </v-row>

            <!-- ACADEMIC ACTIVITIES -->
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-card>
                    <img
                      alt="Students"
                      class="logo"
                      height="100%"
                      src="@/assets/college.png"
                      width="100%"
                    >
                  </v-card>
                </v-col>

                <v-col cols="12" md="6">
                  <h1>ACADEMIC ACTIVITIES</h1>

                  <p>
                    Bluefield College was founded in the year 2012, by a group
                    of visionary educators and community leaders who shared a
                    common goal: to create an institution that would provide
                    high-quality education and foster a culture of innovation
                    and leadership.
                  </p>
                </v-col>
              </v-row>
            </v-card-text>

            <!-- NEWS -->
            <v-row>
              <v-col cols="12" md="6">
                <h1>Our Latest News and Upcoming Blog Posts</h1>
              </v-col>

              <v-col cols="12" md="6">
                <v-btn
                  color="primary"
                  size="large"
                  to="gallery"
                  variant="tonal"
                >
                  VIEW ALL RECENT POSTS
                </v-btn>
              </v-col>
            </v-row>

            <!-- NEWS CARDS -->
            <v-row>
              <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344">
                  <v-img cover height="200px" src="@/assets/game.png" />

                  <v-card-title>Sports</v-card-title>

                  <v-card-subtitle>
                    Bluefield Female football match
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn color="orange-lighten-2" text="Explore" />

                    <v-spacer />

                    <v-btn
                      :icon="
                        showSports
                          ? 'mdi-chevron-up'
                          : 'mdi-chevron-down'
                      "
                      @click="showSports = !showSports"
                    />
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="showSports">
                      <v-divider />

                      <v-card-text>
                        There is no restriction of gender in sport activities,
                        therefore Bluefield is featuring its first female
                        football match on the 23rd of November 2028.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344">
                  <v-img cover height="200px" src="@/assets/exhibition.png" />

                  <v-card-title>Competitions</v-card-title>

                  <v-card-subtitle>
                    Bluefields participation in the international competition
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn color="orange-lighten-2" text="Explore" />

                    <v-spacer />

                    <v-btn
                      :icon="
                        showCompetitions
                          ? 'mdi-chevron-up'
                          : 'mdi-chevron-down'
                      "
                      @click="showCompetitions = !showCompetitions"
                    />
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="showCompetitions">
                      <v-divider />

                      <v-card-text>
                        Bluefield College has recently participated in an
                        international competition, showcasing the talents and
                        skills of our students on a global stage.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card class="mx-auto" max-width="344">
                  <v-img cover height="200px" src="@/assets/robotics.png" />

                  <v-card-title>Scholarships</v-card-title>

                  <v-card-subtitle>
                    Bluefield College Scholarship Awards
                  </v-card-subtitle>

                  <v-card-actions>
                    <v-btn color="orange-lighten-2" text="Explore" />

                    <v-spacer />

                    <v-btn
                      :icon="
                        showScholarships
                          ? 'mdi-chevron-up'
                          : 'mdi-chevron-down'
                      "
                      @click="showScholarships = !showScholarships"
                    />
                  </v-card-actions>

                  <v-expand-transition>
                    <div v-show="showScholarships">
                      <v-divider />

                      <v-card-text>
                        Bluefield College is proud to announce the recipients
                        of our prestigious scholarships for the academic year.
                      </v-card-text>
                    </div>
                  </v-expand-transition>
                </v-card>
              </v-col>
            </v-row>

            <!-- DISCOVER -->
            <h1 class="text-center">
              Discover Bluefield College
            </h1>

            <v-tabs
              v-model="tab"
              align-tabs="center"
              color="deep-purple-accent-4"
            >
              <v-tab :value="1">
                Gallery
              </v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
              <v-tabs-window-item
                v-for="n in 3"
                :key="n"
                :value="n"
              >
                <v-container fluid>
                  <v-row>
                    <v-col
                      v-for="(image, i) in gallery"
                      :key="i"
                      cols="12"
                      md="4"
                    >
                      <v-card>
                        <v-img cover height="250" :src="image" />
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tabs-window-item>
            </v-tabs-window>

            <v-btn
              class="mb-2"
              color="primary"
              to="/signin"
            >
              Apply Now
            </v-btn>

            <!-- FAQ -->
            <v-col cols="12" md="4">
              <h2 class="text-center mb-4">
                Frequently Asked Questions
              </h2>

              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    Admission Requirements
                  </v-expansion-panel-title>

                  <v-expansion-panel-text>
                    Applicants must meet the minimum academic requirements and
                    submit all required documents before admission can be
                    considered. All payments made must be accounted for by
                    uploading receipt.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    Tuition Fees
                  </v-expansion-panel-title>

                  <v-expansion-panel-text>
                    Tuition fees vary by class and participation in academic
                    activities, also academic outings and other services
                    rendered within the school premises for the children's
                    comfort.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-title>
                    School Facilities
                  </v-expansion-panel-title>

                  <v-expansion-panel-text>
                    Bluefield College offers modern classrooms, libraries,
                    laboratories, and recreational facilities to aid proper and
                    upgraded learning.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>

            <!-- FOOTER -->
            <v-footer
              class="text-center d-flex flex-column ga-2 py-4"
              color="indigo-lighten-1"
            >
              <div class="d-flex ga-3">
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  density="comfortable"
                  :icon="icon"
                  variant="text"
                />
              </div>

              <v-divider
                class="my-2"
                thickness="2"
                width="50"
              />

              <div class="text-body-small font-weight-regular opacity-60">
                © 2012 Bluefield College. All Rights Reserved. At Bluefield
                College, we strive to create an environment that encourages
                learning, creativity, integrity, and personal growth while
                equipping students with the knowledge and skills needed to excel
                in their chosen careers and make meaningful contributions to
                society.
                123, Education avenue, Abuja, Nigeria.
                (+2341234567890)
                info@bluefieldcollege.edu.ng
              </div>

              <v-divider />

              <div>
                {{ new Date().getFullYear() }} —
                <strong>Bluefield College</strong>
              </div>

              <div>@copyright</div>
            </v-footer>

          </v-container>
        </v-main>
      </v-app>
    </v-layout>
  </v-card>
</template>

<script>
  import ball from '@/assets/ball.png'
  import classImg from '@/assets/class.png'
  import entrance from '@/assets/entrance.png'
  import lab from '@/assets/lab.png'
  import laptop from '@/assets/laptop.png'
  import library from '@/assets/library.png'
  import AppNavbar from '@/components/AppNavbar.vue'

  export default {
    components: {
      AppNavbar,
    },
    data () {
      return {
        drawer: false,

        showSports: false,
        showCompetitions: false,
        showScholarships: false,

        gallery: [
          entrance,
          classImg,
          lab,
          laptop,
          ball,
          library,
        ],
      }
    },
  }
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  height: 90px;
  padding-left: 10px;
}

.app-logo {
  width: 150px;
  height: 75px;
  object-fit: contain;
  display: block;
}

.portal-section {
  padding: 35px 20px;
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    #f5f9ff 0%,
    #eef5ff 100%
  );
}

.portal-title {
  font-size: 32px;
  font-weight: 700;
  color: #1565c0;
}

.portal-subtitle {
  font-size: 17px;
  color: #666;
}

.portal-card {
  min-height: 300px;
  padding: 20px;
  transition: 0.3s ease;
}

.portal-card:hover {
  transform: translateY(-6px);
}

.portal-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.student-icon {
  background: #e3f2fd;
  color: #1565c0;
}

.teacher-icon {
  background: #ede7f6;
  color: #512da8;
}

.student-card {
  border-top: 5px solid #1565c0;
}

.teacher-card {
  border-top: 5px solid #512da8;
}
</style>
