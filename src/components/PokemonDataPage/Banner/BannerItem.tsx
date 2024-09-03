import BannerCss from "../../../assets/scss/PokemonDataScreen/PokemonDataBanner.module.scss";
import { convertFirstCharacterUpper } from "../../Utilities/UtilityFunctions";
import { BannerInfo } from "../../Interface/PokemonDataPageInterface";

interface Props {
  bannerItem: BannerInfo;
  primaryTyping: string;
}

function BannerItem(props: Props) {
  return (
    <div
      className={`${BannerCss["column"]} ${BannerCss["banner-link"]} bg-${props.primaryTyping}-light`}
    >
      <img
        src={props.bannerItem.pokemonIcon}
        alt={props.bannerItem.pokemonName}
      />
      <div>{convertFirstCharacterUpper(props.bannerItem.pokemonName)}</div>
      <div>#{props.bannerItem.pokemonId}</div>
    </div>
  );
}

export default BannerItem;
