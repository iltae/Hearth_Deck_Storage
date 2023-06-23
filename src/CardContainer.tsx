
import { CardStructure } from "../card.model";

import Card from "./Card";

// 카드 데이터 구조 정의
interface CardsProps {
  currentHeroCard: CardStructure[];
}

const CardContainer: React.FC<CardsProps> = (props) => {

  // 카드 등급 분류
  const commonCard = props.currentHeroCard.filter(
    (card) => card.rarityId === 1
  );
  const rareCard = props.currentHeroCard.filter((card) => card.rarityId === 3);
  const epicCard = props.currentHeroCard.filter((card) => card.rarityId === 4);
  const legendaryCard = props.currentHeroCard.filter(
    (card) => card.rarityId === 5
  );

  return (
    <div className="">
      <div className="flex justify-center py-6 pt-6 text-2xl">일반</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {commonCard.map((card) => {
          return <Card card={card} color={"bg-gray-50"}/>;
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl">희귀</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {rareCard.map((card) => {
          return <Card card={card} color={"bg-blue-300"} />;
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl">영웅</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {epicCard.map((card) => {
          return <Card card={card} color={"bg-purple-500"}/>;
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl">전설</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {legendaryCard.map((card) => {
          return <Card card={card} color={"bg-yellow-500"}/>;
        })}
      </div>
    </div>
  );
};

export default CardContainer;
