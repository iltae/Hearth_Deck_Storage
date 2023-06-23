import React, { useState, useEffect } from "react";

import { CardStructure } from "../card.model";
import { heros } from "./heros";

import HeroSelectButton from "./HeroSelectButton";
import CardContainer from "./CardContainer";

const App: React.FC = () => {
  const heroData = heros;

  // 현재 직업에 맞는 카드 데이터 저장
  const [currentHeroCard, setCurrentHeroCard] = useState<CardStructure[]>([]);

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
  const currentHeroCardHandler = (card: CardStructure[]) => {
    setCurrentHeroCard(card);
  };

  return (
    <>
      <div className="flex flex-nowrap justify-center my-12 text-5xl">HEARTHSTONE ARENA CARD LIST</div>
      <div className="flex flex-nowrap justify-center" >
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
      <div className="h-24"/>
      <CardContainer currentHeroCard={currentHeroCard}/>
    </>
  );
};

export default App;
