import styles from './About.module.scss';

export function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        We are demonstrating a micro-frontend architecture using Module Federation.
        This allows us to develop and deploy independent applications that work together seamlessly.
      </p>
    </div>
  );
}