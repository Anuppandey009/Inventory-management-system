
export const List=({el})=>{
  const handleAdd=(e)=>{
   e.target.innerHTML="Purchased";
   e.target.setAttribute("class","purchased")
  
  }
  const handlenotAdd=(e)=>{
   e.target.innerHTML="not-purchased";
   e.target.setAttribute("class","not-purchased")
  }
  return(
    <div>
    <p>{el}</p>
    <button onClick={handleAdd}>Add</button>
     <button onClick={handlenotAdd}>Not added</button>
    </div>
  )
}