import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../App';

const PremiumRoute = ({ children }) => {
  const { auth } = useContext(AuthContext)

  return <Route>{auth ? children : <Redirect to='/login' />}</Route>
}

export default PremiumRoute;
