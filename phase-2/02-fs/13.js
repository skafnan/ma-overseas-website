import fs from 'fs/promises'
import chalk from 'chalk'
import rs from 'readline-sync'
import { log } from 'console'

const db = './tasks.json'
async function readDB(){
    try{
        const data= await fs.readFile(db,'utf-8')
        return JSON.parse(data)
    } catch (error){
        fs.writeFile(db,'[]')
        return readDB()
    }
}
    async function writedb(tasks) {
        try{
            const data =JSON.stringify(tasks,null,4)
            await fs.writeFile(db,data)
            
        }catch(error)
    }
async function printTasks(){
    try{
        const data =await fs.readFile(db,'utf-8')
        return JSON.parse(data)

    }catch(error){
        console.log('read DB error',error);
        
    }
}

async function printTasks() {
    try{
        const tasks = await readDB()
        console.log('tasks:');
        console.log(tasks);
        
        
    }catch(error){
        console.log('error printing tasks', error);
        
    }
}
async function CreateTasks() {
    try{
        const tasks = await readDB()
        const newtasks = {
           id: Date.now() 
           task: rs.questionInt('enter the task name:'),
           deadline : rs.questionInt('please enter the deadline(dd/mm/yyyy):'),
           priority : rs.questionInt('enter the priority (high/medium/low):')
        }

    }
}


async function updateTasks() {
    try{
        const tasksId = rs.questionInt('please enter the task ID:')
        const tasks = await readDB()

        const taskIndex = tasks.findIndex (t=>t.id == taskId)
        if (taskIndex==-1){
            return console.log('task not found');
            
        }
        const newtasks ={
            ...tasks[taskIndex]
            priority: rs.questionInt('please enter the new task priority (high/medium/low)')
            deadline: rs.questionInt('please enter the new deadline for task')
        }
    }
     
}










