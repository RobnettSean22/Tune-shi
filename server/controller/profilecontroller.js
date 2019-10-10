const profileData = require('./data.json')

let tag = 3
let num = 1

module.exports= {
    getAllProfiles:(req, res, next) => {
        res.status(200).send(profileData)
    },
    getProfile:(req, res, next) => {
        const {tag} = req.params
        let index = profileData.findIndex((element) => {
            return element.tag === parseInt(tag)
        })
        
        if(index !== -1){
            res.status(200).send(profileData[index])
        }else{
            res.status(404).send('try again bruh')
        }
    },
    addProfile:(req, res, next) => {
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
    },
    updateProfile:(req, res, next) => {
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
    
    },
    deleteProfile:(req, res, next) => {
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
    },
}