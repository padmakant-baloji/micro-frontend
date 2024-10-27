import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to Host App</h1>
      <p>This is the main application that loads remote components.</p>
    </div>
  );
};

export default Home;