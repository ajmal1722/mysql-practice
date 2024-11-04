// import { NavLink } from 'react-router';
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='h-20 flex items-center justify-around'>
      <div className=''>
        <ul className="list-none flex gap-8">
          <li>
            Home
          </li>
          <li>
            Home
          </li>
          <li>
            Home
          </li>
        </ul>
      </div>
      <div className="text-5xl font-semibold font-mono">
        wardrobe
      </div>
      <div className="text-2xl">
        <FaCartShopping />
      </div>
    </div>
  )
}

export default Header
