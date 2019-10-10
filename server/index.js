const express = require('express')
const app = express()
const port = 2222
const profileData = require('./controller/data')

let tag = 3
let num = 1

app.use(express.json())

app.get('/api/all_profiles', (req, res, next) => {
    res.status(200).send(profileData)
})
//function for index
app.get('/api/profile/:tag' , (req, res, next) => {
    const {tag} = req.params
    const index = profileData.findIndex((element => {
        return element.tag === parseInt(tag)
    }))
    if(index !== -1){
        res.status(200).send(profileData[index])
    }else{
        res.status(404).send('try again bruh')
    }
})
//APP.POST FOT THE POTS***************************************
app.post('/api/add_post/:tag' , (req, res, next) => {
    const {tag} = req.params //check it it maybe it is body
    const {index} = profileData.findIndex((element) => {
        return element.tag === parseInt(tag)
    })
    if(index !== -1){
        
        const {newPosting} = req.body
        const newPost = {
            num,
            newPosting,
        }
        num++
        profileData[index].posted.push(newPost)
        res.status(200).send(profileData[index])
        
    }else{
        res.status(404).send('keep trying')
    }
    
})

//APP.POST FOR THE PROFILE************************************
app.post('/api/add_profile', (req, res, next) => {
    const {firstName, lastName, posted} = req.body
    const newProfile = {
//think about adding first name and last name together and then add a username in to the mix        
        tag,
        firstName,
        lastName,
        posted
    }
    tag++;
    profileData.push(newProfile)

    res.status(200).send(profileData)
})
app.put('/api/update_profile/:tag', (req, res, next) => {
    const {tag} = req.params
    const {newFirstName, newLastName} = req.query
    const index = profileData.findIndex((element => {
        return element.tag === parseInt(tag)
    }))

    if(index !== -1){
        profileData[index].firstName = newFirstName || profileData[index].firstName
        profileData[index].lastName = newLastName || profileData[index].lastName

        res.status(200).send(profileData)
        console.log(profileData)
    }else{

        res.status(404).send('did not update correctly')

    }
    
    

})
app.delete('/api/delete_profile/:tag', (req, res, next) => {
    const {tag} = req.params
    const index = profileData.findIndex((element => {
        return element.tag === parseInt(tag)
    }))
    if(index !== -1){
        profileData.splice(index,1)
        res.status(200).send(profileData)
    }else{
        res.status(404).send('did not delete')
    }
})




app.listen(port, () => {console.log(`Im listening on ${port}`)})