import {useState} from "react";


function UpdateCompletedStatus(props)
{
    //Use State
    const [selectedId, setSelectedId] = useState("")
    //Custom Method
function onSubmit(e)
{
    e.preventDefault()
    const completedStatus =
        {
            completed: true
        }
        props.updateItem(selectedId, completedStatus)

}

    //Main

    return (
        <>
        <h1>Update Completed Status</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                placeholder={"Select Id To Update"}
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                />

            </form>
        </>
    )


}

export default UpdateCompletedStatus