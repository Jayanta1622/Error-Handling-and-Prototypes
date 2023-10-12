class User{
    constructor(username,password){
        this.username = username;
        this.password = username;
    }
    getPassword(){
        return this.password.replace(/./g, '*');
    }
    setPassword(newPassword){
        if(newPassword.length>=8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)){
            this.password=newPassword;
        }else{
            console.log("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

const user = new User("Mithun","Password123");

user.setPassword("myPassword");
user.setPassword("MyPassword");
user.setPassword("MyPassword123");
console.log(user.getPassword());