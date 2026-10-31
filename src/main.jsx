import './index.css'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contactus/Contactus.jsx';
import User from './components/user/User.jsx';
import Github, { githubInfo } from './components/github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'home',
//         element: <Home/>
//       }, 
//       {
//         path: '/about',
//         element: <About/>
//       }, 
//       {
//         path: '/contactus',
//         element: <Contact />
//       }
//     ]
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contactus' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={githubInfo}
      path='github' 
      element={<Github/>} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
