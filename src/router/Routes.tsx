import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import { Main } from "../pages/main/Main";
import { TeacherDetails } from "../pages/teacher-details/TeacherDetails";
import { StudentDetails } from "../pages/student-details/StudentDetails";
import { ErrorPage } from "../pages/error-page/ErrorPage";

export function Routes(){
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
        {
          path: "*",
          element: <ErrorPage />,
          
      },
      ]);


      return(
        <RouterProvider router={router}/>
      )
    
} 