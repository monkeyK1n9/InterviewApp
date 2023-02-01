import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../features/Home/screen/HomeScreen";
import { LoginScreen } from "../../features/Account/screens/LoginScreen";
import {SafeAreaViewSection} from '../../components/safeArea/SafeAreaViewSection'

const Stack = createStackNavigator()

export const AppNavigation = () => {
    return (
        <SafeAreaViewSection>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            </Stack.Navigator>
        </SafeAreaViewSection>
    )
}