import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()

  const container = useRef(null)
  const [columns, setColumns] = useState(2)

  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    setColumns(links.length)
  }, [location])

  return (
    <aside
      className={`submenu ${isSubmenuOpen ? 'show' : null}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
