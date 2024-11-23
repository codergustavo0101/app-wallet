import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Screen,Navigator} = createNativeStackNavigator();

import Landing from "../pages/Landing";
import Login from "../pages/Login";


const StackRoutes = () => {
    return(
      <Navigator screenOptions={{headerShown:false}}>
        <Screen
          name="Landing"
          component={Landing}
        />
      <Screen
          name="Login"
          component={Login}
        />
      </Navigator>
    )
}

export default StackRoutes