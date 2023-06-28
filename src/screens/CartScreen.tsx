import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { featured, themeColors } from '~/common/constants';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Minus } from 'react-native-feather';
import CustomSafeArea from '~/components/shared/CustomSafeArea';

export default function CartScreen() {
  //dump data:
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

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
            <Text className='text-center text-gray-500'>asdada</Text>
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
          {restaurant.dishes.map((item) => {
            return (
              <View
                key={item.id}
                className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'
              >
                <Text style={{ color: themeColors.text }} className='font-bold'>
                  2 x{' '}
                </Text>
                <Image className='h-14 w-14 rounded-full' source={item.image} />
                <Text className='flex-1 font-bold text-gray-700'>
                  {item?.name}
                </Text>
                <Text className='font-semibold text-base'>${item?.price}</Text>
                <TouchableOpacity
                  className='p-1 rounded-full'
                  style={{ backgroundColor: themeColors.bgColor(1) }}
                  // onPress={() =>
                  //   dispatch(removeFromBasket({ id: items[0]?.id }))
                  // }
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
            <Text className='text-gray-700'>12</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-700'>Delivery Fee</Text>
            <Text className='text-gray-700'>111</Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='font-extrabold'>Order Total</Text>
            <Text className='font-extrabold'>100</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{ backgroundColor: themeColors.bgColor(1) }}
              // onPress={()=> navigation.navigate('PreparingOrder')}
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
