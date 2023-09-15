import styles from './NavBar.module.css';

import logo from '../../../assets/logo1.svg';

const NavBar = () => {
    return (
        <div className={styles.NavBarContainer}>
            <div className={styles.logoContainer}>
                {/* <img className={styles.logoImg} src={logo} alt="S" /> */}
            </div>
            <div className={styles.buttonsContainer}>
                <ul className={styles.ul}>
                    <li className={styles.li}><span className={styles.liNumber}>01. </span>Sobre mi</li>
                    <li className={styles.li}><span className={styles.liNumber}>02. </span>Proyectos</li>
                    <li className={styles.li}><span className={styles.liNumber}>03. </span>Contacto</li>
                </ul>
                <div className={styles.buttonCV}>Descargar CV</div>
            </div>
        </div>
    )
}

export default NavBar;