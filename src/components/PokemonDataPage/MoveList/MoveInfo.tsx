import { useEffect, useState } from "react";
import { MovePartialData } from "../../Interface/PokemonDataPageInterface";
import { fetchMoveData } from "../../Hooks/FetchPokemonPageAPIData";
import {
  defaultMoveSpecificData,
  MoveSpecificData,
} from "../../Interface/MoveDataInterface";
import MoveListCss from "../../../assets/scss/PokemonDataScreen/PokemonDataMovelist.module.scss";
import {
  capitalizeMoveName,
  convertFirstCharacterUpper,
} from "../../Utilities/UtilityFunctions";

interface Props {
  moveFetchData: MovePartialData;
  typing: string;
}

function MoveInfo(props: Props) {
  const [moveInfo, setMoveInfo] = useState<MoveSpecificData>(
    defaultMoveSpecificData
  );

  useEffect(() => {
    fetchMoveData(props.moveFetchData).then((response) => {
      setMoveInfo(response);
    });
  }, [props.moveFetchData]);

  return (
    <tr>
      {moveInfo.learn_level !== -1 ? <td>{moveInfo.learn_level}</td> : null}
      <td>{capitalizeMoveName(moveInfo.name)}</td>
      <td className={`bg-${moveInfo.type}-light ${MoveListCss["type"]}`}>
        {convertFirstCharacterUpper(moveInfo.type)}
      </td>
      <td className={MoveListCss[`${moveInfo.damage_class}-bg`]}>
        {convertFirstCharacterUpper(moveInfo.damage_class)}
      </td>
      <td>{moveInfo.power === null ? "--" : moveInfo.power}</td>
      <td>{moveInfo.accuracy === null ? "--" : moveInfo.accuracy}%</td>
      <td>{moveInfo.pp}</td>
    </tr>
  );
}

export default MoveInfo;
