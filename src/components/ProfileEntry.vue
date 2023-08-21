<template>
    <li class="profile-entry">
        <div class="images-wrapper">
            <img :src="profile.profile_picture" alt="" class="profile-picture">
            <img :src="profile.banner_picture" alt="" class="banner-picture">
        </div>
        <div class="profile-informations">
            <span class="display-name">{{ profile.display_name }}</span>
            <span class="label">({{ profile.label }})</span>
            <ul class="colors-list">
                <li class="color-entry" :style="`background-color: ${profile.colors.primary};`">{{ profile.colors.primary }}</li>
                <li class="color-entry" :style="`background-color: ${profile.colors.accent};`">{{ profile.colors.accent }}</li>
            </ul>
        </div>
        <button class="remove-button-container" @click="handleRemove">
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </figure>
        </button>
    </li>
</template>

<script setup>
import { useProfilesStore } from '../stores/profilesStore'
const store = useProfilesStore()

const props = defineProps({
    profile: Object,
    index: Number
})

const handleRemove = () => {
    store.deleteProfile(props.index)
}
</script>

<style lang="scss">
li.profile-entry {
    position: relative;
    display: flex;
    width: 100%;
    background-color: var(--background-alt);
    padding: 1em;
    border-radius: 8px;

    .images-wrapper {
        display: flex;
        position: relative;
        width: 50%;
    
        img.banner-picture {
            position: relative;
            width: 100%;
            height: 180px;
            border-radius: 8px;
            object-fit: cover;
            object-position: center;
            border: solid 8px var(--background);
            z-index: 50;
        }

        img.profile-picture {
            position: absolute;
            bottom: 1em;
            right: 0;
            transform: translateX(40px);
            width: 88px;
            height: 88px;
            border-radius: 9999px;
            border: solid 8px var(--background);
            z-index: 51;
            object-fit: cover;
            object-position: center;
        }

    }

    .profile-informations {
        display: flex;
        flex-direction: column;
        margin-left: calc(44px + .5em);
        width: calc(50% - 44px);

        span.display-name {
            display: flex;
            margin: 0 auto;
            font-size: 1.5em;
        }

        span.label {
            display: flex;
            margin: 0 auto;
            font-size: 12px;
        }

        ul.colors-list {
            display: flex;
            flex-direction: column;
            margin: auto;
            row-gap: .5em;

            li.color-entry {
                display: flex;
                margin: auto;
                padding: .1em .45em;
                text-transform: uppercase;
                letter-spacing: 1px;
                border-radius: 6px;
                background-color: var(--background);
                text-shadow: 0 0 1px black;
                color: inherit;
            }
        }
    }

    button.remove-button-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 1em;
        right: 1em;
        width: 32px;
        height: 32px;
        background-color: var(--background-alt);
        border-radius: 4px;
        transition: background-color .25s ease;

        &:hover {
            background-color: var(--background);
            transition: background-color .25s ease;

            figure {
                fill: var(--red);
                transition: fill .25s ease;
            }
        }

        figure {
            display: flex;
            width: 60%;
            height: 60%;
            fill: var(--background);
            transition: fill .25s ease;
        }
    }
}
</style>