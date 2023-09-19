import styles from './AboutMe.module.css';

import iconList from '../../../assets/iconList.svg'

const AboutMe = () => {
    return (
        <div className={styles.aboutMeContainer}>
            <div className={styles.introContainer}>
                <h5 className={styles.greet}>Hola, mi nombre es</h5>
                <h1 className={styles.name}>Sasha Camargo</h1>
                <h3 className={styles.description}>Una desarrollara front-end orientada a construir 
                <br /> hermosas interfaces y experiencias </h3>
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.me}>
                    <h3 className={styles.title}><span className={styles.number}>01. </span> Sobre mi</h3>
                    <p className={styles.text}>Full Stack Developer con gusto por el Front-end. 
                    <span className={styles.highlight}> Disfruto creando</span> cosas que viven en internet, 
                    <span className={styles.highlight}> jugando</span> entre el front-end y 
                    el back-end y <span className={styles.highlight}>aprendiendo</span> nuevas tecnologias.</p>
                    <p className={`${styles.text} ${styles.text2}`}>Aquí hay algunas de las tecnologias con las que 
                    he estado trabajando recientemente:</p>
                    <div className={styles.languagesContainer}>
                        <ul className={styles.languages}>
                            <li className={styles.item}>
                                <img src={iconList} alt="*" />
                                JavaScript (ES6+)
                            </li>
                            <li className={styles.item}>
                                <img src={iconList} alt="*" />
                                React.js
                            </li>
                            <li className={styles.item}>
                                <img src={iconList} alt="*" />
                                Redux
                            </li>
                        </ul>
                        <ul className={styles.languages}>
                            <li className={styles.item}>
                                <img src={iconList} alt="*" />
                                Node.js
                            </li>
                            <li className={styles.item}>
                                <img src={iconList} alt="*" />
                                Express
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.linesContainer}>
                    <div className={styles.photo}></div>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.studiesContainer}>
                    <h3 className={styles.title}>Estudios</h3>
                    <div className={`${styles.card} ${styles.card1}`}>
                        <h4 className={styles.cardTitle}>Universidad Tecnológica Nacional</h4>
                        <h5 className={styles.cardSubtitle}>Ingenería en Sistemas de Información</h5>
                        <h5 className={styles.cardText}>MARZO 2022 - CURSANDO</h5>
                    </div>
                    <div className={`${styles.card} ${styles.card2}`}>
                        <h4 className={styles.cardTitle}>Henry Bootcamp</h4>
                        <h5 className={styles.cardSubtitle}>Full Stack Developer</h5>
                        <h5 className={styles.cardText}>ABRIL 2023 - AGOSTO 2023
                        <br />
                        <br />+750 horas de cursado teórico-práctico</h5>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutMe;