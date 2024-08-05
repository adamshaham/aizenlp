import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import V from "./pages/V";
import V1 from "./pages/V1";
import V2 from "./pages/V2";


import V3 from "./pages/V3";


import V4 from "./pages/V4";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/v4":
        title = "";
        metaDescription = "";
        break;
      case "/v2":
        title = "";
        metaDescription = "";
        break;
      case "/v6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<V />} />
      <Route path="/v1" element={<V1 />} />
      <Route path="/v2" element={<V2 />} />
      <Route path="/v3" element={<V3 />} />
      <Route path="/v6" element={<V4 />} />
    </Routes>
  );
}
export default App;
