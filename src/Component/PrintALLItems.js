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
            </ol>
            <br/>
            </div>
            )
        } )}
        </>
    )
}

export default PrintAllItems

