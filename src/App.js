import './App.css';
import { Layout, PrivateRoute, RestrictedRoute } from './components';
import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home/Home'))
const RegisterPage = lazy(() => import('./pages/Register/Register'))
const LoginPage = lazy(() => import('./pages/Login/Login'))
const TasksPage = lazy(() => import('./pages/Tasks/Tasks'))

function App() {
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route 
          path='/register' 
          element={
            <RestrictedRoute redirectTo='tasks' component={<RegisterPage/>} />
          }
        />
        <Route 
          path='/login' 
          element={
            <RestrictedRoute redirectTo='tasks' component={<LoginPage/>} />
          }
        />
        <Route 
          path='/tasks' 
          element={
            <PrivateRoute redirectTo='/login' component={<TasksPage/>}/>
          }
          />
      </Route>
    </Routes>   
  );
}

export default App;
