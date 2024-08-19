import { Suspense, lazy } from 'react';

// Importar el componente del mapa de manera perezosa
const MapComponent = lazy(() => import('./MapComponent'));

const Home = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Suspense fallback={<div>Cargando mapa...</div>}>
        <MapComponent />
      </Suspense>
    </div>
  );
};

export default Home;