import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './hooks/useMovies';

import './styles/content.scss';
import './styles/global.scss';

import './styles/sidebar.scss';

export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MoviesProvider>
        <SideBar />
        <Content />
      </MoviesProvider>
    </div>
  )
}