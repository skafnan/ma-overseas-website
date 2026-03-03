import bcrypt from 'bcrypt'

const pass = 'codeforindia'

const hashPassword = async(password) =>{
    const hashPassword= await bcrypt.hash(password,15)
    return hashPassword
}
console.log(await hashPassword(pass));
