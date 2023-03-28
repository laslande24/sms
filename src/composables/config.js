const base_link = 'http://localhost:8000' //'http://172.16.9.156:8000'
const meet_link = 'http://172.16.9.156:4000'

const errorMessage = (e) => {
  if (e.code == 'ERR_BAD_REQUEST') {
    return e.response.data.errors
  } else {
    e.message
  }
}

export { base_link, meet_link, errorMessage }
