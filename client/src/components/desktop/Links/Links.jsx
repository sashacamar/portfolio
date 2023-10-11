import styles from './Links.module.css';

const Links = () => {
    return (
        <div className={styles.linksConatiner}>
            <div className={styles.icons}>
                <div className={styles.icons_imgs}>
                    <a href='https://github.com/sashacamar' target='_blank'>
                        <div className={styles.iconGithub}></div>
                    </a>
                    <a href='https://www.linkedin.com/in/sasha-camargo/' target='_blank' >
                        <div className={styles.iconLinkedin}></div>
                    </a>
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.emailContainer}>
                <a href="mailto:sashacamargo@gmail.com?subject=Hi Sasha&body=Hola Sasha, nos encantaria contactarnos con vos. Nosotros somos:..." className={styles.email}>sashacamargo@gmail.com</a>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

export default Links;