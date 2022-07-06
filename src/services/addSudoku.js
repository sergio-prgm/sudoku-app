import { URL_SUDOKU } from './settings'

export default function addSudoku ({ body, token: jwt }) {
  console.log(jwt)
  console.log(body)
  return fetch(URL_SUDOKU, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`
    },
    body: JSON.stringify(body)
  }).then(res => {
    if (!res.ok) throw new Error('response is not ok')
    return res.json()
  }).then(res => {
    const { value: sudoku } = res
    return sudoku
  })
}
