import { CardStructure } from "../card.model";

import Card from "./Card";

// 카드 데이터 구조 정의
interface CardsProps {
  currentHeroCard: CardStructure[];
  cardFilter: string[];
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
    <div>
      <div className="flex justify-center py-6 pt-6 text-2xl">일반</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {commonCard.map((card) => {
          return (
            <Card card={card} key={card.id} cardFilter={props.cardFilter} />
          );
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl">희귀</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {rareCard.map((card) => {
          return (
            <Card card={card} key={card.id} cardFilter={props.cardFilter} />
          );
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl">특급</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {epicCard.map((card) => {
          return (
            <Card card={card} key={card.id} cardFilter={props.cardFilter} />
          );
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl">전설</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {legendaryCard.map((card) => {
          return (
            <Card card={card} key={card.id} cardFilter={props.cardFilter} />
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
