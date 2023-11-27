import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.scss"
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/LayOut/Layout";
import Works from "./pages/Works";
import HomePage from "./pages/HomePage";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";

function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<HomePage />} />
              <Route path="works" element={<Works />} />
              <Route path="contactme" element={<ContactMe />} />
              <Route path="aboutme" element={<AboutMe />} />

              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
