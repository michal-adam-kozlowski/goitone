import './App.css';
import { AppBar, Layout, TaskList } from './components';
import { TaskForm } from './components/TaskForm/TaskForm';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from './redux/selectors';
import { useEffect } from 'react';
import { fetchTasks } from './redux/operations';

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])
  
  return (
    
      <Layout>
        <AppBar/>
        <TaskForm/>
        {
          isLoading && !error && <b>Request in progress</b>
        }
        <TaskList/>
        { error && <p>{error}</p>}
      </Layout>

  );
}

export default App;
