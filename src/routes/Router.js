import React from "react";
import { Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import Nav from "../components/Nav";
import Reviews from "../components/AddReview";
import Admin from "../components/Admin";
import Login from "../components/Login";
import NotFound from "../components/NotFound";
import PublicRoutes from "./PublicRoutes";
import PremiumRoute from "./PremiumRoute";
import AdminRoute from "./AdminRoute";
import AllReviews from "../components/AllReviews";
import Movies from "../components/Movies";
import Landingpage from "../components/Landingpage";

const Div = styled.div`
  margin: 0;
  padding: 0;
`;

const Page = styled(animated.div)`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

function Router() {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(50%,0,0)" }
  });

  return (
    <Div>
      <Nav />

      {transitions.map(({ item, props, key }) => (
        <Page key={key} style={props}>
          <Switch location={item}>
            <PublicRoutes exact path="/">
              <Landingpage />
            </PublicRoutes>
            <PublicRoutes path="/movies">
              <Movies />
            </PublicRoutes>

            <PremiumRoute path="/Reviews">
              <Reviews />
            </PremiumRoute>

            <AdminRoute path="/admin">
              <Admin />
            </AdminRoute>

            <AdminRoute path="/all">
              <AllReviews />
            </AdminRoute>

            <PublicRoutes path="/login">
              <Login />
            </PublicRoutes>

            <PublicRoutes>
              <NotFound />
            </PublicRoutes>
          </Switch>
        </Page>
      ))}
    </Div>
  );
}

export default Router;
