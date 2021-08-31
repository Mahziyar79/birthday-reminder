import RenderOneData from "./RenderOneData";

const RenderPeople = ({ people, setPeople }) => {
  return people.map((item) => (
    <RenderOneData
      key={item.id}
      item={item}
      people={people}
      setPeople={setPeople}
    />
  ));
};

export default RenderPeople;
