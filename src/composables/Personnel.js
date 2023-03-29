import { ref } from 'vue'
import axios from 'axios'
import { base_link, errorMessage } from '@/composables/config'

const getPersonnel = () => {
  const personnels = ref(null)
  const error = ref(null)
  const load = async () => {
    try {
      let data = await axios.get(base_link + '/school/personnel')
      let res = await data
      if (!res.data.success) {
        throw res.data.error
      }
      personnels.value = res.data.data

      console.log(data)
    } catch (e) {
      error.value = e
      console.log(e)
    }
  }

  return { personnels, error, load }
}

const addPersonnel = () => {
  const message = ref(null)
  const saveError = ref(null)
  const save = async (personnel) => {
    try {
      let data = await axios.post(base_link + '/school/personnel', personnel)
      let res = await data
      if (!res.data.success) {
        throw res.data.errors
      }
      message.value = res.data.data
    } catch (e) {
      saveError.value = errorMessage(e)
      console.log('error', saveError.value)
    }
  }

  return { message, saveError, save }
}

const deletePersonnel = () => {
  const msg = ref(null)
  const deleteError = ref(null)
  const loadDelete = async (id) => {
    try {
      let data = await axios.delete(base_link + '/school/personnel/' + id)
      let res = await data
      if (!res.data.success) {
        throw res.data.error
      }
      msg.value = res.data.data
      console.log(msg.value)
    } catch (e) {
      deleteError.value = e
      console.log('error', deleteError.value)
    }
  }

  return { msg, deleteError, loadDelete }
}
const uploadPersonnel = () => {
  const msgFile = ref(null)
  const errorFile = ref(null)
  const upload = async (form) => {
    try {
      let data = await axios.post(
        base_link + '/school/personnel/upload',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      let res = await data
      if (!res.data.success) {
        console.log(res.data)
        throw res.data.error
      }
      errorFile.value = res.data.notlist
      msgFile.value = res.data.data
    } catch (e) {
      errorFile.value = e
      console.log('error', errorFile.value)
    }
  }

  return { msgFile, errorFile, upload }
}

const updatePersonnel = () => {
  const updatemsg = ref(null)
  const updateError = ref(null)
  const update = async (personnel, id) => {
    try {
      let data = await axios.put(
        base_link + '/school/personnel/' + id,
        personnel,
      )
      let res = await data
      if (!res.data.success) {
        throw res.data.errors
      }
      updatemsg.value = res.data.data
    } catch (e) {
      updateError.value = errorMessage(e)
      console.log('error', updateError.value)
    }
  }

  return { updatemsg, updateError, update }
}

export {
  getPersonnel,
  uploadPersonnel,
  addPersonnel,
  deletePersonnel,
  updatePersonnel,
}
