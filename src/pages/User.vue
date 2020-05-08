<template>
    <div>
        <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        bordered
        content-class="bg-grey-3">
            <q-list>
                <EssentialLink
                        v-for="link in essentialLinks"
                        :key="link.title"
                        v-bind="link"
                        />
            </q-list>
        </q-drawer>

        <q-page-container>
        <router-view />
        </q-page-container>
    </div>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
export default {
    name: 'User',
    components: {
        EssentialLink
    },
    props: ['drawer'],
    data() {
        return {
            miniState: true,
            essentialLinks: [
                {
                    title: 'Dashboard',
                    link: '/user',
                    icon: 'dashboard'
                },
                {
                    title: 'Self Report Data',
                    link: '/user/selfReport',
                    icon: 'poll'
                },
                {
                    title: 'Connect IoT Devices',
                    link: '/user/iotConnect',
                    icon: 'devices_other'
                }
            ]
        }
    }
}
</script>