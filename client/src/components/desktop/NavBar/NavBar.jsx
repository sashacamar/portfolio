import styles from './NavBar.module.css';

import pdf from '../../../documents/CV_Sasha_Camargo.pdf'

const NavBar = ({mode, setMode}) => {

    const modeHandler = () => {
        if(mode === 'dark') setMode('light');
        if(mode === 'light') setMode('dark');
    }

    const scroll = (item) => {
        let position;
        if(item === 'Sobre mi')  position = 560;
        if(item === 'Proyectos') position = 1600;
        if(item === 'Contacto') position = 3450;
        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
    };

    return (
        <div className={`${styles.NavBarContainer} ${mode === 'light' ? styles.light : ""}`}>
            <div onClick={modeHandler} className={`${styles.logoContainer} ${mode === 'light' ? styles.logoLight : ""}`}>
            </div>
            <div className={styles.buttonsContainer}>
                <ul className={styles.ul}>
                    <li onClick={()=>{scroll('Sobre mi')}} className={styles.li}><span className={styles.liNumber}>01. </span>Sobre mi</li>
                    <li onClick={()=>{scroll('Proyectos')}} className={styles.li}><span className={styles.liNumber}>02. </span>Proyectos</li>
                    <li onClick={()=>{scroll('Contacto')}} className={styles.li}><span className={styles.liNumber}>03. </span>Contacto</li>
                </ul>
                <a href={pdf} download="SashaCV.pdf">
                    <div className={`${styles.buttonCV} ${mode === 'light' ? styles.buttonCVLight : ""}`}>Descargar CV</div>
                </a>
            </div>
        </div>
    )
}

export default NavBar;