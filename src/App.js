import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
