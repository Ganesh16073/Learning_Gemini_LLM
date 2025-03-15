const UserController = require('../controller/UserController');
class UserRoute
{
    enableroutes(app){
        app.post('/api/content',UserController.getContent)
    }
}
module.exports=new UserRoute();