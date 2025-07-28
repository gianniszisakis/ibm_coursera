let userRole = "admin"
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = 'subscriber';
let userCategory;
let isAuthenticated = true;

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

let authenticated = isAuthenticated ? 'Authenticated' : 'Not authenticated';
console.log("Authentication Status:", authenticated);

/* Suppose an organization arranges a "Dietary Services" program to provide diets to its employees and customers, based on a person's weight and day-to-day routine. You need to create an authorization-based code to provide access to people based on their roles in organization, such as employees, enrolled members for "Dietary Services," and subscribers. */

let person = 'Employee'
let typeOfService;
let typeOfAccess;

switch(person){
    case 'Employee':
        typeOfService = 'Dietary Services';
        typeOfAccess = 'Full Access';
        break;
    case 'Enrolled Member':
        typeOfService = 'Dietary Services'
        typeOfAccess = 'One on one interaction with dietician';
        break;
    case 'Subscriber':
        typeOfService = 'Dietary Services'
        typeOfAccess = 'Partial Access';
        break;
        case 'Non-Subscriber':
            typeOfService = 'No access'
            typeOfAccess = 'Need to enroll';
            break;
        default:
            typeOfService = 'No access'
            typeOfAccess = 'No access';
            break;
        
}

console.log(`You have ${typeOfService} and ${typeOfAccess}`)