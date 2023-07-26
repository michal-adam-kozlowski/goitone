import { useDispatch } from 'react-redux';
import './App.css';
import { Layout, PrivateRoute, RestrictedRoute } from './components';
import { lazy, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks';
import { refreshUser } from './redux/auth/operations';

const HomePage = lazy(() => import('./pages/Home/Home'))
const RegisterPage = lazy(() => import('./pages/Register/Register'))
const LoginPage = lazy(() => import('./pages/Login/Login'))
const TasksPage = lazy(() => import('./pages/Tasks/Tasks'))

function App() {
  const dispatch = useDispatch()
  const { isRefreshing } = useAuth()

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])
  
  return isRefreshing ? (<div>Refreshing user...</div>) : (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route 
          path='/register' 
          element={
            <RestrictedRoute redirectTo='/tasks' component={<RegisterPage/>} />
          }
        />
        <Route 
          path='/login' 
          element={
            <RestrictedRoute redirectTo='/tasks' component={<LoginPage/>} />
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
