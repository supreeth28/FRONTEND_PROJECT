import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './Screens/HomeScreen';
import AboutUs from './Screens/AboutUs';
import Application from './Screens/Application';
import It from './Screens/It';
import Business from './Screens/Business';
import Industry from './Screens/Industry';
import Partner from './Screens/Partner';
import Current from './Screens/Current';
import Careers from './Screens/Careers';
import Contact from './Screens/Contact';
import Login from './Screens/Login';
import Employee from './Screens/Employee';

const router= createBrowserRouter(

  createRoutesFromElements(

<Route path = '/' element = {<App/>}>
     <Route index = {HomeScreen} path = '/' element ={< HomeScreen / > } />
         <Route path='/about' element ={<AboutUs/>} />
         <Route path='/Application' element ={<Application/>} />
         <Route path='/It' element ={<It/>} />
         <Route path='/Business' element ={<Business/>} />
         <Route path='/Industry' element ={<Industry/>} />
         <Route path='/Partner' element ={<Partner/>} />
         <Route path='/Current' element ={<Current/>} />
         <Route path='/Careers' element ={<Careers/>} />
         <Route path='/Contact' element ={<Contact/>} />
         <Route path='/Login' element ={<Login/>} />
         <Route path='/Employee' element ={<Employee/>} />

</Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
