import { Image, Text, TouchableOpacity, View } from 'react-native';
import { featured, SCREENS, themeColors } from '~/common/constants';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Phone, X } from 'react-native-feather';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '~/common/interfaces/rootStackParamsList';

export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <View className='flex-1'>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className='flex-1'
        mapType='standard'
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View className='rounded-t-3xl -mt-12 bg-white relative'>
        <View className='flex-row justify-between px-5 pt-10'>
          <View>
            <Text className='text-lg text-gray-700 font-semibold'>
              Estimated Arrival
            </Text>
            <Text className='text-3xl font-extrabold text-gray-700'>
              20-30 Minutes
            </Text>
            <Text className='mt-2 text-gray-700 font-semibold'>
              Your Order is own its way
            </Text>
          </View>
          <Image
            className='h-24 w-24'
            source={require('../../assets/images/bikeGuy2.gif')}
          />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2'
        >
          <View
            style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
            className='p-1 rounded-full'
          >
            <Image
              style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
              className='w-16 h-16 rounded-full'
              source={require('../../assets/images/deliveryGuy.png')}
            />
          </View>

          <View className='flex-1 ml-3'>
            <Text className='text-lg font-bold text-white'>Syed Noman</Text>
            <Text className='text-white font-semibold'>Your Rider</Text>
          </View>
          <View className='flex-row items-center space-x-3 mr-3'>
            <TouchableOpacity className='bg-white p-2 rounded-full'>
              <Phone
                fill={themeColors.bgColor(1)}
                stroke={themeColors.bgColor(1)}
                strokeWidth='1'
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate(SCREENS.Home)}
              className='bg-white p-2 rounded-full'
            >
              <X stroke={'red'} strokeWidth='5' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
