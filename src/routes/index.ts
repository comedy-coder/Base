import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import Following from "~/pages/Following";

const publicRoutes : any =[
    {
        path : '/', component : Home ,
    },
    {
        path : '/following', component : Following ,
    },
    {
        path : '/profile', component : Profile ,
    }
]
const privateRoutes : any=[];
export {publicRoutes,privateRoutes};