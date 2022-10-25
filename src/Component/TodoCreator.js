import {useState} from "react";


function TodoCreator(props)
{

    //Use State
    const [userInput, setUserInput] = useState("")


    //Custom Method
    function onSubmit(e)
    {
        e.preventDefault()
        const data ={
            content: userInput,
            completed: false
        }
        props.postNewItem(data);
    }


    return (
        <>
            <h1>Todo Creator</h1>
            <form onSubmit={(e) => {onSubmit(e)}}>
            <input
            placeholder={"Input Content"}
            value={userInput}
            onChange={(e) => {setUserInput(e.target.value)}}
            >

            </input>
                <button type={"submit"}>Create Todo</button>
            </form>
        </>
    )
}
export default TodoCreator