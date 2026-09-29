<template>
  <v-card class="mx auto">
    <v-spacer />

    <AppNavbar />

    <v-main class="pa-0">
      <v-container color="blue">

        <v-row>
          <v-col cols="12" md="6">
            <v-card>

              <v-img
                alt="Bluefield College Logo"
                class="logo"
                height="100%"
                src="@/assets/entrance.png"
                width="100%"
              />
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <h1> ~ VISION</h1>
            <h3>1. Academic Excellence Focus</h3>
            <p>To a leading centre of academic excellence that nutures globally competitive, innovative, and responsible leaders.</p>
            <h3>2. Character + Faith-Based</h3>
            <p> To raise a generation of disciplined, God-fearing, and purpose-driven individuals who will transform the society </p>
          </v-col>
        </v-row>

        <h3>3. Future/Tech Focus</h3>
        <p>To inspire lifelong learners who are creative, technologically adept, and equipped to solve tommorrow's challenges.</p>
        <h3>4. Holistic Development</h3>
        <p>To develop well-rounded individuals who excel academically, socially, and morally in acaring community.</p>

        <h1>~ OUR MISSION</h1>
        <h3>1. Standard Nigerian Private School</h3>
        <p> Toprovide a safe, disciplined, and stimulatig learning environment wher every child is equipped with sound knowledge, strong character, and practical skills for success.</p>
        <h3>2. Holistic/British Cirriculum Style</h3>
        <p>To deliver a broad, balanced, and enriched cirriculum that fosters intellectual curiosity, creativity, and respect for others, enabling each student to achieve their full potentials.</p>
        <h3>3. Short and Punchy</h3>
        <p>To nuture minds, build character, and empower futures through quality education and values.</p>
        <h3>4. Community/Service Focused</h3>
        <p>To educate students with excellence and integrity, preparing them to serve their communities and lead with compassion.</p>
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
