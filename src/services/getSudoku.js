import hard50000 from '@/assets/hard50000.txt'
import medium2500 from '@/assets/medium2500.txt'
import easy from '@/assets/easy.txt'

const generateSudoku = (response) => {
  const result = []

  response
    .split('')
    .filter(value => value !== '\r')
    .forEach((value, index) => {
      const cell = new Cell(index, Number(value))
      result.push(cell)
    })
  return result
}

class Cell {
  constructor (index, value) {
    this.index = index
    this.value = value
    this.changed = false
    this.isCorrect = true
    this.readOnly = Boolean(value)
  }

  get row () {
    return Math.floor(this.index / 9)
  }

  get col () {
    return Math.floor(this.index % 9)
  }
}

const collection = {
  e: easy,
  m: medium2500,
  h: hard50000
}

export default function getSudoku (num, difficulty) {
  return fetch(collection[difficulty])
    .then(response => response.text())
    .then(response => response.split('\n')[num])
    .then(response => generateSudoku(response))
}

/*
const generateSudoku = (response) => {
  const result = []

  for (let i = 0; i < 9; i++) {
    const row = { cols: [], index: i }
    for (let j = 0; j < 9; j++) {
      const value = Number(response[i * 9 + j])
      const col = {
        row: i,
        col: j,
        value: value,
        readOnly: Boolean(value),
        isChanged: false,
        isCorrect: true
      }
      row.cols.push(col)
    }
    result.push(row)
  }
  console.log(result)
  return result
}
*/
/*
  sudoku = {
    rows: [
      {cols: [
        {
          row: n,
          col: n,
          value: n,
          readOnly: bool
        }],
        index: n
      }
    ]
  }
*/
