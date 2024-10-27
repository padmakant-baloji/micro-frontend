import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './lib/providers/AppProvider';
import { Posts } from './pages/Posts/Posts';
import { PostDetails } from './pages/PostDetails/PostDetails';
import styles from './App.module.scss';

function App() {
  return (
    <AppProvider>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;