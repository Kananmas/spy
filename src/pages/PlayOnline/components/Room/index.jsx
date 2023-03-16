import "./index.css";
import { Card } from "./components/Card";

export function Room(props) {
  const { name, player_count: playerCount, time } = props;

  return (
    <table className="room-slot" onClick={() => props.onClick(name)}>
      <tbody>
        <tr>
          <td>
            <Card title="Room" info={name} />
          </td>
          <td>
            <Card title="Player Count" info={playerCount} />
          </td>
          <td>
            <Card title="Play Time" info={time} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
