import React from 'react'
import styles from "./styles.module.css"
import { item } from "./menuModel"
import { Link } from 'react-router-dom'

type menuProps = {
  menu : item,
  index : number,
  menus : item[],
  onActive : () => void
}

const Menu : React.FC< menuProps > = (props) => {

  return (
    <li  className="pointer">
      <div onClick={props.onActive} className={styles['menu__list']}>
        <i className={props.menu.icon}></i>
        {props.menu.label}
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <ul className={`${styles.sublists} ${props.menu.isOpen && styles['sublists__open'] }  `} id={`li-${props.index}`}  >
        {
          props.menu.items.map((item, idx) => {
            return (
              <li key={idx}  >
                
                <Link className={styles['menu__sublist']} to={item.path}>
                  <i className="fa-solid fa-desktop hidden"></i>
                  <div> {item.label} </div>
                </Link>
              

              </li>
            )
          })
        }
      </ul>

    </li>
  )
}

export default Menu