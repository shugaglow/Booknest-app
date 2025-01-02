import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout";
import About from "./pages/About";
import LibraryLayout from "./layout/LibraryLayout";
import WantToRead from "./pages/library pages/WantToRead";
import CurrentlyReading from "./pages/library pages/CurrentlyReading";
import FinishedReading from "./pages/library pages/FinishedReading";
import Home from "./pages/home";
// import Library from "./pages/Library";

function App() {
  // Create routes using createBrowserRouter
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="library" element={<LibraryLayout />}>
          <Route path="want-to-read" element={<WantToRead />} />
          <Route path="currently-reading" element={<CurrentlyReading />} />
          <Route path="finished-reading" element={<FinishedReading />} />
        </Route>
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
