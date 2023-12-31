import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SCREENS, themeColors } from '~/common/constants';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Minus } from 'react-native-feather';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '~/common/interfaces/rootStackParamsList';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from '~/store/slices/cart.slice';
import { useEffect, useState } from 'react';
import { Dish } from '~/models/dish.model';
import { selectRestaurant } from '~/store/slices/restaurant.slice';
import { urlFor } from '../../Sanity';

export default function CartScreen() {
  const restaurant = useAppSelector(selectRestaurant);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  const cartItems = useAppSelector(selectCartItems);
  const [groupedItems, setGroupedItems] = useState<{ [key: string]: Dish[] }>(
    {},
  );
  const totalCost = useAppSelector(selectCartTotal);

  useEffect(() => {
    if (cartItems && cartItems.length === 0) return;

    //@ts-ignore
    const items = cartItems.reduce((gr, item) => {
      if (gr[item._id]) {
        gr[item._id].push(item);
      } else {
        gr[item._id] = [item];
      }

      return gr;
    }, {} as { [key: string]: Dish[] });

    //@ts-ignore
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <CustomSafeArea>
      <View className='bg-white flex-1'>
        {/* top button */}
        <View className='relative py-4 shadow-sm'>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            onPress={navigation.goBack}
            className='absolute z-10 rounded-full p-1 shadow top-5 left-2'
          >
            <ArrowLeft strokeWidth={3} stroke='white' />
          </TouchableOpacity>
          <View>
            <Text className='text-center font-bold text-xl'>Giỏ hàng</Text>
            <Text className='text-center text-gray-500'>
              {restaurant?.name}
            </Text>
          </View>
        </View>

        {/* delivery time */}
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className='flex-row px-4 items-center'
        >
          <Image
            source={require('../../assets/images/bikeGuy.png')}
            className='w-20 h-20 rounded-full'
          />
          <Text className='flex-1 pl-4'>Deliver in 20-30 minutes</Text>
          <TouchableOpacity>
            <Text style={{ color: themeColors.text }} className='font-bold'>
              Change
            </Text>
          </TouchableOpacity>
        </View>

        {/* dishes */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          className='bg-white pt-5'
          contentContainerStyle={{
            paddingBottom: 50,
          }}
        >
          {Object.entries(groupedItems).map(([key, items]) => {
            const item = items[0];

            return (
              <View
                key={key}
                className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'
              >
                <Text style={{ color: themeColors.text }} className='font-bold'>
                  {items.length} x{' '}
                </Text>
                <Image
                  className='h-14 w-14 rounded-full'
                  source={{ uri: urlFor(item.image).url() }}
                />
                <Text className='flex-1 font-bold text-gray-700'>
                  {item.name}
                </Text>
                <Text className='font-semibold text-base'>${item?.price}</Text>
                <TouchableOpacity
                  className='p-1 rounded-full'
                  style={{ backgroundColor: themeColors.bgColor(1) }}
                  onPress={() => dispatch(removeFromCart(item))}
                >
                  <Minus
                    strokeWidth={2}
                    height={20}
                    width={20}
                    stroke='white'
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        {/* totals */}
        <View
          style={{ backgroundColor: themeColors.bgColor(0.2) }}
          className=' p-6 px-8 rounded-t-3xl space-y-4'
        >
          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Subtotal</Text>
            <Text className='text-gray-700'>{totalCost}</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Delivery Fee</Text>
            <Text className='text-gray-700'>2</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='font-extrabold'>Order Total</Text>
            <Text className='font-extrabold'>{totalCost + 2}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgColor(1) }}
              onPress={() => navigation.navigate(SCREENS.PreparingOrder)}
              className='p-3 rounded-full'
            >
              <Text className='text-white text-center font-bold text-lg'>
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </CustomSafeArea>
  );
}
