import { useState } from "react";
import { CardStructure } from "../card.model";

import Card from "./Card";

import DiamondIcon from "@mui/icons-material/Diamond";

// 카드 데이터 구조 정의
interface CardsProps {
  currentHeroCard: CardStructure[];
  cardFilter: string[];
}

const CardContainer: React.FC<CardsProps> = (props) => {
  // 정렬 상태
  const [filterOrder, setFilterOrder] = useState(1);

  // 중립 카드 온오프
  const [onNeutral, setOnNeutral] = useState(true);

  const [currentCard, setCurrentCard] = useState(props.currentHeroCard);
  // 카드 등급 분류

  const commonCard = currentCard.filter((card) => card.rarityId === 1);

  const rareCard = currentCard.filter((card) => card.rarityId === 3);

  const epicCard = currentCard.filter((card) => card.rarityId === 4);

  const legendaryCard = currentCard.filter((card) => card.rarityId === 5);

  // 이름 순 카드 오름차순 정렬
  const nameAscendSort = () => {
    setFilterOrder(1);
    const sortedArray = currentCard;
    sortedArray.sort((a, b) => a.name.localeCompare(b.name));
    setCurrentCard(sortedArray);
    setOnNeutral(true);
  };

  // 이름 순 카드 내림차순 정렬
  const nameDescendSort = () => {
    setFilterOrder(2);
    const sortedArray = props.currentHeroCard;
    sortedArray.sort((a, b) => b.name.localeCompare(a.name));
    setCurrentCard(sortedArray);
    setOnNeutral(true);
  };

  // 마나 코스트 순 카드 오름차순 정렬
  const manaCostAscendSort = () => {
    setFilterOrder(3);
    const sortedArray = props.currentHeroCard;
    sortedArray.sort((a, b) => a.manaCost - b.manaCost);
    setCurrentCard(sortedArray);
    setOnNeutral(true);
  };

  // 마나 코스트 순 카드 내림차순 정렬
  const manaCostDescendSort = () => {
    setFilterOrder(4);
    const sortedArray = props.currentHeroCard;
    sortedArray.sort((a, b) => b.manaCost - a.manaCost);
    setCurrentCard(sortedArray);
    setOnNeutral(true);
  };

  // 중립 카드 안보기
  const neutralFilter = () => {
    if (onNeutral) {
      setCurrentCard(currentCard.filter((el) => el.classId !== 12));
    } else {
      setCurrentCard(props.currentHeroCard);
    }
    setOnNeutral(!onNeutral);
  };

  return (
    <div>
      <div className="flex mx-48 text-gray-200 text-3xl">
        <button
          className="m-4 p-2 pt-1 rounded-xl"
          onClick={nameAscendSort}
          style={{ border: filterOrder === 1 ? "1px solid white" : "" }}
        >
          이름▲
        </button>
        <button
          className="m-4 p-2 pt-1 rounded-xl"
          onClick={nameDescendSort}
          style={{
            border: filterOrder === 2 ? "1px solid white" : "",
          }}
        >
          이름▼
        </button>
        <button
          className="m-4 p-2 pt-1 rounded-xl"
          onClick={manaCostAscendSort}
          style={{
            border: filterOrder === 3 ? "1px solid white" : "",
          }}
        >
          비용▲
        </button>
        <button
          className="m-4 p-2 pt-1 rounded-xl"
          onClick={manaCostDescendSort}
          style={{
            border: filterOrder === 4 ? "1px solid white" : "",
          }}
        >
          비용▼
        </button>
        <button
          className="m-4 p-2 pt-1 rounded-xl"
          onClick={neutralFilter}
          style={{ color: onNeutral ? "blue" : "red" }}
        >
          {onNeutral ? `중립 O` : `중립 X`}
        </button>
      </div>
      <div className="flex justify-center py-6 pt-6 text-2xl text-gray-200 items-center">
        <DiamondIcon className="mr-2" />
        일반
      </div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl bg-gray-600">
        {commonCard.map((card) => {
          return (
            <Card card={card} key={card.id} cardFilter={props.cardFilter} />
          );
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl text-blue-400 items-center">
        <DiamondIcon className="mr-2" />
        희귀
      </div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl bg-blue-900">
        {rareCard.map((card) => {
          return (
            <Card card={card} key={card.id} cardFilter={props.cardFilter} />
          );
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl text-purple-400 items-center">
        <DiamondIcon className="mr-2" />
        특급
      </div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl bg-purple-900">
        {epicCard.map((card) => {
          return (
            <Card card={card} key={card.id} cardFilter={props.cardFilter} />
          );
        })}
      </div>
      <div className="flex justify-center my-6 text-2xl text-yellow-400 items-center">
        <DiamondIcon className="mr-2" />
        전설
      </div>
      <div className="flex flex-wrap h-auto mx-4 border border-black p-4 rounded-2xl bg-yellow-900">
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
