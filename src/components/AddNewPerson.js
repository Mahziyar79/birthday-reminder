import { useState } from "react";

const AddNewPerson = ({ addNewPerson }) => {
  const [newData, setNewData] = useState({
    id:Math.floor(Math.random()*1000),
    name: "",
    age: "",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    addNewPerson(newData);
    setNewData({ ...newData, id:Math.floor(Math.random()*1000) });
  };

  const dayHandler = (e) => {
    const currentTime = new Date().getTime();
    const futureTime = new Date(e.target.value).getTime();
    const minusTime = futureTime - currentTime;
    const dayTime = minusTime / 1000 / 60 / 60 / 24;
    const finalDay = Math.floor(dayTime);
    setNewData({ ...newData, age: finalDay });
  };
  const nameHandler = (e) => {
    setNewData({ ...newData, name: e.target.value });
  };

  return (
    <form className="newCommentForm">
      <div>
        <label>Name : </label>
        <input type="text" placeholder="person name" onChange={nameHandler} />
      </div>
      <div>
        <label>Day : </label>
        <input type="date" placeholder="person age" onChange={dayHandler} />
      </div>
      <button type="submit" onClick={submitHandler}>
        Add
      </button>
    </form>
  );
};

export default AddNewPerson;
