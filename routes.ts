import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type TabNavigatorParamList = {
  Home: {center_id: string};
  WeatherData: {center_id: string};
  Observations: {center_id: string};
  Menu: {center_id: string};
  Debug: {center_id: string};
};
export type TabNavigationProps = BottomTabNavigationProp<TabNavigatorParamList>;

export type HomeStackParamList = {
  avalancheCenterSelection: undefined;
  avalancheCenterHome: {
    center_id: string;
    date: string;
  };
  avalancheCenterStack: {
    center_id: string;
    date: string;
  };
  avalancheCenter: {
    center_id: string;
    date: string;
  };
  forecast: {
    center_id: string;
    forecast_zone_id: number;
    date: string;
  };
  avalancheCenterTelemetryStack: {
    center_id: string;
  };
  telemetryStations: {
    center_id: string;
  };
  telemetryStation: {
    center_id: string;
    source: string;
    station_id: number;
    name: string;
  };
};
export type HomeStackNavigationProps = NativeStackNavigationProp<HomeStackParamList>;