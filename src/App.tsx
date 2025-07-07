import './App.css';
import { getMoonsByPlanetMap } from './utils';
import { planets } from './constants';
import PlanetRow from './components/PlanetRow';

const MOONS_BY_PLANET = getMoonsByPlanetMap();

function App() {
  return (
    <>
      <div className="bg-white min-h-screen min-w-screen">
        <main className="flex flex-col gap-10 p-4">
          {planets.map(planet => (
            <PlanetRow key={planet.id} planet={planet} moons={MOONS_BY_PLANET[planet.id] || []} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
