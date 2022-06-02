const API_URL = 'http://localhost:4000/api'

export default function getUserInfo ({ token: jwt }) {
  return fetch(`${API_URL}/users`, {
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
