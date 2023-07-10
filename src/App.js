import './App.css';
import { AppBar, Layout, TaskList } from './components';
import { TaskForm } from './components/TaskForm/TaskForm';

function App() {
  
  return (
    
      <Layout>
        <AppBar/>
        <TaskForm/>
        <TaskList/>
      </Layout>

  );
}

export default App;
