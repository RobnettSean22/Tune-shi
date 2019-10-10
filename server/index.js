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
//APP.POST FOT THE POSTS***************************************

app.post('/api/add_post/:tag' , (req, res, next) => {
    const {tag} = req.params //check it it maybe it is body
    const index = profileData.findIndex((element) => {
        return element.tag === parseInt(tag)
    })
    if(index !== -1){
        
        const {newPosting} = req.body
        const newPost = {
            num,
            newPosting,
        }
        console.log(newPost)
        num++
        profileData[index].posted.push(newPost)

        res.status(200).send(profileData)
        
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
        posted,
    }
    tag++;
    profileData.push(newProfile)

    res.status(200).send(profileData)
})
//APP PUT FOR POSTS**********************************************
app.put('/api/update_post/:tag/:num', (req, res, next) => {
    const {tag , num} = req.params
    const {editPost} = req.body
    const index = profileData.findIndex((element => {
        return element.tag === parseInt(tag)
    }))
    if(index !== -1){
        const postIndex = profileData[index].posted.findIndex((element => {
            return element.num === parseInt(num)
            
        }))
        if(postIndex !== -1){
           console.log(profileData[index].posted[postIndex].newPosting = editPost || profileData[index].posted[postIndex].newPosting)
            res.status(200).send(profileData)
           
        }else{
            res.status(404).send('issue in inner if statement')
        }
    }else{
        res.status(404).send('issue in outer if statement')
    }
})

//APP PUT FOR PROFILE******************************************

app.put('/api/update_profile/:tag', (req, res, next) => {
    const {tag} = req.params
    const {newFirstName, newLastName} = req.body
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
//APP DELETE FOR POSTS *************************************
app.delete('/api/delete_post/:tag/:num', (req, res,  next) => {
    const {tag, num} = req.params
    const index = profileData.findIndex((element => {
        return element.tag === parseInt(tag)
    }))
    if(index !== -1){
        const postIndex = profileData[index].posted.findIndex((element => {
            return element.num === parseInt(num)
        }))
        if(postIndex !== -1){
            profileData[index].posted.splice(postIndex, 1)
            res.status(200).send(profileData)
        }else{
            res.status(404).send('still there')
        }
        
    }
})

//APP DELETE FOR PROFILE*************************************
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