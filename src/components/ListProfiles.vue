<template>
    <ul class="list-profiles">
        <ProfileEntry v-for="(profile, index) in props.profiles" :key="index" :index="index" :profile="profile" />
    </ul>
</template>

<script setup>
import ProfileEntry from './ProfileEntry.vue';
import { ref, computed, reactive, defineProps } from 'vue'

const props = defineProps({
    profiles: Array
})
</script>

<style lang="scss">
ul.list-profiles {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 1em;
    row-gap: 1em;
    overflow-y: auto;
    box-sizing: content-box;

    &::-webkit-scrollbar {
        width: 16px;
    }

    &::-webkit-scrollbar-track {
        background-color: var(--background);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--background-alt);
        border: solid 4px var(--background);
        border-radius: 9999px;
        cursor: pointer;
    }
}
</style>