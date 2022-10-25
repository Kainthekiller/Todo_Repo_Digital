import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import PrintALLItems from "./Component/PrintALLItems";
import TodoCreator from "./Component/TodoCreator";
import UpdateCompletedStatus from "./Component/UpdateCompletedStatus";
import DeleteItem from "./Component/DeleteItem";
function App() {
    const url = "http://localhost:3001/api/items"
    //Use State
    const [items, setItems] = useState([])


    //Use Effect
    useEffect(() =>
    {
    }, [])


    //custom methods
    //React Async is a promise-based library that offers a declarative
    //API to make API calls.
   // It provides a React component and a Hook for declarative promise resolution and data fetching.
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
    //UPDATE PATCH
    async function updateItem(id, completedData) {

        await axios.patch(url + "/" + id.toString(), completedData)
        await fetchAllItems()
    }
    //Delete
    async function deleteItem(id)
    {
        await axios.delete(url + "/" + id.toString())
        await fetchAllItems()
    }








    //Get ALL ITEMS METHOD

  return (

    <div className="App">
        {/**/}
        <h1>TODO APPLICATION</h1>
        <PrintALLItems fetchAllItems={fetchAllItems} items={items} setItems={setItems} deleteItem={deleteItem} updateItem={updateItem}></PrintALLItems> {/*GET*/}
        <TodoCreator postNewItem={postNewItem}/> {/*POST*/}
        <UpdateCompletedStatus updateItem={updateItem}/> {/*PATCH*/}
        <DeleteItem deleteItem={deleteItem}/> {/*DELETE*/}
    </div>
  );
}

export default App;
