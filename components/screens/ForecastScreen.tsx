import {StyleSheet} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AvalancheForecast} from 'components/forecast/AvalancheForecast';
import {HomeStackParamList} from 'routes';

export const ForecastScreen = ({route}: NativeStackScreenProps<HomeStackParamList, 'forecast'>) => {
  const {center_id, forecast_zone_id, date, zoneName} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <AvalancheForecast center_id={center_id} forecast_zone_id={forecast_zone_id} date={date} zoneName={zoneName} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});
