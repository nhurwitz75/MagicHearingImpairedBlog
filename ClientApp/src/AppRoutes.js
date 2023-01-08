import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Movies } from "./components/movies";
import { Home } from "./components/Home";

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
    }
];

export default AppRoutes;
