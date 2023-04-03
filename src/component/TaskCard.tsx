// Soubor funkce
// Jedná se o znovupoužitelnou komponentu (komponenty jsou funkce)

import {Task} from "../data/init-data";

interface Props {
    task: Task

    onTaskDone: (task: Task) => void
}

const TaskCard = ({task, onTaskDone} : Props) => {
    const doneClickHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        task.done =  e.target.checked;

        onTaskDone(task);
        console.table(task);
    }

    return <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.creationDate.toISOString()}</span>
        <span>{task.updateDate?.toISOString()}</span>
        <br/>
        <label>Splněno</label>
        <input type="checkbox" checked={task.done} name="done" onChange={doneClickHandle}/>
    </div>
}

// Exportování funkce (ven mimo soubor, aby byl funkce byla dostupná v projektu)
export default TaskCard;