import { URL_USERS } from './settings'

export default function getUserInfo ({ token: jwt }) {
  return fetch(URL_USERS, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    }
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return res.json()
  }).then(([res]) => {
    const { sudokus } = res
    return sudokus
  })
}
