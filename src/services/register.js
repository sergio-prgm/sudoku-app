import { URL_USERS } from './settings'

export default function register ({ username, password }) {
  return fetch(URL_USERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return true
  })
}
