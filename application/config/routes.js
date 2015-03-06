
//define routes
exports.routes = [
    {route: '/', controller: 'index', action:'index'},

    {route: '/socket', controller: 'index', action:'socket'},


    {route: '/auth', controller: 'auth', action:'login'},
    {route: '/auth/login', controller: 'auth', action:'extLogin'},

    {route: '/callback', controller: 'auth', action:'callback'},




    {route: '/user2', controller: 'user', action:'index'},

    //api,weiboapi
    {route: '/api', controller: 'api', action:'cmd',type:'POST'},
    {route: '/weibo', controller: 'weibo', action:'cmd',type:'POST'},

   {route: '/train/analysis', controller: 'train', action:'analysis'},
    {route: '/train/baidu', controller: 'train', action:'baidu'},
    {route: '/station/address', controller: 'train', action:'stationAddress'},
    {route: '/station/addressing', controller: 'train', action:'stationAnalysisAddress'},

    //subject
    {route: '/subject/edit', controller: 'subject', action:'edit'},
    {route: '/subject/list', controller: 'subject', action:'list'},

    {route: '/editor', controller: 'editor', action:'index',type:'POST'},
    {route: '/editor', controller: 'editor', action:'index',type:'GET'}



];

//Define common function namess
exports.commonRouteFunctions = [];  // if use ['helper'],then add a 
                                    //function named helper in helpers/routes.js
                                    //with (req,res, next);
