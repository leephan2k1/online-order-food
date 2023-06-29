import { Text, TextInput, View } from 'react-native';
import { MapPin, Search, Sliders } from 'react-native-feather';
import { themeColors } from '~/common/constants';

export default function SearchBar() {
  return (
    <View className='flex-row items-center space-x-2 pb-2'>
      <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
        <Search height='25' width='25' stroke='gray' />
        <TextInput
          placeholder='Tìm nhà hàng...'
          className='ml-2 flex-1'
          keyboardType='default'
        />
        <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
          <MapPin height='20' width='20' stroke='gray' />
          <Text className='text-gray-600'>HCM City</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className='p-3 rounded-full'
      >
        <Sliders height={20} width={20} strokeWidth='2.5' stroke='white' />
      </View>
    </View>
  );
}
