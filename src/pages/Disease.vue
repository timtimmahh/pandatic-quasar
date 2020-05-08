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
    name: 'Disease',
    components: {
        EssentialLink
    },
    props: ['drawer'],
    data() {
        return {
            miniState: true,
            essentialLinks: [
                {
                    title: 'Overview',
                    link: '/diseases',
                    icon: 'dashboard'
                },
                {
                    title: 'Current Disease Data',
                    link: '/diseases/data',
                    icon: 'bar_chart'
                },
                {
                    title: 'Track A New Disease',
                    link: '/diseases/trackNew',
                    icon: 'add'
                }
            ]
        }
    }
}
</script>