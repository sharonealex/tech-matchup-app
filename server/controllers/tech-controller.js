const {Tech} = require("../models");

module.exports = {
    async getAllTech (req, res){
        const allTech = await Tech.find({});
        if(!allTech){
            return res.status(400).json({message: "no techonologies found"});
        }
        res.status(200).json(allTech);
        
    }
}