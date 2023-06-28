import { ScrollView, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomSafeArea from '~/components/shared/CustomSafeArea';
import SearchBar from '~/components/partials/SearchBar';
import Categories from '~/components/partials/Categories';
import { featured } from '~/common/constants';
import FeaturedRow from '~/components/shared/FeaturedRow';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

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
            {[featured, featured, featured].map((e, index) => {
              return <FeaturedRow featured={e} key={index} />;
            })}
          </View>
        </ScrollView>
      </View>
    </CustomSafeArea>
  );
}
