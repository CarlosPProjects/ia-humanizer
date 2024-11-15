import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Container from "./container"
import Logo from "./logo"

const Header = () => {
  return (
    <Container className="max-w-5xl left-1/2 -translate-x-1/2 fixed top-4">
      <header className="flex justify-between items-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border rounded-xl px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          <Logo />
          <h1 className="text-lg font-bold">Humanize</h1>
        </div>
        <div className="w-fit hidden md:flex gap-2">
          <Button variant='outline'>
            Register
          </Button>
          <Button variant='default'>
            Login
          </Button>
        </div>
        <div className="block md:hidden">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon'>
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Register
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Login
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </Container>
  )
}

export default Header