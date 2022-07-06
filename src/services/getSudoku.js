import { URL_SUDOKU } from './settings'

export default function getSudoku (num, difficulty, token) {
  return fetch(`${URL_SUDOKU}/${difficulty}/${num}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => {
      if (!res.ok) throw new Error('Response from api is not ok')
      return res.json()
    })
}
