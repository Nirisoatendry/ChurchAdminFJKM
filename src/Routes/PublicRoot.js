import { createBrowserRouter } from "react-router-dom";
import Asa from "../Components/Asa";
import Listes from "../Components/Listes";
import Login from "../Components/Login";
import Rantsana from "../Components/Rantsana";
import Sampana from "../Components/Sampana";
import TabFull from "../Components/Tabs";
import Taranaka from "../Components/Taranaka";
import Dashboard from "../Pages/Dashboard";
const router = createBrowserRouter([
    {
        path : '/',
        element : <Login/>
    },
    {
        path:'/dashboard',
        element: <Dashboard />,
        children : [
            {
                path : 'listes',
                element : <Listes/>
            },
            {
                path :'ajout',
                element : <TabFull/>
            },
            {
                path : 'sampana',
                element :<Sampana/>
            },
            {
                path: 'rantsana',
                element : <Rantsana/>
            },
            {
                path : 'asa',
                element : <Asa/>
            },
            {
                path : 'taranaka',
                element : <Taranaka/>
            }
        ]
    }
])
export default router;
