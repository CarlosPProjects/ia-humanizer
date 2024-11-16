'use client'

import { type FC } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IAuth } from '@/types/user'
import Link from 'next/link'
import { logout } from '@/actions/auth'
import { getEmailInitial } from '@/lib/utils'

interface Props {
  auth: IAuth
}

const UserMenu: FC<Props> = ({ auth }) => {

  const handleLogout = async () => {
    await logout();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='shadow-md'>
          <AvatarImage src={auth.user.image} alt='User avatart' />
          <AvatarFallback>{getEmailInitial(auth.user.email)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/account'>
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>Billing</DropdownMenuItem>
        <DropdownMenuItem disabled>Subscription</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu;