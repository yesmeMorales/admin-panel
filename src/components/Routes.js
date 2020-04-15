import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Tareas from "../containers/Tareas";
import Usuarios from "../containers/Usuarios";


export default function  Routes(props) {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/">
               <Tareas
                  usersdb = {props.usersdb}
                  tasksdb={props.tasksdb}
                  addTaskdb={props.addTaskdb}
                  setUserValue={props.setUserValue}
                  removeTaskdb={props.removeTaskdb}
                  updateTaskdb={props.updateTaskdb}
                  handleUpdateTaskdb={props.handleUpdateTaskdb}
                  textContainerTask={props.textContainerTask}
                  handleFinishUpdateTaskdb={props.handleFinishUpdateTaskdb}
                  completeTaskdb={props.completeTaskdb}

               />
            </Route>
            <Route exact path="/Usuarios">
               <Usuarios
                  usersdb = {props.usersdb}
                  addUserdb = {props.addUserdb}
                  removeUserdb = {props.removeUserdb}
                  updateUserdb={props.updateUserdb}
                  handleFinishUpdatedb={props.handleFinishUpdatedb}
                  handleUpdateUserdb={props.handleUpdateUserdb}
                  nameContainerUser={props.nameContainerUser}
               />
            </Route>
         </Switch>
      </BrowserRouter>
   );

}
