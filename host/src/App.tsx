import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import styles from './App.module.scss';

const RemoteApp = lazy(() => import('remote/App'));

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts/*" element={<RemoteApp />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
