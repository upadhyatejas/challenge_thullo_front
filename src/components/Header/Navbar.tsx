import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../../state/userState'
import Logo from '../../assets/Logo.svg'
import Avatar from './Avatar'
import SearchInput from './SearchInput'
import { User } from '../../types/types'
import { MdApps, MdExpandMore } from 'react-icons/md'
import Button from '../Common/Button'
import { Link } from 'react-router-dom'

type NavbarProps = {
  name?: string
}

const Navbar = ({ name }: NavbarProps) => {
  const user: User | null = useRecoilValue(userState)

  return (
    <div className="w-full h-16 shadow-md flex flex-none px-2 md:px-6 justify-between items-center">
      <div className="hidden md:flex">
        <img src={Logo} alt="Thullo logo" />
        {name && (
          <div className="flex justify-center items-center ml-20">
            <h1 className="font-semibold border-r border-gray4 pr-3">{name}</h1>
            <Link to="/">
              <Button
                icon={<MdApps />}
                text="All Boards"
                alignment="left"
                variant="default"
                className="ml-3"
              />
            </Link>
          </div>
        )}
      </div>

      <div className="flex w-full md:w-auto justify-between">
        <SearchInput className="w-3/5 flex-auto mr-1" />
        <div className="ml-4 md:ml-16 flex-none flex items-center">
          <Avatar username={user!.username} />

          <button className="flex items-center">
            <h4 className="ml-2 md:ml-4 mr-2 font-bold">{user!.username}</h4>
            <MdExpandMore />
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Navbar)
