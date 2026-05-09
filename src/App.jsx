import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import InstructorListPage from "./pages/InstructorListPage";
import InstructorDetailPage from "./pages/InstructorDetailPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<MainLayout />}>

                    <Route index element={<HomePage />} />

                    <Route
                        path="instructors"
                        element={<InstructorListPage />}
                    />

                    <Route
                        path="instructors/:id"
                        element={<InstructorDetailPage />}
                    />

                    <Route
                        path="login"
                        element={<LoginPage />}
                    />

                    <Route
                        path="dashboard"
                        element={<DashboardPage />}
                    />

                    <Route
                        path="*"
                        element={<NotFoundPage />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;