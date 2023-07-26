import { Helmet } from "react-helmet"
import { TaskList } from "../../components"
import { TaskForm } from "../../components/TaskForm"


const Tasks = () => {


    return (<>
        <Helmet>
            <title>Your tasks</title>
        </Helmet>
        <div>
            <TaskForm/>
            <TaskList/>
            </div>
    </>)
}

export default Tasks