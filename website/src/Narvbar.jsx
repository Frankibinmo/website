import { Link } from "react-router-dom"
const Narvbar = () => {
  return (
    <div className='narvbar'>
      <h1>Franks blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New blog</Link>

      </div>
    </div>
  )
}

export default Narvbar
