import { URL_LOGIN } from './settings'

export default function login ({ username, password }) {
  return fetch(URL_LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return res.json()
  }).then(res => {
    const { token: jwt, username } = res
    return { jwt, username }
  })
}
