<template>
  <q-layout view="hHh Lpr lff">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
          v-if="$q.platform.is.mobile && this.$route.path !== '/'"
          v-model="drawer"
        />
        <q-btn flat no-caps :label="title" to="/"/>
        <q-tabs v-model="tab" shrink v-if="!$q.platform.is.mobile">
          <q-route-tab
          no-caps
          v-for="link in links"
          :key="link"
          v-bind="link"/>
        </q-tabs>
        <q-space/>
        <q-btn dense flat label="Log In" to="/login"/>
      </q-toolbar>
      <q-tabs v-model="tab" shrink v-if="$q.platform.is.mobile">
          <q-route-tab
          no-caps
          v-for="link in links"
          :key="link"
          v-bind="link"/>
        </q-tabs>
    </q-header>
    <q-page-container>
      <router-view :drawer="drawer" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MainLayout',
  computed: {
    ...mapState('defaultStore', ['userDetails']),
    title() {
      const currentPath = this.$route.fullPath
      if (currentPath == '/') return 'Red Cross Data'
      else if (currentPath == '/diseases') return 'Disease Dashboard'
      else if (currentPath == '/diseases/data') return 'Disease Data'
      else if (currentPath == '/diseases/trackNew') return 'Track New Disease'
      else if (currentPath == '/user') return 'User Dashboard'
      else if (currentPath == '/user/selfReport') return 'Self Report Data'
      else if (currentPath == '/user/iotConnect') return 'Connect IoT Device'
      return 'Red Cross Data'
    }
  },
  data () {
    return {
      drawer: false,
      links: [
        {
          label: 'Tracked Diseases',
          to: '/diseases'
        },
        {
          label: 'User',
          to: '/user'
        }
      ]
    }
  }
}
</script>
