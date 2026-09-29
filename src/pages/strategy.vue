<template>
  <v-card class="mx auto">
    <v-spacer />

    <AppNavbar />

    <v-main class="pa-0">
      <v-container>

        <v-card>
          <v-img
            alt="Strategy 2030"
            class="strategy-image"
            height="100%"
            src="@/assets/strategy.png"
            width="100%"
          />
        </v-card>

        <h1>STRATEGY 2030</h1>
        <h2>Strategic Pillar 1: Academic Excellence</h2>
        <h3>Objectives</h3>
        <p>~ Deliver a curriculum aligned with international standards.</p>
        <p>~ Strengthen Science, Technology, Engineering, Arts, and Mathematics (STEAM) education.</p>
        <p>~ Improve student performance and graduation rates.</p>
        <p>~ Promote research, innovation, and critical thinking.</p>
        <p>~ Introduce project-based and experiential learning.</p>
        <h3>Success Indicators</h3>
        <p>~ Improved student performance and graduation rates.</p>
        <p>~ Increased research output and innovation.</p>
        <p>~ Improved national examination results.</p>
        <p>~ Increased student participation in academic competitions.</p>

        <h2>Strategic Pillar 2: Digital Transformation</h2>
        <h3>Objectives</h3>
        <p>~ Integrate modern technology into teaching and learning.</p>
        <p>~ Establish smart classrooms across the campus.</p>
        <p>~ Expand online learning opportunities.</p>
        <p>~ Equip students with digital literacy and artificial intelligence (AI) skills.</p>
        <p>~ Upgrade ICT infrastructure and cybersecurity.</p>
        <h3>Success Indicators</h3>
        <p>~ 100% digitally enabled classrooms.</p>
        <p>~ Reliable campus-wide internet access.</p>
        <p>~ All students receive digital skills certification before graduation.</p>

        <h2>Strategic Pillar 3: Students Development and Wellbeing</h2>
        <h3>Objectives</h3>
        <p>~ Promote leadership, discipline, and integrity.</p>
        <p>~ Expand extracurricular and sporting activities.</p>
        <p>~ Strengthen career guidance and counseling services.</p>
        <p>~ Improve student health, safety, and welfare.</p>
        <p>~ Encourage entrepreneurship and innovation.</p>
        <h3>Success Indicators</h3>
        <p>~ Increased student participation in clubs and leadership programs.</p>
        <p>~ Higher student satisfaction ratings.</p>
        <p>~ Growth in student-led businesses and innovation projects.</p>

        <h2>Strategic Pillar 4: Staff Excellence </h2>
        <h3>Objectives</h3>
        <p>~ Recruit and retain highly qualified educators.</p>
        <p>~ Invest in continuous professional development.</p>
        <p>~ Foster innovation in teaching practices.</p>
        <p>~ Encourage research and collaboration.</p>
        <p>~ Recognize excellence through rewards and incentives.</p>
        <h3>Success Indicators</h3>
        <p>~ Annual staff development programs.</p>
        <p>~ Improved staff retention.</p>
        <p>~ Increased research publications and professional certifications.</p>

        <h2>Strategic Pillar 5: Infrastructure and Sustainablibity</h2>
        <h3>Objectives</h3>
        <p>~ Expand classrooms, laboratories, and libraries.</p>
        <p>~ Construct modern science and innovation centers.</p>
        <p>~ Develop environmentally sustainable facilities.</p>
        <p>~ Improve campus security systems.</p>
        <p>~ Enhance recreational and sporting facilities.</p>
        <h3>Success Indicators</h3>
        <p>~ Completion of new academic buildings.</p>
        <p>~ Green campus initiatives implemented.</p>
        <p>~ Modern learning environments available to all students.</p>

        <h2>Strategic Pillar 6: Community Engagement and  Global Partnerships</h2>
        <h3>Objectives</h3>
        <p>~ Strengthen partnerships with universities and industries.</p>
        <p>~ Increase community service initiatives.</p>
        <p>~ Promote cultural diversity and international exchange programs.</p>
        <p>~ Build strong alumni networks.</p>
        <p>~ Encourage volunteerism and social responsibility.</p>
        <h3>Success Indicators</h3>
        <p>~ New local and international partnerships.</p>
        <p>~ Increased student participation in community outreach.</p>
        <p>~ Expanded internship and exchange opportunities.</p>
      </v-container>
    </v-main>
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
