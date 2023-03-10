export function Card({ title, info }) {
  return (
    <div className="card">
      <h6>{title}</h6>
      <p>{info}</p>
    </div>
  );
}
