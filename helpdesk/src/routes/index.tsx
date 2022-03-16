import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { Home } from "@screens/Home";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);

    React.useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(setUser);
        return unsubscribe;
    }, []);
             
    return (
        <NavigationContainer>
            {user ? <Home /> : <AuthRoutes />}
        </NavigationContainer>
    );
}
