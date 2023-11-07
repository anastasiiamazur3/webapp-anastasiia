import "./Card.css";

export function Card({ image, titel, linkprop }) {
  return (
    <div>
      <img src={image} />
      <h2> {titel} </h2>
      <a href={linkprop}>{linkprop}</a>
    </div>
  );
}


