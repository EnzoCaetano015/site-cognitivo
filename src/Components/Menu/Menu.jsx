import styles from "./menu.module.css";

export default function menu(){
    return(
        <nav className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}><a href="#">Início</a></li>
          <li className={styles.menuItem}><a href="#">Sobre</a></li>
          <li className={styles.menuItem}><a href="#">Serviços</a></li>
          <li className={styles.menuItem}><a href="#">Contato</a></li>
        </ul>
      </nav>
    )
}