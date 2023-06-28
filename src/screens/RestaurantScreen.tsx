import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Restaurant } from '~/common/interfaces/restaurant.interface';
import { ArrowLeft, MapPin } from 'react-native-feather';
import { themeColors } from '~/common/constants';
import DishRow from '~/components/shared/DishRow';
import CartIcon from '~/components/partials/CartIcon';
import { StatusBar } from 'expo-status-bar';

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const { params } =
    useRoute<RouteProp<{ prop: { restaurant: Restaurant } }, 'prop'>>();
  const { restaurant } = params;

  return (
    <View>
      <StatusBar style='light' />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='relative'>
          <Image source={restaurant.image} className='w-full h-72' />

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='p-2 absolute top-8 left-4 bg-white rounded-full shadows'
          >
            <ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className='bg-white -mt-12 pt-6'
        >
          <View className='px-4'>
            <Text className='text-2xl font-bold'>{restaurant.name}</Text>

            <View className='flex-row space-x-4 my-1'>
              <View className='flex-row items-center space-x-1'>
                <Image
                  source={require('../../assets/images/fullStar.png')}
                  className='h-4 w-4'
                />
                <Text className='text-xs'>
                  <Text className='text-green-700'>{restaurant.stars}</Text>
                  <Text className='text-gray-700'>
                    ({restaurant.reviews} review)
                  </Text>{' '}
                  ·{' '}
                  <Text className='font-semibold text-gray-700'>
                    {restaurant.category}
                  </Text>
                </Text>
              </View>

              <View className='flex-row items-center space-x-1'>
                <MapPin color='gray' width={15} height={15} />
                <Text className='text-gray-800 text-xs'>HCM City</Text>
              </View>
            </View>

            <Text className='text-gray-500 mt-2'>{restaurant.description}</Text>
          </View>
        </View>

        <View className='bg-white pb-36'>
          <Text className='text-2xl font-bold px-4 py-2'>Menu</Text>

          {restaurant.dishes &&
            restaurant.dishes.length > 0 &&
            restaurant.dishes.map((dish) => {
              return <DishRow key={dish.id} dish={dish} />;
            })}
        </View>
      </ScrollView>

      <CartIcon />
    </View>
  );
}
