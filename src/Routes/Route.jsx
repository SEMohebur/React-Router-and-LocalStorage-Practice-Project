import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import BookDetails from "../Pages/BookDetails";
import ReadList from "../Pages/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        // ei data fetch er data golo ami home component er modhe useLoader bebohar kore get korbo
        loader: () => fetch("bookData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("bookData.json"),
        Component: BookDetails,
      },
      {
        path: "/readList",
        loader: () => fetch("bookData.json"),
        Component: ReadList,
      },
    ],
  },
]);
