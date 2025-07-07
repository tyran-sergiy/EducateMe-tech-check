import type { MoonType } from '../types';

const MoonsRow = ({
  moons,
  selectedMoonsIds,
  handleMoonClick,
}: {
  moons: MoonType[];
  selectedMoonsIds: number[];
  handleMoonClick: (id: number) => void;
}) => {
  return (
    <ul className="flex">
      {moons.map(moon => (
        <li
          onClick={() => handleMoonClick(moon.id)}
          className={`moon ${selectedMoonsIds.includes(moon.id) ? 'selected' : ''}`}
          key={moon.id}
        >
          {moon.title}
        </li>
      ))}
    </ul>
  );
};

export default MoonsRow;
