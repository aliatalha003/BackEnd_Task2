// const request =require("request")

// const url="https://api.weatherapi.com/v1/current.json?key=37f39c0668174e19ab500710242007&q=italy&aqi=no"

// request({url,json:true},(error,response)=>{
//     // console.log(response.body)
//     // const data=JSON.parse(response.body)
//     // console.log(data.location.name ," , ",data.current.condition.text)

//     // console.log(response.body.location.name ," , ",response.body.current.condition.text)
//     if(error)
//     {
//         console.log("error has occured")
//     }
//     else if(response.body.error)
//     {
//         console.log(response.body.error.message)
//     }
//     else{
//     console.log(response.body.location.name ," , ",response.body.current.condition.text)

//     }
// })



//////////////////////////////////////////Lec6
// const request =require("request")
// const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

// request({url:geocodeUrl,json:true},(error,response)=>{
//     if(error){
//         console.log("unable to connect the geocode service")
//     }
//     else if(response.body.message){//token errors
//         console.log(response.body.message)
//     }
//     else if(response.body.features.length==0){
//         console.log("Unable to find the location")
//     }
//     else {
//         const longitude=response.body.features[0].center[0]
//         const latitude=response.body.features[0].center[1]
//         console.log("longitude: ",longitude,"latitude: ",latitude )
//         // console.log(response.body)
//     }
// })




// const forecast = (latitude, longitude, callback)=>{
//     const url = "https://api.weatherapi.com/v1/current.json?key=37f39c0668174e19ab500710242007&q=" + latitude + "," + longitude

//     request({ url, json: true }, (error, response) => {
//         if (error) {
//             callback("unable to connect weather api service", undefined)
//         }
//         else if (response.body.error) {
//             callback(response.body.error.message, undefined)
//         }

//         else {
//             callback(undefined, response.body.location.name+ " it is "+ response.body.current.condition.text)
            
//         }
//     })
// }





// const geocode=(address,callback)=>{
// const geocodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

// request({url:geocodeUrl,json:true},(error,response)=>{
//     if(error){
//         callback("unable to connect the geocode service",undefined)
//     }
//     else if(response.body.message){//token errors
//         callback(response.body.message,undefined)
//     }
//     else if(response.body.features.length==0){
//         callback("Unable to find the location",undefined)
//     }
//     else {
       
//         callback(undefined,{
//             longitude:response.body.features[0].center[0],
//             latitude:response.body.features[0].center[1]
//         })
//         // console.log(response.body)
//     }
// })
// }


const request = require("request")

const forecast=require("./data1/forecast")

const geocode=require("./data1/geocode")

console.log(process.argv[2])
const country =process.argv[2]
geocode(country,(error,data)=>{
    console.log("Error: ",error)
    console.log("Data: ",data)
    forecast(data.latitude,data.longitude,(error,data)=>{
        console.log("Error: ",error)
        console.log("Data: ", data)
    })
})



