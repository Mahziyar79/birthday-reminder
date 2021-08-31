const RenderOneData = (props) => {
  const deleteOnePerson = (id) => {
    props.setPeople(props.people.filter((p) => p.id !== id));
  };

  return (
    <div className="cardBox">
      <div className="people">
        <div className="imagePerson">
          <img src={props.item.image} />
        </div>
        <div className="infoPerson">
          <p>{props.item.name}</p>
          <p>days left :{props.item.age}</p>
        </div>
      </div>
      <button onClick={() => deleteOnePerson(props.item.id)}>Delete</button>
    </div>
  );
};

export default RenderOneData;
