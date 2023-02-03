import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import FullCourses from "../Pages/Courses/FullCourses/FullCourses";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/courses',
                element: <FullCourses></FullCourses>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learn-confidently-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
        ]
    }
])