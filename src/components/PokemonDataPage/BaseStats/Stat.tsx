import BaseStatsCss from "../../../assets/scss/PokemonDataScreen/PokemonDataBaseStats.module.scss";

interface Props {
  statName: string;
  statValue: number;
}

function Stat(props: Props) {
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
