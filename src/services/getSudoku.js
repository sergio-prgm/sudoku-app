const API_URL = 'http://localhost:4000/api/sudoku'

export default function getSudoku (num, difficulty) {
  return fetch(`${API_URL}/${difficulty}/${num}`, { method: 'GET' })
    .then(res => {
      if (!res.ok) throw new Error('Response from api is not ok')
      return res.json()
    })
}
