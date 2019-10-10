const express = require('express')
const app = express()
const port = 2222
const {getAllProfiles, getProfile, addProfile, updateProfile, deleteProfile } = require('./controller/profileController')
const {addPost, updatePost, deletePost} = require('./controller/postController')


app.use(express.json())
//GET ALLPROFILES********************************************
app.get('/api/all_profiles', getAllProfiles)
//GET PROFILE***********************************************
app.get('/api/profile/:tag', getProfile)
//APP.POST FOT THE POSTS***************************************

app.post('/api/add_post/:tag', addPost) 
//APP.POST FOR THE PROFILE************************************

app.post('/api/add_profile', addProfile)
//APP PUT FOR POSTS**********************************************
app.put('/api/update_post/:tag/:num', updatePost)

//APP PUT FOR PROFILE******************************************

app.put('/api/update_profile/:tag', updateProfile)
//APP DELETE FOR POSTS *************************************
app.delete('/api/delete_post/:tag/:num', deletePost)

//APP DELETE FOR PROFILE*************************************
app.delete('/api/delete_profile/:tag', deleteProfile)




app.listen(port, () => {console.log(`Im listening on ${port}`)})