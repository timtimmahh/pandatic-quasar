import { mapActions } from 'vuex';
<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions('defaultStore', ['handleAuthStateChanged'])
  },
  mounted() {
      this.handleAuthStateChanged()
  }
}
</script>
