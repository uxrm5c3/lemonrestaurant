import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const BookingPage = React.lazy(() => import("pages/BookingPage"));
const Main = React.lazy(() => import("pages/Main"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/main" element={<Main />} />
          <Route path="/bookingpage" element={<BookingPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
