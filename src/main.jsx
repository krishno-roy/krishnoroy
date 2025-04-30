import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Component/home/Home.jsx';
import SingleBlogPage from './Component/home/SingleBlogPage.jsx';



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<SingleBlogPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
