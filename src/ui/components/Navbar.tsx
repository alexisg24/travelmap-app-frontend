import { ReactNode, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from '@nextui-org/react'
import logo from './../../assets/logo-white.svg'
export const NavbarComponent = (): ReactNode => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    'Home',
    'Docs',
    'About Me'
  ]
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} position='sticky'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <img src={logo} alt='App Logo' width={180} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive>
          <Link color='warning' href='#'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            About me
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as='div' justify='end'>
        <Dropdown placement='bottom-end'>
          <DropdownTrigger>
            <Avatar
              isBordered
              as='button'
              className='transition-transform'
              color='warning'
              name='Jason Hughes'
              size='sm'
              src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
          </DropdownTrigger>
          <DropdownMenu aria-label='Profile Actions' variant='flat'>
            <DropdownItem key='profile' className='h-14 gap-2'>
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>username</p>
            </DropdownItem>
            <DropdownItem key='settings'>Dashboard</DropdownItem>
            <DropdownItem key='analytics'>Places</DropdownItem>
            <DropdownItem key='team_settings'>Routes</DropdownItem>
            <DropdownItem key='logout' color='danger'>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className='bg-transparent'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full font-bold ${index === 2 ? 'text-warning' : 'text-white'}`}
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
