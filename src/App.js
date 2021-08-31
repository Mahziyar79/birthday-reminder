import React, { useState } from "react";
import data from "./data";
import "./App.css";
import RenderPeople from "./components/RenderPeople";
import AddNewPerson from "./components/AddNewPerson";

function App() {
  const [people, setPeople] = useState(data);
  const [isShowAdd, setIsShowAdd] = useState(false);

  const deleteHandler = () => {
    setPeople([]);
  };
  const addNewPerson = (data) => {
    setPeople([...people, data]);
  };

  return (
    <main className="App">
      <section className="container">
        <div className="headerBox">
          <h3>{people.length} birthdays today</h3>
          <button className="addBtn" onClick={() => setIsShowAdd(!isShowAdd)}>
            {isShowAdd ? "Cancel" : "Add New"}
          </button>
        </div>
        {isShowAdd && <AddNewPerson addNewPerson={addNewPerson} />}
        {people.length ? (
          <RenderPeople people={people} setPeople={setPeople} />
        ) : (
          <h2> Your List is Empty </h2>
        )}
        <button onClick={deleteHandler}>clear all</button>
      </section>
    </main>
  );
}

export default App;
