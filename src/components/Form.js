import { useState } from "react";
export default function Form({onAddItems}){
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)
  


  function handleSubmit(e){
    e.preventDefault()
    if (!description) return(
      alert("description cannot be empty")
    );
    const newItem = {description, quantity, packed: false, id: Date.now()}
    console.log(newItem)
    onAddItems(newItem)
    setDescription("")
    setQuantity(1)
  }
  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do you need for your 😍 trip?</h3>
    <select value={quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
      {Array.from({length: 20}, (_, i)=> i+1).map((num)=> 
      <option key={num} value={num}>{num}</option>)}
    </select>
    <input onChange={(e)=> setDescription(e.target.value)} value={description} type="text" placeholder="Item..."/>
    <button>Add</button>
  </form>
}