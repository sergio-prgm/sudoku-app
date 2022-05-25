import { Link } from 'wouter'

export default function NotFound ({ params }) {
  return (
    <>
      <h1>You might be lost. <span style={{ color: 'red' }}>{params.rest}</span> is not a valid URL</h1>
      <h3> Go back ✨
      <Link to='/' style={{ cursor: 'pointer' }} >
        Home
      </Link> ✨
      </h3>
    </>
  )
}
