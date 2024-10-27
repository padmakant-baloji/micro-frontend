import styles from './Home.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Application</h1>
      <p className={styles.description}>
        This is a micro-frontend application built with React, TypeScript, and Module Federation.
      </p>
    </div>
  );
}