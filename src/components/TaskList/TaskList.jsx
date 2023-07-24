import { useSelector} from 'react-redux'
import { Task } from '../Task/Task';
import { selectError, selectVisibleTasks } from '../../redux/selectors';
import css from "./TaskList.module.css";
import { Toast } from '../Toast';



export const TaskList = () => {
    const visibleTasks = useSelector(selectVisibleTasks)
    const error = useSelector(selectError)

    return (
        <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
      {error && <Toast>{error}</Toast>}
    </ul>
  
    )
} 