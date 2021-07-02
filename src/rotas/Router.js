import React, { useState } from 'react';
import All_person from '../pages/person/All_person';
import Person_details from '../pages/person/Person_details';
import All_epp from '../pages/episodes/All_epp';
import Epp_details from '../pages/episodes/Epp_details';
import HomePage from '../pages/homepage/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage/>
        </Route>

        <Route exact path={"/person"}>
          <All_person/>
        </Route>

        <Route exact path = {'/person/:id'}>
          <Person_details/>
        </Route>
        <Route exact path={"/episodes"}>
          <All_epp/>
        </Route>

        <Route exact path = {'/episodes/:code'}>
          <Epp_details/>
        </Route>
        
        <Route>
          <p>Erro 404: página não encontrada</p>
        </Route>
      </Switch>
    </BrowserRouter>
   
  );
};

export default Router;