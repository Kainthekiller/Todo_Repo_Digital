import './App.css';
import React, {useEffect, useState} from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import printALLItems from "./Component/PrintALLItems";
import PrintALLItems from "./Component/PrintALLItems";
import TodoCreator from "./Component/TodoCreator";
function App() {
    const url = "http://localhost:3001/api/items"
    //Use State
    const [items, setItems] = useState([])


    //Use Effect
    useEffect(() =>
    {
    }, [])


    //custom methods
    //GET
   async function fetchAllItems()
    {
        const response = await
        axios.get(url);
        setItems(response.data)
    }
    //POST
    async function postNewItem(data)
    {
        await axios.post(url, data)
        await fetchAllItems();
    }





    //Get ALL ITEMS METHOD

  return (
    <div className="App">
        <h1>TODO APPLICATION</h1>
        <PrintALLItems fetchAllItems={fetchAllItems} items={items} setItems={setItems}></PrintALLItems>
        <TodoCreator postNewItem={postNewItem}/>
    </div>
  );
}

export default App;
