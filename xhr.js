const URL ="https://restcountries.com/v3.1/all"
const req = new XMLHttpRequest()
//console.log(req)
req.addEventListener("load",function(){
    const obj = JSON.parse(this.response)
  //  console.log (this.response)
    for (let val of obj){
       // console.log(val.flags.svg)
        console.log("Country:"+val.name.common+",Region:"+val.region+",Sub Region:"+val.subregion+",Population:"+val.population)
    }  
//for (let val of this.response){
    //  console.log(val.flags.png)   
})
req.open("GET",URL)
req.send()