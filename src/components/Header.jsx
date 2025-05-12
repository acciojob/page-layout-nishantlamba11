import React from 'react'

const Header = ({header,footer,childern}) => {
  return (
    <div>
      <header>{header}</header>
      <main>{childern}</main>
      <footer>{footer}</footer>
    </div>
  )
}

export default Header
