import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Featured } from '~/common/interfaces/featured.interface';
import { themeColors } from '~/common/constants';
import RestaurantCard from '~/components/shared/RestaurantCard';

interface FeaturedRowProps {
  featured: Featured;
}
export default function FeaturedRow({ featured }: FeaturedRowProps) {
  return (
    <View>
      <View className='flex-row items-center justify-between'>
        <View>
          <Text className='font-bold text-gray-500'>{featured.title}</Text>
          <Text className='text-sm text-gray-500'>{featured.description}</Text>
        </View>

        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className='font-bold'>
            Xem thêm
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className='overflow-visible py-4'
      >
        {featured.restaurants.map((restaurant, index) => {
          return (
            <RestaurantCard
              isLastItem={index === featured.restaurants.length - 1}
              key={restaurant.id}
              restaurant={restaurant}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
