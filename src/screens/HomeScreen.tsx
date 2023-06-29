import { ScrollView, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import SearchBar from '~/components/partials/SearchBar';
import Categories from '~/components/partials/Categories';
import FeaturedRow from '~/components/shared/FeaturedRow';
import { useEffect, useState } from 'react';
import { getFeaturedRestaurants } from '~/services/featuredRestaurants.service';
import { Featured } from '~/models/featured.model';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [featuredRestaurants, setFeaturedRestaurants] = useState<Featured[]>(
    [],
  );

  useEffect(() => {
    (async function () {
      try {
        const data = await getFeaturedRestaurants();

        if (data) {
          setFeaturedRestaurants(data);
        }
      } catch (e) {
        console.log('error: ', e);
      }
    })();
  }, []);

  return (
    <CustomSafeArea>
      <StatusBar />
      <View className='bg-white w-full h-full pt-2 px-2'>
        <SearchBar />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
        >
          <Categories />

          <View className='mt-4'>
            {featuredRestaurants.map((e, index) => {
              return <FeaturedRow featured={e} key={index} />;
            })}
          </View>
        </ScrollView>
      </View>
    </CustomSafeArea>
  );
}
