import { useState } from 'react';

import './App.css';
import { getMoonsByPlanetMap } from './utils';
import { planets } from './constants';

const MOONS_BY_PLANET = getMoonsByPlanetMap();

function App() {
  return (
    <>
      <div className="bg-white min-h-screen min-w-screen">
        <main className="flex flex-col gap-8 p-4">
          {planets.map(planet => (
            <div className="flex items-center" key={planet.id}>
              <div className="planet">{planet.title}</div>
              <ul className="flex">
                {MOONS_BY_PLANET[planet.id]?.map(moon => (
                  <li className="moon" key={moon.id}>
                    {moon.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
