import { useState } from "react";

import { CardStructure } from "../card.model";

// 카드 데이터 구조 정의
interface CardProps {
  card: CardStructure;
  color: string
};

const Card: React.FC<CardProps> = (props) => {

  const [onImage, setOnImage] = useState(false);

  return (
    <>
      <div
        className="flex justify-center w-60 m-2 border rounded-2xl z-10"
        key={props.card.id}
        onClick={() => setOnImage(!onImage)}
      >
        {props.card.name}
      </div>
      {onImage && (
        <div
          className="fixed z-50 w-full h-full top-0 left-0"
          onClick={() => setOnImage(!onImage)}
        >
          <img
            className="fixed inset-0 m-auto"
            src={props.card.image}
            alt={props.card.id.toString()}
          />
        </div>
      )}
    </>
  );
};

export default Card;
