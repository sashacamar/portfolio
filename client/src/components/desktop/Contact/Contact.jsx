import styles from './Contact.module.css';

const Contact = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

    return (
        <div className={styles.contactContainer}>
            <h3 className={styles.title}>03. Qué sigue?</h3>
            <h3 className={styles.subtitle}>Envíame un saludo.</h3>
            <div className={styles.info}>
                <div className={styles.column}>
                    <h4 className={styles.column_title}>CONTACTAME POR</h4>
                    <a href="mailto:sashacamargo@gmail.com?subject=Hi Sasha&body=Hola Sasha, nos encantaria contactarnos con vos. Nosotros somos:..." className={styles.column_text}>sashacamargo@gmail.com</a>
                    <h4 className={styles.column_text}>+54 9 1123895328</h4>
                </div>
                <div className={styles.column}>
                    <h4 className={styles.column_title}>CONECTEMOS EN</h4>
                    <h4 className={styles.links}>
                        <a href='https://www.linkedin.com/in/sasha-camargo/' target='_blank'>LinkdeIn,</a>
                        <a href='https://github.com/sashacamar' target='_blank'>Github</a>
                    </h4>
                </div>
            </div>
            <a href="mailto:sashacamargo@gmail.com?subject=Hi Sasha&body=Hola Sasha, nos encantaria contactarnos con vos. Nosotros somos:..." className={styles.greet}>Say Hello</a>
            <div className={styles.navigate}>
                <div className={styles.arrowContainer}>
                    <div onClick={scrollToTop} className={styles.arrow}></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;