
//define routes
exports.routes = [
    {route: '/', controller: 'index', action:'index'},
    {route: '/user2', controller: 'user', action:'index',fn:"preauth"}
];

//Define common function namess
exports.commonRouteFunctions = [];  // if use ['helper'],then add a 
                                    //function named helper in helpers/routes.js
                                    //with (req,res, next);
