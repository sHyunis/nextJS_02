import React from 'react'
//{title : 'Admin', path : 'admin'}
import Link from 'next/link'
const NavLink = ({item}) => {
  return (
    <Link href={item.path}>{item.title}</Link>
  )
}

export default NavLink