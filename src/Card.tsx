import { useState } from "react";

import { CardStructure } from "../card.model";

// 카드 데이터 구조 정의
interface CardProps {
  card: CardStructure;
}

const Card: React.FC<CardProps> = (props) => {
  const [onImage, setOnImage] = useState(false);

  return (
    <>
      <div
        className="flex justify-center w-60 m-2 border rounded-2xl"
        key={props.card.id}
        onClick={() => setOnImage(!onImage)}
      >
        {props.card.name}
      </div>
      {onImage && (
        <div
          onClick={() => setOnImage(!onImage)}
          style={{  }}
        >
          <img
            src={props.card.image}
            alt={props.card.id.toString()}
            style={{ position: "absolute", left: "50%", zIndex: "999" }}
          />
        </div>
      )}
    </>
  );
};

export default Card;
