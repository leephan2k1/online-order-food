import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Dish } from '~/common/interfaces/dish.interface';
import { themeColors } from '~/common/constants';
import { Minus, Plus } from 'react-native-feather';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from '~/store/slices/cart.slice';

interface DishRowProps {
  dish: Dish;
}
export default function DishRow({ dish }: DishRowProps) {
  const totalItems = useAppSelector((state) =>
    selectCartItemsById(state, dish.id),
  );

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(dish));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(dish));
  };

  return (
    <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image
        className='rounded-3xl'
        style={{ height: 100, width: 100 }}
        source={dish.image}
      />

      <View className='flex flex-1 space-y-3 pl-3'>
        <View>
          <Text className='text-xl'>{dish.name}</Text>
          <Text className='text-gray-700'>{dish.description}</Text>
        </View>

        <View className='flex-row justify-between items-center'>
          <Text className='text-gray-700 text-lg font-bold'>${dish.price}</Text>
          <View className='flex-row items-center'>
            <TouchableOpacity
              onPress={() => handleRemoveFromCart()}
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Minus strokeWidth={2} height={20} width={20} stroke='white' />
            </TouchableOpacity>
            <Text className='px-3'>{totalItems.length}</Text>

            <TouchableOpacity
              onPress={() => handleAddToCart()}
              className='p-1 rounded-full'
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Plus strokeWidth={2} height={20} width={20} stroke='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
