import { CardStructure } from "../card.model";

// Props 구조 정의
type HeroProps = {
  heros: { class: string; name: string; image: string };
  currentHeroCardHandler: (card: CardStructure[], hero:string) => void;
};

const HeroSelectButton: React.FC<HeroProps> = (props) => {
  // 영웅 직업 버튼 클릭시 카드 데이터 호출할 함수
  const fetchCardHandler = (hero: string): any => {
    fetch(
      `https://us.api.blizzard.com/hearthstone/cards?locale=ko_KR&gameMode=arena&pageSize=333&class=${hero},neutral`,
      {
        headers: {
          Authorization:
            "Bearer " + localStorage.getItem("ACCESS_TOKEN")!.toString(),
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        props.currentHeroCardHandler(data.cards, props.heros.name);
      });
  };

  return (
    <button
      className="w-24 h-24 m-4"
      type="button"
      onClick={() => fetchCardHandler(props.heros.class)}
    >
      <img className="w-full" src={props.heros.image} alt={props.heros.class} />
    </button>
  );
};

export default HeroSelectButton;
