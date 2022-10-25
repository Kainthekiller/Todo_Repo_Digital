import Button from "@mui/material/Button";


function PrintAllItems(props)
{
    //Custom Methods


    //Main


    return (
        <>
        <Button onClick={() => {props.fetchAllItems()}}>Print All Items</Button>
            {props.items.map((data) => {
            const{id, content, completed} = data
            return  (
            <div key={id} className={"allList"}>
            <ol>
            <li>id: {id}</li>
            <li>Content: {content}</li>
            <li>Completed: {completed.toString()}</li>
                <button  onClick={(e) => props.deleteItem(id)}>Delete Me</button>
                <br/>
                <br/>
                <button sx={{space: 20}} onClick={(e) => props.updateItem(id, {completed: true})}>Mark Completed</button>
            </ol>
            <br/>
            </div>
            )
        } )}
        </>
    )
}

export default PrintAllItems

