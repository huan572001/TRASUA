import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import RouteApp from "./routes/RouteApp";
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <AuthProvider>
          <RouteApp />
        </AuthProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
