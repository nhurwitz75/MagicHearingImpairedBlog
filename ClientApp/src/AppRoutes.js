import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Movies } from "./components/movies";
import { Home } from "./components/Home";
import { assistive } from "./components/assistive";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/movies-and-books',
        element: <Movies />
    },
    {
        path: '/assistive-hearing-devices',
        element: <assistive />
    }
];

export default AppRoutes;
