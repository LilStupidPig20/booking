import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BookingPage } from "./pages/BookingPage";
import { AuthPage } from "./pages/AuthPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/booking" exact>
          <BookingPage />
        </Route>
        <Redirect to="/booking" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
