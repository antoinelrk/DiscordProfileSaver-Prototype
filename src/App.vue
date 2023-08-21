<template>
    <main class="home">
        <section class="left">
            <ListProfiles :profiles="data"/>
        </section>
        <section class="right">
            <CreateProfileForm />
        </section>
    </main>
</template>

<script setup>
import ListProfiles from './components/ListProfiles.vue';
import CreateProfileForm from './components/CreateProfileForm.vue';
import { useProfilesStore } from './stores/profilesStore'
import {computed, reactive} from 'vue'
const store = useProfilesStore()

const data = computed (() => {
    return store.profiles
})

</script>

<style lang="scss" scoped>
section {
    display: flex;
    width: 50%;
    height: 100vh;

    &.left {
        border-right: solid 1px rgba(white, .2);
    }
}
</style>
