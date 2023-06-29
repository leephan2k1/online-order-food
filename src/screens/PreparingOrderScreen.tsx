import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '~/common/interfaces/rootStackParamsList';
import { useEffect } from 'react';
import { SCREENS } from '~/common/constants';

export default function PreparingOrderScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.Delivery);
    }, 3000);
  }, []);

  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Image
        source={require('../../assets/images/delivery.gif')}
        className='h-80 w-80'
      />
    </View>
  );
}
