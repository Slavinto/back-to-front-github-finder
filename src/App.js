import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  Navlink,
} from "react-router-dom";

import Navbar from "./components/layout/navbar.component";
import About from "./components/about/about.component.jsx";
import Contacts from "./components/contacts/contacts.component.jsx";
import Footer from "./components/layout/footer/footer.component";
import NotFound from "./components/not-found/not-found.component";
import Home from "./components/home/home.component";
import { GithubProvider } from "./context/github/github.context.js";
import { AlertProvider } from "./context/alert/alert-context.js";

function App() {
  const mainComponentMarkup = (
    <div className="flex flex-col justify-between bg-gray-600 h-screen">
      <Navbar />
      <main className="container mx-auto px-3 bp-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: mainComponentMarkup,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "notfound",
          element: <NotFound />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <GithubProvider>
      <AlertProvider>
        <RouterProvider router={router} />
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
