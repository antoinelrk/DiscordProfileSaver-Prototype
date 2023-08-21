<template>
    <form class="create-profile-form" @submit="handleSubmit" method="POST" enctype="multipart/form-data">
        <div class="form-group">
            <label for="label"></label>
            <input type="text" name="label" id="label" :v-model="label" placeholder="Label du profile">
        </div>
        <div class="form-group">
            <label for="display_name"></label>
            <input type="text" name="display_name" :v-model="display_name" id="display_name" placeholder="Votre pseudo affiché">
        </div>
        <div class="form-group">
            <label for="profile_picture"></label>
            <input type="text" name="profile_picture" :v-model="profile_picture" id="profile_picture" placeholder="URL de photo de profil">
        </div>
        <div class="form-group">
            <label for="banner_picture"></label>
            <input type="text" name="banner_picture" :v-model="banner_picture" id="banner_picture" placeholder="URL de la bannière">
        </div>

        <div class="form-group">
            <label for="primary">Couleur principale:</label>
            <input type="color" name="primary" :v-model="primary" id="primary" placeholder="Couleur principale">
        </div>
        <div class="form-group">
            <label for="accent">Couleur secondaire:</label>
            <input type="color" name="accent" :v-model="accent" id="accent" placeholder="Couleur secondaire">
        </div>

        <button type="submit">Enregistrer</button>
    </form>
</template>

<script setup>
import { useProfilesStore } from '../stores/profilesStore'
const store = useProfilesStore()

const handleSubmit = (e) => {
    e.preventDefault()

    store.addProfile({
        label: label.value,
        display_name: display_name.value,
        profile_picture: profile_picture.value,
        banner_picture: banner_picture.value,
        colors: {
            primary: primary.value,
            accent: accent.value
        }
    })

    resetForm()
}

const resetForm = () => {
    label.value = ""
    display_name.value = ""
    profile_picture.value = ""
    primary.value = ""
    accent.value = ""
}
</script>

<style lang="scss">
form.create-profile-form {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 1em;
    row-gap: 1em;
    border-radius: 12px;
    min-width: 300px;
    background-color: var(--background-alt);

    .form-group {
        display: flex;
        flex-direction: column;

        &.row {
            flex-direction: row;
        }

        input[type=text] {
            display: flex;
            height: 40px;
            border: none;
            background-color: var(--background);
            padding: 0 .5em;
            outline: none;
            border-radius: 6px;
            color: var(--tonic);
        }

    }

    button {
        display: flex;
        margin: 0 auto;
        padding: 0 1em;
        width: auto;
        height: 40px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        background-color: var(--background);
        color: var(--foreground);
        transition: color .25s ease, background-color .25s ease;

        &:hover {
            transition: color .25s ease, background-color .25s ease;
            background-color: var(--tonic);
            color: var(--background);
        }
    }
}
</style>