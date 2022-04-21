import Key from '../Key/Key'
import './styles.scss'

export default function Controls () {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return (
    <div className="control-pad">
      {keys.map(key => {
        return <Key num={key} key={key} />
      })}
    </div>
  )
}
