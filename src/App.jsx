import { App, View, Views } from "framework7-react";
import store from "./store";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const f7params = {
  // Array with app routes
  // routes,
  // App Name
  name: "EMS",
  theme: "auto",
  // specify routes for app
  routes: [
    {
      name: "home",
      path: "/",
      component: Dashboard,
    },
    {
      name: "profile",
      path: "/profile/:id",
      component: Profile,
      options: {
        transition: "f7-cover",
      },
    },
    {
      name: "test",
      path: "/test",
      component: Profile,
    },
  ],
  store: { store },
};

const app = () => (
  <App {...f7params}>
    <Views tabs>
      <View
        main
        browserHistory
        browserHistorySeparator=""
        browserHistoryStoreHistory
        browserHistoryInitialMatch
      />
    </Views>
  </App>
);

export default app;
