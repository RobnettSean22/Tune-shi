const express = require('express')
const app = express()
const port = 2222
const profileData = require('./controller/data')

let tag = 3

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

app.post('/api/add_profile', (req, res, next) => {
    const {firstName, lastName, posted} = req.params
    const newProfile = {
//think about adding first name and last name together and then add a username in to the mix        
        tag,
        firstName,
        lastName,
        posted
    }
    id++
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
    }else{

        res.status(404).send('did not update correctly')

    }
    
    

})
// app.delete




app.listen(port, () => {console.log(`Im listening on ${port}`)})