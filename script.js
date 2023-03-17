//your JS code here. If required.
let name = document.getElementById('name');
let age = document.getElementById('age');

function voter(){
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if(age.value > 18){
            resolve(`${alert("Welcome ,"+" "+ name.value+".You can vote.")}`)
        }else{
            reject(`${alert("Oh sorry ,"+" "+ name.value+".You aren't old enough.")}`)
        }
    },4000)
    })
   
}