type HeroProps =  {
  heros: { class: string; name: string; image: string }[];
  onSelectHero: (hero: string) => any;
}

const HeroSelectButton: React.FC<HeroProps> = (props) => {

  return (
    <div style={{ display: "flex", textAlign: "start", paddingLeft: "2px", paddingRight: "2px"}}>
      {props.heros.map((hero) => (
        <button
          key={hero.name}
          onClick={props.onSelectHero(hero.class)}
          style={{ width: "9.09%", height: "10vh", margin: "2px" }}
        >
          <img src={hero.image} alt={hero.class} style={{ width: "60%" }} />
        </button>
      ))}
    </div>
  );
};

export default HeroSelectButton;
