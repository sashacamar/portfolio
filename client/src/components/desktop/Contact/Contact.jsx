import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactContainer}>
            <h3 className={styles.title}>03. Que sigue?</h3>
            <h3 className={styles.subtitle}>Enviame un saludo.</h3>
            <div className={styles.info}>
                <div>
                    <h4>CONTACTAME POR</h4>
                    <h4>sashacamargo@gmail.com</h4>
                    <h4>+54 9 1123895328</h4>
                </div>
                <div>
                    <h4>CONECTEMOS EN</h4>
                    <h4 className={styles.links}><a>LinkdeIn,</a> <a>Github</a></h4>
                </div>
            </div>
            <div className={styles.greet}>Say Hello</div>
            <div>
                <div className={styles.line}></div>
                <div className={styles.arrow}></div>
            </div>
        </div>
    )
}

export default Contact;