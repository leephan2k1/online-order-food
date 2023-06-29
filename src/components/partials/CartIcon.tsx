import { Text, TouchableOpacity, View } from 'react-native';
import { SCREENS, themeColors } from '~/common/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '~/common/interfaces/rootStackParamsList';
import { useAppSelector } from '~/store/hooks';
import { selectCartItems, selectCartTotal } from '~/store/slices/cart.slice';

export default function CartIcon() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  if (cartItems.length === 0) return null;

  return (
    <View className='absolute bottom-5 z-50 w-full'>
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.Cart)}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className='flex-row justify-between items-center rounded-full mx-4 p-4 py-3 shadow-lg'
      >
        <View
          className='p-2 px-4 rounded-full'
          style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
        >
          <Text className='text-white font-extrabold text-lg'>3</Text>
        </View>

        <Text className='text-lg font-extrabold text-white flex-1 text-center'>
          Xem giỏ hàng
        </Text>

        <Text className='text-lg text-white font-extrabold'>${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}
