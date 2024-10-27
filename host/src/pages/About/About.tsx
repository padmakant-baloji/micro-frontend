import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.about}>
      <h2>About Our Micro-Frontend Architecture</h2>
      <p>
        This application demonstrates a micro-frontend architecture using Module
        Federation. The host application manages the main layout and routing,
        while remote applications are loaded dynamically.
      </p>
      <p>
        We're using React, TypeScript, SCSS Modules, and Redux Toolkit for state
        management.
      </p>
    </div>
  );
};
