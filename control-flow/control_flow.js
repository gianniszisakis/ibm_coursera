let userRole = "admin"
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = 'subscriber';
let userCategory;

if(userRole === 'admin'){
    accessLevel = 'Full access granted';
} else if (userRole === 'manager') {
    accessLevel = 'Limited access granted';
} else {
    accessLevel = 'No access granted';
}

if(isLoggedIn){
if(userRole === 'admin'){
    userMessage = 'Welcome, admin'
} else {
    userMessage = 'Welcome, user'
}
} else {
    userMessage = 'You are not logged in'
}
console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);


switch(userType){
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory = 'subscriber';
        break;
    default:
        userCategory = 'Unknown'
}

console.log("User Category:", userCategory);