import axios from 'axios'

const urlAPI = 'https://localhost:3000'

const authorizationToken = 'Basic YXBpX2FwcF9jb2xhYm9yYWRvcjpCdXNjYTIwMjE='
axios.defaults.headers.common.Authorization = authorizationToken


export default {
  getTickets: (callback) => {
    const urlInfo = urlAPI + 'tickets'

    axios.get(urlInfo).then((info) => {
      console.log('****tickets', info)
      if (callback) {
        callback(info)
      }
    })
  },

  getUsers: (callback) => {
    const urlInfo = urlAPI + 'usuarios'

    axios.get(urlInfo).then((info) => {
      console.log('****usuarios', info)
      if (callback) {
        callback(info)
      }
    })
  }
}