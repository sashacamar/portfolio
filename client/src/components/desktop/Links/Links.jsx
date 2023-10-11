import styles from './Links.module.css';

const Links = () => {
    return (
        <div className={styles.linksConatiner}>
            <div className={styles.icons}>
                <div className={styles.icons_imgs}>
                    <div className={styles.iconGithub}></div>
                    <div className={styles.iconLinkedin}></div>
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.emailContainer}>
                <div className={styles.email}>sashacamargo@gmail.com</div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}

export default Links;