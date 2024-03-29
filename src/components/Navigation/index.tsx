import { useState } from "react"
import styles from "./styles.module.css"
import menus from "./menuModel"
import { item } from "./menuModel"
import { useNavigate } from "react-router-dom"
import Menu from "./menu"
const Navigation = () => {

  const [items , setItems] = useState<item[]>(menus)
  const navigate = useNavigate()
  const navigateHandler = function ( ) {
    navigate('/login')
  }
  const handleActive = (menu : item) => {
    setItems( (prevState) => {
      return prevState.map((state) => {
        if (state.label === menu.label) {
          return {
            ...state,
            isOpen: !state.isOpen
          }
        } else {
          return {
            ...state,
            isOpen: false
          }
        }
      })
    })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles['profile__container']}>
        <div className={styles.profile}>
          <div className={styles['image__profile']} >
          </div>
        </div>
        <div className={styles.username}>Lala Windi</div>
        <div className={styles.role} >Admin Seller</div>
      </div>
      <ul >
        {
          items.map((menu: item, index : number) =>
            <Menu 
              menu={menu} 
              key={index}
              index={index} 
              menus={menus} 
              onActive={handleActive.bind(null,menu) }
            />
          )
        }
      </ul>
      <div onClick={navigateHandler} className={styles['menu__logout']}>Logout</div>
    </nav>
  )
}

export default Navigation