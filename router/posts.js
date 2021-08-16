var express = require('express');
var router = express.Router();

const db =require("../controller/posts");
router.post("/createpost",db.postsCreate);
router.get("/Getacreatepostsllposts",db.getallposts);
router.get("/Getpost/:id",db.getpost);
router.put("/update/:id",db.updatepost);
router.delete("/delete/:id",db.deletepost);
 module.exports=router;