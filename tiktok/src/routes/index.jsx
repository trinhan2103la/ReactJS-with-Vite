// Public Routes
import Home from "../pages/home/Home";
import Following from "../pages/following/Following";
import Profile from "../pages/profile/Profile";
import Upload from "../pages/upload/Upload";
import Search from "../pages/search/Search";

import { HeaderOnly } from "../components/layout";

export const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/search", component: Search, layout: null },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];

export const privateRoutes = [];
