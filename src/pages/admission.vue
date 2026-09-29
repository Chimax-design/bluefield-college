<template>
  <v-card class="mx auto">
    <v-spacer />

    <AppNavbar />

    <v-container>

      <v-main class="pa-0">
        <v-card>
          <img
            alt="Bluefield College Logo"
            class="logo"
            height="100%"
            src="@/assets/form.png"
            width="100%"
          >
        </v-card>

        <h1>Admission Requirements</h1>
        <p>At Bluefield College, we are committed to admitting students who are eager to learn, grow, and contribute positively to our school community. Our admission process is simple, transparent, and designed to ensure every applicant has the opportunity to succeed.</p>

        <h2>Requirements</h2>
        <p>~ A completed Bluefield College Application Form.</p>
        <p>~ A copy of the applicant's Birth Certificate or National Identification document.</p>
        <p>~ Recent passport-sized photographs.</p>
        <p>~ Academic records or report cards from the previous school.</p>
        <p>~ A Transfer Certificate or Testimonial (for transfer students).</p>
        <p>~ Successful performance in the Bluefield College Entrance Assessment (where applicable).</p>
        <p>~ Participation in an admission interview with the student and parent or guardian.</p>
        <p>~ Evidence of payment of the prescribed application and admission fees.</p>
        <p>~ A completed medical history or health record (if required).</p>

        <h2>Admission Process</h2>
        <p>1. Obtain and complete the admission application form.</p>
        <p>2. Submit all required supporting documents.</p>
        <p>3. Sit for the entrance assessment (where applicable).</p>
        <p>4. Attend the admission interview.</p>
        <p>5. Receive an admission decision.</p>
        <p>6. Pay the acceptance and tuition fees.</p>
        <p>7. Complete registration and begin your academic journey at Bluefield College.</p>

        <h2>Who Can Apply?</h2>

        <p>Bluefield College welcomes applications from students of all backgrounds who demonstrate a commitment to learning, discipline, and personal growth. We seek students who are ready to embrace academic excellence, leadership, creativity, and innovation in a supportive and inclusive environment.
          We look forward to welcoming you into the Bluefield College family, where your future begins with excellence.</p>

        <v-btn class="mb-2" color="primary" to="/signin">Apply Now</v-btn>
      </v-main>
    </v-container>
  </v-card>
</template>

<script>
  import AppNavbar from '@/components/AppNavbar.vue'

  export default {
    components: {
      AppNavbar,
    },
  }
</script>
