<template>
  <div class="flex q-pa-md">
    <q-card class="full-width">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <login-register :tab="tab"/>
          </q-tab-panel>

          <q-tab-panel name="register">
            <login-register :tab="tab"/>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </div>
</template>

<script lang="ts">
import LoginRegister from 'components/LoginRegister.vue'

export default {
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    LoginRegister
  }
}
</script>
