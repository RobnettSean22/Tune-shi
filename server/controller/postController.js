const profileData = require('./data.json')
let tag = 3
let num = 1
module.exports={
    addPost:(req, res, next) => {
        console.log("REQ.PARAMS =", req.params)
        console.log("REQ.BODY =", req.body)
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
        
    },
    updatePost:(req, res, next) => {
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
    },
    deletePost:(req, res,  next) => {
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
    }
    
}