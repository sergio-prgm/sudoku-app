const API_URL = 'http://localhost:4000/api'

export default function addSudoku ({ ref, token: jwt }) {
  console.log(jwt)
  return fetch(`${API_URL}/sudoku`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify({ ref })
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return res.json()
  }).then(res => {
    const { value: sudoku } = res
    return sudoku
  })
}
