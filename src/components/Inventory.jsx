import { useState } from "react";
import { ToggleButton } from "./ToggleButton.jsx";
export const Inventory = () => {
  const [text, setText] = useState("");

  // we will create the handle function to change the state of the input box
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [currentList] = useState([]);
  const [orderList] = useState([]);

  const addCurrentList = () => {
    currentList.push(text);
    console.log(currentList);
    setText("");
  };
  const addOrderList = () => {
    orderList.push(text);
    console.log(orderList);
    setText("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="Inventory"
          placeholder="Enter the item"
          value={text}
          onChange={handleChange}
        />
        <br />
        <br />
        <button className="btn" onClick={addCurrentList}>Add Current list</button>
        <br />
        <br />
        <button  className="btn"  onClick={addOrderList}>Add Order List</button>
         <br />
        <br />
      </div>
      <div>
        <ToggleButton currentList={currentList} orderList={orderList}>
          {" "}
        </ToggleButton>
      </div>
    </div>
  );
};
