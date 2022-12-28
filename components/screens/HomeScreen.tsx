import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ForecastScreen} from './ForecastScreen';
import {MapScreen} from './MapScreen';
import {HomeStackParamList} from 'routes';

const AvalancheCenterStack = createNativeStackNavigator<HomeStackParamList>();
export const AvalancheCenterStackScreen = (center_id: string, date: string) => {
  return (
    <AvalancheCenterStack.Navigator initialRouteName="avalancheCenter">
      <AvalancheCenterStack.Screen
        name="avalancheCenter"
        component={MapScreen}
        initialParams={{center_id: center_id, date: date}}
        options={({route}) => ({title: route.params.center_id})}
      />
      <AvalancheCenterStack.Screen
        name="forecast"
        component={ForecastScreen}
        initialParams={{center_id: center_id, date: date}}
        options={({route}) => ({title: String(route.params.forecast_zone_id)})}
      />
    </AvalancheCenterStack.Navigator>
  );
};
