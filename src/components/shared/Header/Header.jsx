import React, { Fragment, useState } from 'react'
import { Menu2 } from 'tabler-icons-react'
import { BrandTwitter, BrandDiscord } from 'tabler-icons-react'
import { NavbarLinks } from '@/data'
import { NavLink } from '@/components/elements'
import WalletConnector from './WalletConnector'
function Header() {
  const [account, setAccount] = useState()
  const [showNavbar, setShowNavbar] = React.useState(false)
  return (
    <div className="pt-9 md:px-2 lg:px-32">
      <div className="flex items-center flex-wrap justify-between mx-auto">
        <div className="w-full relative flex justify-between md:w-auto px-6 md:px-0">
          <h1 className="font-extrabold text-xl">ONE-OF-BUSINESS</h1>
          <button className="cursor-pointer block md:hidden">
            <Menu2 />
          </button>
        </div>
        <div
          className={`px-20 md:px-0 md:flex flex-col md:flex-row items-center flex-1 ${
            showNavbar ? 'block' : 'hidden'
          }`}
        >
          <nav className="md:mx-auto">
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-x-12">
              {NavbarLinks.map((item) => (
                <li>
                  <NavLink
                    activeClassName="text-accent"
                    className="text-base font-semibold tracking-[0.2px]"
                    href={item.href}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col md:flex-row  items-start md:items-center gap-x-8">
            <BrandTwitter size="32px" fill="#fff" />
            <BrandDiscord size="32px" />
            {account ? (
              <div>Wallet Address: ${account}</div>
            ) : (
              <WalletConnector setAccount={setAccount} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
