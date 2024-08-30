import { useContext, useState } from "react";
import { MovePartialData } from "../../Interface/PokemonDataPageInterface";
import MoveInfo from "./MoveInfo";
import MoveListCss from "../../../assets/scss/PokemonDataScreen/PokemonDataMovelist.module.scss";
import { PokemonDataContext } from "../PokemonDataPage";

function MoveList() {
  const { moveData, pokemonType } = useContext(PokemonDataContext);
  const [moveToggle, setMoveToggle] = useState<string>("level");

  const moves: Array<MovePartialData> =
    moveToggle === "level"
      ? moveData.movesLevelUp
      : moveToggle === "tm"
      ? moveData.movesTM
      : moveToggle === "egg"
      ? moveData.movesEgg
      : moveData.movesTutor;

  return (
    <div className={`${MoveListCss["column"]}`}>
      <div id={MoveListCss["moveButtons"]} className={`${MoveListCss["row"]}`}>
        <button
          className={`bg-${pokemonType[0]}-light`}
          onClick={() => setMoveToggle("level")}
        >
          Level
        </button>
        <button
          className={`bg-${pokemonType[0]}-light`}
          onClick={() => setMoveToggle("tm")}
        >
          TM
        </button>
        <button
          className={`bg-${pokemonType[0]}-light`}
          onClick={() => setMoveToggle("egg")}
        >
          Egg
        </button>
        <button
          className={`bg-${pokemonType[0]}-light`}
          onClick={() => setMoveToggle("tutor")}
        >
          Tutor
        </button>
      </div>

      <div
        id={MoveListCss["moveTable"]}
        className={`${MoveListCss["row"]} border-${pokemonType[0]}-dark`}
      >
        <table>
          <thead className={`bg-${pokemonType[0]}-light`}>
            <tr>
              {moveToggle === "level" ? (
                <th className={`border-${pokemonType[0]}-dark`}>Level</th>
              ) : null}
              <th className={`border-${pokemonType[0]}-dark`}>Move</th>
              <th className={`border-${pokemonType[0]}-dark`}>Type</th>
              <th className={`border-${pokemonType[0]}-dark`}>Cat.</th>
              <th className={`border-${pokemonType[0]}-dark`}>Power</th>
              <th className={`border-${pokemonType[0]}-dark`}>Accuracy</th>
              <th className={`border-${pokemonType[0]}-dark`}>PP</th>
            </tr>
          </thead>
          <tbody>
            {moves
              .sort((move1: MovePartialData, move2: MovePartialData) => {
                if (move1.learn_level! > move2.learn_level!) {
                  return 1;
                } else if (
                  move1.learn_level! === move2.learn_level! &&
                  move1.name > move2.name
                ) {
                  return 1;
                } else {
                  return -1;
                }
              })
              .map((moveData: MovePartialData) => {
                return (
                  <MoveInfo
                    key={moveData.name}
                    moveFetchData={moveData}
                    typing={pokemonType[0]}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MoveList;
