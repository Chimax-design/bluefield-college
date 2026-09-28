<template>
  <v-card class="mx auto">
    <v-spacer />

    <v-app-bar color="info" density="compact" height="100">
      <template #prepend>
        <!-- <v-app-bar-nav-icon /> -->
        <img
          alt="Bluefield College Logo"
          class="logo"
          height="100"
          src="/bluefield-logo.png"
          width="100"
        >

      </template>

      <v-spacer />

      <div class="d-flex justify-center" w-100>
        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              Update
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/schooloutings">School Outings</v-btn>
              <v-btn class="mb-2" to="/academicevents">Academic Event</v-btn>
              <v-btn class="mb-2" to="/schactivity">School Activities</v-btn>
            </div>
          </v-list>
        </v-menu>

        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              About Us
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/whyus">Why Bluefiled College</v-btn>
              <v-btn class="mb-2" to="/strategy">Strategy 2030</v-btn>
              <v-btn class="mb-2" to="/philosophy">Philosophy</v-btn>
              <v-btn class="mb-2" to="/vandm">Our Vision and Mision</v-btn>
              <v-btn class="mb-2" to="/aboutus">About Bluefield College</v-btn>
            </div>
          </v-list>
        </v-menu>

        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              Admissions
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/admission">Admission Requirements</v-btn>
              <v-btn class="mb-2" to="/tuition">Tuition & Fees</v-btn>
            </div>
          </v-list>
        </v-menu>

        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              Administration
            </v-btn>
          </template>

          <v-list>
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/administraoff">Administrative Offices</v-btn>
              <v-btn class="mb-2" to="/staff">Department & Staff</v-btn>
              <v-btn class="mb-2" to="/calendar">Academic Calendar</v-btn>
              <v-btn class="mb-2" to="/Contact">Contact Us</v-btn>
            </div>
          </v-list>
        </v-menu>

        <v-menu>
          <template #activator="{ props }">
            <v-btn v-bind="props">
              School Services
            </v-btn>
          </template>

          <v-list>
            <!-- Courses submenu -->
            <div class="d-flex flex-column">
              <v-btn class="mb-2" to="/upload">Make Payment</v-btn>
              <v-btn class="mb-2" to="/services">Services</v-btn>
            </div></v-list>
        </v-menu>
        <!-- <v-app-bar-title>Bluefield College</v-app-bar-title> -->
      </div>
    </v-app-bar>

    <v-container fluid>
      <h1>James is a boy</h1>

      <v-card
        border
        class="mb-2"
        density="compact"
        prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
        subtitle="excursion"
        title="School Outings"

        variant="text"
      >
        <v-img
          cover
          height="128"
          src="https://picsum.photos/512/128?image=660"
        />

        <v-card-text />
      </v-card>

      <v-card
        border
        density="comfortable"
        prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
        subtitle="Salsa, merengue, y cumbia"
        title="Florida"
        variant="text"
      >
        <v-img
          cover
          height="128"
          src="https://picsum.photos/512/128?random"
        />

        <v-card-text>
          During my last trip to Florida, I spent 2 weeks traveling through
          the Everglades.
        </v-card-text>

        <v-container fluid>
          <v-card
            border
            class="mb-2"
            density="compact"
            prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Cuba"
            variant="text"
          >
            <v-img
              cover
              height="128"
              src="https://picsum.photos/512/128?image=660"
            />

            <v-card-text>
              During my last trip to South America, I spent 2 weeks traveling
              through Patagonia in Chile.
            </v-card-text>

            <template #actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
          </v-card>

          <v-card
            border
            density="comfortable"
            prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Florida"
            variant="text"
          >
            <v-img
              cover
              height="128"
              src="https://picsum.photos/512/128?random"
            />

            <v-card-text>
              During my last trip to Florida, I spent 2 weeks traveling through
              the Everglades.
            </v-card-text>
          </v-card>

          <v-card
            border
            class="mb-2"
            density="compact"
            prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Cuba"
            variant="text"
          >
            <v-img
              cover
              height="128"
              src="https://picsum.photos/512/128?image=660"
            />

            <v-card-text>
              During my last trip to South America, I spent 2 weeks traveling
              through Patagonia in Chile.
            </v-card-text>

            <template #actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
          </v-card></v-container></v-card>

      <v-card
        border
        density="comfortable"
        prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
        subtitle="Salsa, merengue, y cumbia"
        title="Florida"
        variant="text"
      >
        <v-img
          cover
          height="128"
          src="https://picsum.photos/512/128?random"
        />

        <v-card-text>
          During my last trip to Florida, I spent 2 weeks traveling through
          the Everglades.
        </v-card-text>

        <v-container fluid>
          <v-card
            border
            class="mb-2"
            density="compact"
            prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Cuba"
            variant="text"
          >
            <v-img
              cover
              height="128"
              src="https://picsum.photos/512/128?image=660"
            />

            <v-card-text>
              During my last trip to South America, I spent 2 weeks traveling
              through Patagonia in Chile.
            </v-card-text>

            <template #actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
          </v-card>

          <v-card
            border
            density="comfortable"
            prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Florida"
            variant="text"
          >
            <v-img
              cover
              height="128"
              src="https://picsum.photos/512/128?random"
            />

            <v-card-text>
              During my last trip to Florida, I spent 2 weeks traveling through
              the Everglades.
            </v-card-text>
          </v-card>

          <v-card
            border
            class="mb-2"
            density="compact"
            prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Cuba"
            variant="text"
          >
            <v-img
              cover
              height="128"
              src="https://picsum.photos/512/128?image=660"
            />

            <v-card-text>
              During my last trip to South America, I spent 2 weeks traveling
              through Patagonia in Chile.
            </v-card-text>

            <template #actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
          </v-card></v-container></v-card>

      <v-card
        border
        density="comfortable"
        prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
        subtitle="Salsa, merengue, y cumbia"
        title="Florida"
        variant="text"
      >
        <v-img
          cover
          height="128"
          src="https://picsum.photos/512/128?random"
        />

        <v-card-text>
          During my last trip to Florida, I spent 2 weeks traveling through
          the Everglades.
        </v-card-text>

        <v-container fluid>
          <v-card
            border
            class="mb-2"
            density="compact"
            prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Cuba"
            variant="text"
          >
            <v-img
              cover
              height="128"
              src="https://picsum.photos/512/128?image=660"
            />

            <v-card-text>
              During my last trip to South America, I spent 2 weeks traveling
              through Patagonia in Chile.
            </v-card-text>

            <template #actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
          </v-card>

          <v-card
            border
            density="comfortable"
            prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Florida"
            variant="text"
          >
            <v-img
              cover
              height="128"
              src="https://picsum.photos/512/128?random"
            />

            <v-card-text>
              During my last trip to Florida, I spent 2 weeks traveling through
              the Everglades.
            </v-card-text>
          </v-card>

        </v-container>
      </v-card>

    </v-container>
  </v-card>
</template>
