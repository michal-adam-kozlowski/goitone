import { Button } from "./../Button"
import { useSelector } from "react-redux"
import { statusFilters } from "../../redux/constants"
import { selectStatusFilter } from "../../redux/selectors"
import { useDispatch } from 'react-redux'
import { setStatusFilter } from "../../redux/slices"



export const StatusFilter = () => {
    const filter = useSelector(selectStatusFilter)
    const dispatch = useDispatch()

    const handleFilterChange = filter => dispatch(setStatusFilter(filter))

    return (
        <div>
            <Button onClick={()=> handleFilterChange(statusFilters.all)} selected={filter === statusFilters.all}>All</Button>
            <Button onClick={()=> handleFilterChange(statusFilters.active)} selected={filter === statusFilters.active}>Active</Button>
            <Button onClick={()=> handleFilterChange(statusFilters.completed)} selected={filter === statusFilters.completed}>Completed</Button>
        </div>
    )
}