import { CardStructure } from "../card.model";

import Card from "./Card";

// 카드 데이터 구조 정의
interface CardsProps {
  currentHeroCard: CardStructure[];
}

const CardContainer: React.FC<CardsProps> = (props) => {
  return (
    <>
      <div className="flex flex-row justify-center my-6 text-2xl">일반</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {props.currentHeroCard
          .filter((card) => card.rarityId === 1)
          .map((card) => {
            return <Card card={card} />;
          })}
      </div>
      <div className="flex justify-center my-6 text-2xl">희귀</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {props.currentHeroCard
          .filter((card) => card.rarityId === 3)
          .map((card) => {
            return <Card card={card} />;
          })}
      </div>
      <div className="flex justify-center my-6 text-2xl">영웅</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {props.currentHeroCard
          .filter((card) => card.rarityId === 4)
          .map((card) => {
            return <Card card={card} />;
          })}
      </div>
      <div className="flex justify-center my-6 text-2xl">전설</div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl">
        {props.currentHeroCard
          .filter((card) => card.rarityId === 5)
          .map((card) => {
            return <Card card={card} />;
          })}
      </div>
    </>
  );
};

export default CardContainer;
