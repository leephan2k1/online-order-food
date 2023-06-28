import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Restaurant } from '~/common/interfaces/restaurant.interface';
import { themeColors } from '~/common/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '~/common/interfaces/rootStackParamsList';

interface RestaurantCardProps {
  restaurant: Restaurant;
  isLastItem: boolean;
}
export default function RestaurantCard({
  restaurant,
  isLastItem,
}: RestaurantCardProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('Restaurant', { restaurant });
      }}
    >
      <View
        style={{
          shadowColor: themeColors.bgColor(0.8),
          shadowOffset: {
            width: 1,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 8,
          marginRight: isLastItem ? 0 : 24,
        }}
        className='bg-white rounded-3xl mb-2'
      >
        <Image source={restaurant.image} className='h-36 w-64 rounded-t-3xl' />
        <View className='px-3 pb-4 space-y-2'>
          <Text className='text-lg font-bold pt-2'>{restaurant.name}</Text>
          <View className='flex-row items-center space-x-1'>
            <Image
              source={require('../../../assets/images/fullStar.png')}
              className='h-4 w-4'
            />
            <Text className='text-xs'>
              <Text className='text-green-700'>{restaurant.stars}</Text>
              <Text className='text-gray-700'>
                ({restaurant.reviews} review)
              </Text>
              ·
              <Text className='font-semibold text-gray-700'>
                {restaurant.category}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
