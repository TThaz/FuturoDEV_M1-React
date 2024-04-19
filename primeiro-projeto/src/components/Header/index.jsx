import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Header() {
  return ( 
    <header className={styles.header}>
      <Link to="/" className={styles.link}><h4>Adveture Trails FD</h4></Link>
      <nav className={styles.nav}>
        <Link to="lista-trilhas" className={styles.link}>Explorar Trilhas</Link>
        <Link to="cadastro-trilhas" className={styles.link}>Cadastrar Trilhas</Link>
      </nav>
    </header>
  );
}

export default Header;