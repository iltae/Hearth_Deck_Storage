import React, { useState, useEffect } from "react";

import { CardStructure } from "../card.model";
import { heros } from "./heros";

import HeroSelectButton from "./HeroSelectButton";
import SearchInput from "./SearchInput";
import CardContainer from "./CardContainer";

const App: React.FC = () => {
  const heroData = heros;

  // 현재 직업
  const [currentHero, setCurrentHero] = useState<string>("");

  // 현재 직업에 맞는 카드 데이터 저장
  const [currentHeroCard, setCurrentHeroCard] = useState<CardStructure[]>([]);

  // 카드 검색 데이터 저장
  const [cardFilter, setCardFilter] = useState<string[]>([]);

  // Oauth 통신을 위한 POST 요청 및 ACCESS_TOKEN 저장
  useEffect(() => {
    fetch("https://oauth.battle.net/token", {
      body: "grant_type=client_credentials",
      headers: {
        Authorization: "Basic " + process.env.REACT_APP_OAUTH,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("ACCESS_TOKEN", data["access_token"]);
      });
  }, []);

  // 버튼 클릭 후 카드 데이터 상태 끌어올리기 위한 함수
  const currentHeroCardHandler = (card: CardStructure[], hero: string) => {
    setCurrentHero(hero);
    setCurrentHeroCard(card);
  };

  // 검색 데이터 상태 끌어올리기 위한 함수
  const filterCardHandler = (filter: string[]) => {
    setCardFilter(filter);
  };

  return (
    <div className="bg-gray-800">
      <div className="flex flex-nowrap justify-center py-12 text-5xl text-gray-200">
        하스스톤 투기장 카드 목록
      </div>
      <div className="flex flex-nowrap justify-center">
        {heroData.map((el) => {
          return (
            <HeroSelectButton
              key={el.class}
              heros={el}
              currentHeroCardHandler={currentHeroCardHandler}
            />
          );
        })}
      </div>
      <div className="h-12" />
      <div className="text-4xl text-gray-200 flex justify-center">{currentHero}</div>
      <div className="flex justify-end mx-4">
        <SearchInput filterCardHandler={filterCardHandler} />
      </div>
      <div className="h-12" />

      {currentHeroCard.length !== 0 && (
        <CardContainer
          currentHeroCard={currentHeroCard}
          cardFilter={cardFilter}
        />
      )}
    </div>
  );
};

export default App;
