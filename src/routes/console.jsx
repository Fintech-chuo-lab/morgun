import ConsolePage from "views/Console/Console.jsx";
// import UserProfile from "views/UserProfile/UserProfile.jsx";
// import TableList from "views/TableList/TableList.jsx";
// import Typography from "views/Typography/Typography.jsx";
// import Icons from "views/Icons/Icons.jsx";
// import Maps from "views/Maps/Maps.jsx";
// import NotificationsPage from "views/Notifications/Notifications.jsx";
//
// import {
//   Dashboard,
//   Person,
//   ContentPaste,
//   LibraryBooks,
//   BubbleChart,
//   LocationOn,
//   Notifications
// } from "@material-ui/icons";

const routes = [
  {
    path: "/console",
    name: "Console",
    component: ConsolePage
  },
  { redirect: true, path: "/", to: "/console", navbarName: "Redirect" }
];

export default routes;
