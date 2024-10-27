import { Link } from 'react-router-dom';
import { Home, Info, FileText } from 'lucide-react';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link to="/about" className={styles.link}>
          <Info size={20} />
          <span>About</span>
        </Link>
        <Link to="/posts" className={styles.link}>
          <FileText size={20} />
          <span>Posts</span>
        </Link>
      </nav>
    </header>
  );
}
