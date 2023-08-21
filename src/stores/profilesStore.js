import { defineStore } from "pinia"
import { v4 as uuidv4 } from 'uuid';
import { reactive } from 'vue'
import Cookie from 'js-cookie'

export const useProfilesStore = defineStore('profile', () => {
    let profiles = reactive(Cookie.get('data') !== undefined ? JSON.parse(Cookie.get('data')) : [])

    const updateDataStorage = () => Cookie.set('data', JSON.stringify(profiles))

    const addProfile = (payload) => {
        profiles.push({ ...{ id: uuidv4() }, ...payload })
        updateDataStorage()
    }


    const updateProfile = (id, payload) => {
        // TODO: Coming soon !
        updateDataStorage()
    }

    const deleteProfile = (index) => {
        profiles.splice(index, 1)[0]
        updateDataStorage()
    }

    return {
        profiles,
        addProfile,
        updateProfile,
        deleteProfile
    }
})