
'use strict';
//defining an error handler for the not found page sending 404 as a status code and page not found message
module.exports = (req,res)=>{
    res.status(404).json({
        code:404,
        message: "page not found",
        route: req.path
    })
}

