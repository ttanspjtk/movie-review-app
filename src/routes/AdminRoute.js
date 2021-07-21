import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../App';

const AdminRoute = ({ children }) => {
  const { auth } = useContext(AuthContext)

  return (
    <Route>
      {auth && auth === 'admin' ? children : <Redirect to='/login' />}
    </Route>
  )
}

export default AdminRoute;
