import styles from './Projects.module.css';

import Project from '../Project/Project';
import projects from '../../../data/projects.json';

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <h3 className={styles.title}><span className={styles.number}>02. </span> Proyectos</h3>
            {
                projects.map(project => <Project info={project}></Project>)
            }
        </div>
    )
}

export default Projects;