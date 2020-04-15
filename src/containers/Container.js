import React, { useState, useEffect, Component } from "react";

import AppNav from '../components/AppNav';
import Routes from '../components/Routes';

import dbConfig from '../config/config';


function useUsers(){
    const [usersdb, setUsersdb] = useState([]);

    useEffect(()=>{

        const unsubscribe =  dbConfig.firestore().collection("users").onSnapshot((snapshot) => {
            const newUsers = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setUsersdb(newUsers);
        })

        return () => unsubscribe();
    }, [])
    return usersdb;
}

function useTasks(){
    const [tasksdb, setTasksdb] = useState([]);
    useEffect(()=>{

        const unsubscribe =  dbConfig.firestore().collection("tasks").onSnapshot((snapshot) => {
            const newTasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()

            }))

            setTasksdb(newTasks);
            console.log(newTasks);
        })

        return () => unsubscribe();
    }, [])
    return tasksdb;
}

export default () => {
        const usersdb = useUsers();
        const tasksdb = useTasks();
        const [name, setName] = useState();
        const [text, setText] = useState();
        const [userValue, setUserValue] = useState("");

        const addUserdb = name => {
            dbConfig.firestore().collection('users').add({
                name,
                isEdit: false
            })
        };

        const removeUserdb = index => {
            dbConfig.firestore().collection('users').doc(index).delete()
        };

        const updateUserdb = (userdb) =>{
            dbConfig.firestore().collection('users').doc(userdb.id).set({...userdb, isEdit: true})
            setName(userdb.name);
            //setIsUpdate(!isUpdate);
        }


        const handleUpdateUserdb = (e, userdb) => {

            setName(e.target.value);
            console.log(name);
            //dbConfig.firestore().collection('users').doc(userdb.id).set({...userdb, name})
        };

        const handleFinishUpdatedb = (userdb) => {
            dbConfig.firestore().collection('users').doc(userdb.id).set({...userdb, name, isEdit: false})

        };


        const addTaskdb = text => {
            dbConfig.firestore().collection('tasks').add({
                text,
                isCompleted: false,
                isEdit: false,
                user: userValue
            })
            console.log(userValue);
        };

        const removeTaskdb = index => {
            dbConfig.firestore().collection('tasks').doc(index).delete()
        };

        const updateTaskdb = (taskdb) =>{
            dbConfig.firestore().collection('tasks').doc(taskdb.id).set({...taskdb, isEdit: true})
            setText(taskdb.text);
            //setIsUpdate(!isUpdate);
        }

        const handleUpdateTaskdb = (e, userdb) => {

            setText(e.target.value);
            console.log(text);
            //dbConfig.firestore().collection('users').doc(userdb.id).set({...userdb, name})
        };

        const handleFinishUpdateTaskdb = (taskdb) => {
            dbConfig.firestore().collection('tasks').doc(taskdb.id).set({...taskdb, text, isEdit: false, user: userValue})

        };

        const completeTaskdb = taskdb => {
            dbConfig.firestore().collection('tasks').doc(taskdb.id).set({...taskdb, isCompleted: true})
        };

        return (

            <React.Fragment>
                <AppNav/>
                <Routes
                    usersdb={usersdb}
                    addUserdb={addUserdb}
                    removeUserdb={removeUserdb}
                    updateUserdb={updateUserdb}
                    handleFinishUpdatedb={handleFinishUpdatedb}
                    handleUpdateUserdb={handleUpdateUserdb}
                    nameContainerUser={name}
                    tasksdb={tasksdb}
                    addTaskdb={addTaskdb}
                    setUserValue={setUserValue}
                    removeTaskdb={removeTaskdb}
                    updateTaskdb={updateTaskdb}
                    handleUpdateTaskdb={handleUpdateTaskdb}
                    textContainerTask={text}
                    handleFinishUpdateTaskdb={handleFinishUpdateTaskdb}
                    completeTaskdb={completeTaskdb}
                />
            </React.Fragment>
        );
}
