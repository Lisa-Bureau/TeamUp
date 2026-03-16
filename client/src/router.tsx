import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Activities from "./pages/Activities";
import ActivityDetails from "./pages/ActivityDetails";
import ActivityForm from "./pages/ActivityForm";
import MyActivities from "./pages/MyActivities.tsx";
import Profile from "./pages/Profile.tsx";
import Home from "./pages/Home.tsx";
import Messenger from "./pages/Messenger.tsx";
import GroupChat from "./components/GroupChat.tsx";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/publication",
        element: <ActivityForm />,
      },
      {
        path: "/activities/page/:page",
        element: <Activities />,
      },
      {
        path: "/activities/:id",
        element: <ActivityDetails />,
      },
      {
        path: "/my-activities",
        element: <MyActivities />,
      },
      {
        path: "/messenger",
        element: <Messenger />,
      },
      {
        path: "/chat/:activityId",
        element: <GroupChat />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
