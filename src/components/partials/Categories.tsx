import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { useEffect, useState } from 'react';
import { getCategories } from '~/services/category.service';
import { Category } from '~/common/interfaces/category.interface';
import { urlFor } from '../../../Sanity';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const data = await getCategories();

        setCategories(data);
      } catch (err) {
        console.log('error: ', err);
      }
    })();
  }, []);

  return (
    <View className='mt-2'>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='overflow-visible'
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {categories.map((item, index) => {
          const isActive = activeCategory === item._id;
          const btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          const textClass = isActive ? 'text-gray-800' : 'text-gray-500';

          return (
            <View
              key={item._id}
              className={`flex items-center justify-center ${
                index !== categories.length - 1 && 'mr-6'
              }`}
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(item._id)}
                className={`p-2 rounded-full ${btnClass}`}
              >
                <Image
                  className='rounded-full'
                  source={{ uri: urlFor(item.image).url() }}
                  style={{ width: 45, height: 45 }}
                />
              </TouchableOpacity>
              <Text className={`${textClass} text-sm`}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
