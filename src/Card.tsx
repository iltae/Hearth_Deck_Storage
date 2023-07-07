import { useEffect, useState } from "react";

import { CardStructure } from "../card.model";

// 카드 데이터 구조 정의
interface CardProps {
  card: CardStructure;
  cardFilter: string[];
}

const Card: React.FC<CardProps> = (props) => {
  const [onImage, setOnImage] = useState(false);
  const [onFilter, setOnFilter] = useState(false);

  useEffect(() => {
    setOnFilter(false);
    for (let filter of props.cardFilter) {
      if (filter.length !== 0 && props.card.name.includes(filter)) {
        setOnFilter(true);
        break;
      }
    }
  }, [props.cardFilter, props.card.name]);

  return (
    <>
      <div
        className="flex justify-center items-center w-60 h-10 m-2 border border-black rounded-2xl z-10 text-gray-100 font-thin"
        key={props.card.id}
        onClick={() => setOnImage(!onImage)}
        style={{
          backgroundImage: `url(${props.card.image})`,
          backgroundPosition: "47% 23%",
          backgroundSize: "223%",
          textShadow: onFilter
            ? "1.5px 0 white, 0 1.5px white, -1.5px 0 white, 0 -1.5px white"
            : "1.5px 0 black, 0 1.5px black, -1.5px 0 black, 0 -1.5px black",
          boxShadow: onFilter
            ? "0.2rem 0.2rem black, -0.2rem -0.2rem black, 0.2rem -0.2rem black, -0.2rem 0.2rem black"
            : "",
          color: onFilter ? "black" : "",
        }}
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
