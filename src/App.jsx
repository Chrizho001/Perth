import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Rootlayout />}>
                <Route index element={<Home />} />
                <Route path="blog/:slug" element={<BlogDetail />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
