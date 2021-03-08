const express= require('express')
const path=require('path')
const app=express()
const port = process.env.PORT || 3000
const restaurantDir = path.resolve('./restaurants')


app.use(express.static('.'))

app.listen(port, ()=>{
console.log("listening on port", port)})

function restaurantFilePath(restaurantId){
    return path.join(restaurantDir, restaurantId, + ".json");
}

app.get('/restaurants/:restaurantId', (req, res)=>{
    res.sendFile("/restaurants.json")
})
app.get('*', (req,res)=>{
    return
}