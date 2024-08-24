import BaseStatsCss from "../../../assets/scss/PokemonDataScreen/PokemonDataBaseStats.module.scss";

interface Props {
  statName: string;
  statValue: number;
  primaryTyping: string;
}

function Stat(props: Props) {
  const statColour =
    props.statValue <= 50
      ? "#ff3000"
      : props.statValue <= 80
      ? "#ff9e00"
      : props.statValue <= 110
      ? "#ceff00"
      : "#00ff39";
  const style = {
    paddingRight: `${(props.statValue / 255) * 100}%`,
    backgroundColor: `white`,
  };
  return (
    <div
      className={`${BaseStatsCss["row"]}  ${
        BaseStatsCss[`${props.statName}-background-dark`]
      }`}
    >
      <div
        className={`${BaseStatsCss["statName"]} ${
          BaseStatsCss[`${props.statName}-background-light`]
        }`}
      >
        {props.statName}
      </div>
      <div
        className={`${BaseStatsCss[`${props.statName}-background-light`]} ${
          BaseStatsCss["statBar"]
        }`}
        style={style}
      >
        {props.statValue}
      </div>
    </div>
  );
}

export default Stat;
