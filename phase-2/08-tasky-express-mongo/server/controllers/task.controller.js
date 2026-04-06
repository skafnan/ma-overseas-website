import Task from '../models/task.js'

const createTask = async (req,res) =>{
try{
    if(!req.body){
        return res.send ('missing body')
    }
    const {task,deadline,priority}= req.body

    if (!task || !deadline){
        return res.send ('Incomplete or invalid data ❌')
    }
    const newTask = Task({task,deadline,priority})
    newTask.save()

    res.send ('task saved successfully ☑')

} catch(error){
    console.log(error)
    res.send(error)
    
}
}































































































































const deletetaskId = async (req,res)=>  {
    try{
        const id = req.params.id
        if(id.length!=24){
            return  res.status(400).send({
                sucess: f0
            })
        }
    }
}