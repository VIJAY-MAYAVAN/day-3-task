let obj1 = {name:"person 1",age:"5"}
let obj2 = {age:"5",name:"person 1"}
console.log(obj1)

let flag;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for (key in obj1){
        if(obj1[key]==obj2[key]){
            flag = true
        }
        else{
            flag = false
        }
    }
}
else{
    flag = false
}
console.log(flag)