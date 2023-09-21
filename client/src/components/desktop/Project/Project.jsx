import styles from './Project.module.css';
import book_store from '../../../assets/book_store.png';
import dogs_app from '../../../assets/dogs_app.png';
import rick_and_morty from '../../../assets/rick_and_morty.png';
import mini_juegos from '../../../assets/mini_juegos.png';
 

const Project = ({info}) => {
    const images = {book_store, dogs_app, rick_and_morty, mini_juegos};
    return (
        <div className={styles.projectContainer}>
            <div className={styles.imgContainer}>
                <div className={styles.cover}></div>
                <img src={images[info.image]} className={styles.img} alt={info.image} />
            </div>
            <div className={styles.info}>
                <h4 className={styles.title}>{info.title}</h4>
                <div className={styles.descriptionCard}>
                    <p className={styles.description}>{info.description}</p>
                </div>
                <div className={styles.icons}>
                    <a href={info.github} target="_blank" >
                        <div className={styles.github}></div>
                    </a> 
                    <a href={info.link} target="_blank" className={styles.link}>
                        <div className={styles.link}></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;