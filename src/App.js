import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';

import { Home } from "./containers";
import { AppProvider } from "./context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
