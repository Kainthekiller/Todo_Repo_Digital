import {useState} from "react";


function DeleteItem(props)

{
    //Use State
const [selectedId, setSelectedId] = useState("")
    //Custom Method

    function onSubmit(e)
    {
        e.preventDefault()
        props.deleteItem(selectedId)
    }

    //Main
    return (

        <>
        <h1>Delete Item</h1>
            <p>Input Id To Delete</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                placeholder={"Input Id To Delete"}
                value={selectedId}
                onChange={(e) => {setSelectedId(e.target.value)}}
                />


            </form>
        </>
    )
}

export default DeleteItem