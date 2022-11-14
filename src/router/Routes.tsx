import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Main } from "../pages/main/Main";
import { TeacherDetails } from "../pages/teacher-details/TeacherDetails";
// @ts-ignore
import { StudentDetails } from "../pages/student-details/StudentDetails";

export function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/student",
      element: <StudentDetails />,
    },
    {
      path: "/teacher",
      element: <TeacherDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}
