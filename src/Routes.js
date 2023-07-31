import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import home from '../src/components/main/home';
import buy from '../src/components/main/buy';
import rent from '../src/components/main/rent';
import contact from '../src/components/main/contact';
import admin from '../src/components/main/admin';
import create from './components/main/create';
import update from './components/main/update';

function LaRoute() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" Component={home}/>
        <Route path="/buy" Component={buy}/>
        <Route path="/rent" Component={rent}/>
        <Route path="/contact" Component={contact}/>
        <Route path="/admin" Component={admin}/>
        <Route path="/create" Component={create}/>
        <Route path="/update" Component={update}/>
      </Routes>
    </Router>
    </div>
  );
}

export default LaRoute;