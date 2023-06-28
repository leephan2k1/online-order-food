import { Text, TouchableOpacity, View } from 'react-native';
import { themeColors } from '~/common/constants';

export default function CartIcon() {
  return (
    <View className='absolute bottom-5 z-50 w-full'>
      <TouchableOpacity
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

        <Text className='text-lg text-white font-extrabold'>$23</Text>
      </TouchableOpacity>
    </View>
  );
}
