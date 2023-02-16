export default function Coin(props) {
  console.log({ props });
  const { type, year, mint } = props.coin;

  return (
    <div className="coin">
      <h1>{year}</h1>
      <p>{mint}</p>
    </div>
  );
}
