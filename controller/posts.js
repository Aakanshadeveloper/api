const Posts = require("../modules/posts");
exports.postsCreate = (req,res)=>{
    //console.log(API RUN");
    let body = req.body;
    // console.log(body)
    let dt = new Posts(body);
    dt.save().then((dt) =>{

        res.send({
            message:'successfuly created '
        })
    }).catch((err)=>{
        res.send(err);
    });
}

exports.getallposts =(req,res)=>{
    Posts.find().then(data=>
        res.json(data)).catch((err)=>{ res.json({
            message:"something went to wrong!"+err});
    res.send(err);
    
})
}   

exports.getpost=(req,res) =>{
    Posts.findById(req.params.id,(err,post)=>{
        if(err){               
            return res.status(500).json({message:err})
        }
        else if(!post){
            return res.status(404).json({message:"post not found"})
         }
         else{
             return res.status(200).json(post)
         }
    })
}

exports.updatepost= (req, res) => {
    Posts.findByIdAndUpdate(req.params.id,{userId:req.body.userId,id:req.body.id,title:req.body.title},(err,post)=>{
        if(err){
            return res.status(500).json({message:err})
        }
        else if(!post){
           return res.status(404).json({message:"post not found"})
        }
        else{
            post.save((err,savedpost)=>{
                if(err){
                    return res.status(400).json({message:err})
                }
                else{
                    return res.status(200).json({message:"post update successfully"})
                }
            })
        }

    })
  }
  exports.deletepost=(req,res)=>{
    Posts.findByIdAndDelete(req.params.id,(err,post)=>{
        if(err){
          return res.status(500).json({message:err})
        }else if(!post){
          return res.status(404).json({message:"post not available"})
        }
        else{
          return res.status(200).json({message:"post successfully deleted"})
        }
    })
}