const getRegister = "INSERT INTO register (firstName,lastName,email,password,repassword) VALUES($1,$2,$3,$4,$5)";
const getLogin = "SELECT * FROM  register";

module.exports= {
    getRegister,
    getLogin,
}