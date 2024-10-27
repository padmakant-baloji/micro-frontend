import styles from './LoadingSpinner.module.scss';

export function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
    </div>
  );
}