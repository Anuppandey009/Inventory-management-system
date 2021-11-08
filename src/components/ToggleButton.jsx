import {List} from"./List"
import { useState } from "react";
import uuid from 'react-uuid'


export const ToggleButton=({currentList,orderList})=>{
const[btnState,setBtnState]=useState(0)

if(btnState===0){
  return (
    <>
    <button className="btn1" onClick={()=>setBtnState(1)}>Show order List</button>
    {currentList.map((el)=>{
      return <List key={uuid()} el={el}>
      </List>
    })}
    </>
  );
}


if(btnState===1){
  return (
    <>
    <button className="btn1" onClick={()=>setBtnState(0)}>Show current List</button>
    {orderList.map((el)=>{
      return <List key={uuid()} el={el}>
      </List>
    })}
    </>
  );
}
}