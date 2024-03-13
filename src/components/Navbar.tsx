import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="bg-red-500 dark:bg-red-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-amber-300"> 
          Pokedex
        </Link>
      </div>
    </nav>
  )
}