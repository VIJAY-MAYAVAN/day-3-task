const URL ="https://restcountries.com/v3.1/all"
const req = new XMLHttpRequest()
//console.log(req)
req.addEventListener("load",function(){
    const obj = JSON.parse(this.response)
    console.log (obj)
    for (let val of obj){
        console.log(val.flags.svg)
    }  
})
req.open("GET",URL)
req.send()
 