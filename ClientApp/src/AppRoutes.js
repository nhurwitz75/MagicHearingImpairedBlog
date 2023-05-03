import { Movies } from "./components/movies";
import { Home } from "./components/Home";
import { Assistive } from "./components/assistive"; 

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/movies-and-books',
        element: <Movies />
    },
    {
        path: '/assistive-hearing-devices',
        element: <Assistive />
    }
];

export default AppRoutes;
