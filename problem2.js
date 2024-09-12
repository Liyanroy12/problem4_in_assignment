/*function signature/sample */
// function sendNotification(email) {
//     // You have to write your code 
    
//     if(email.indexOf('@') === -1 || email.indexOf('@') !== email.lastIndexOf('@')){
// //         return "Invalid Input";
// //     }

// //     const twoPart = email.split('@');

// //     if(twoPart.length !== 2 || twoPart[0] === ' ' || twoPart[1] === ' '){
// //         return "Invalid Input";
// //     }
// //     const userName = twoPart[0];
// //     const domain = twoPart[1];

// //     return userName + " " + 'sent you an email from' + " " + domain;
// // }

// function sendNotification(email){

//     if(email.indexOf('@') === -1 || email.indexOf('@') !== email.lastIndexOf('@')){
//         return 'Invalid Input';
//     }
//     const twoPart = email.split("@");
//     if(twoPart.length !== 2 || twoPart[0] === ' ' || twoPart[1] === ' '){
//         return 'Invalid Input';
//     }
//     const userName = twoPart[0];
//     const domain = twoPart[1];

//     return userName + " " + 'sent you an email from' + " " + domain;
// }


function sendNotification(email){
    if(email.indexOf('@') === -1 || email.indexOf('@') !== email.lastIndexOf('@')){
        return 'Invalid Input';
    }
    const part = email.split('@');
    if(part.length !== 2 || part[0] === ' ' || part[1] === ' '){
        return "invalid input";
    }
    const userName = part[0];
    const domainName = part[1];

    return userName + " " + 'send you an email from' + " " + domainName;
}
const result = sendNotification("liyan12@gmail.com");
const result2 = sendNotification("farhan34@yohoo.com");
const result3 = sendNotification("nadim.naem5@outlook.com");
const result4 = sendNotification("fahim234.hotmail.com");
const result5 = sendNotification("sadia8icloud.com");
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);