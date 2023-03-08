import styles from "../App.module.css"
import Navigation from "../components/Navigation"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
      <Navigation></Navigation>
      <main className={styles.container}>
        <Outlet/>
      </main>
    </>
    
  )
}

export default RootLayout