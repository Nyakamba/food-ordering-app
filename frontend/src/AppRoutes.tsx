import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <span>Home page</span>
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>Usre profile Page</span>} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;
