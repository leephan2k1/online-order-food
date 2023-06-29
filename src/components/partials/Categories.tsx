import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { categories } from '~/common/constants';
import { useState } from 'react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <View className='mt-2'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((item, index) => {
          const isActive = activeCategory === item.id;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive ? 'text-gray-800' : 'text-gray-500';

          return (
            <View
              key={item.id}
              className={`flex items-center justify-center ${
                index !== categories.length - 1 && 'mr-6'
              }`}
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(item.id)}
                className={`p-2 rounded-full ${btnClass}`}
              >
                <Image source={item.image} style={{ width: 45, height: 45 }} />
              </TouchableOpacity>
              <Text className={`${textClass} text-sm`}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
