import { useSelector } from 'react-redux'
import { selectTaskCount } from '../../redux/selectors';


export const TaskCounter = () => {
    const count = useSelector(selectTaskCount)

    return (
        <div>
            <p>Active: {count.active}</p>
            <p>Completed: {count.completed}</p>
        </div>
    )
}