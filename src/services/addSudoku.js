const API_URL = 'http://localhost:4000/api'

export default function addSudoku ({ original, token: jwt }) {
  console.log(jwt)
  return fetch(`${API_URL}/sudokus`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify({ original })
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return res.json()
  }).then(res => {
    const { value: sudoku } = res
    return sudoku
  })
}
