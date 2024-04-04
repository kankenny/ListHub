// Components
import { Link, useLocation } from "react-router-dom"

const Logo = () => {
  return (
    <Link
      to="/"
      className={`font-bold text-2xl text-primary hover:text-tertiary ease-in-out duration-200 `}
    >
      Rea
      <span className="bg-tertiary rounded-md py-0.5 px-1 m-0.5">List</span>
    </Link>
  )
}

export default Logo
