import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PropsWithChildren } from 'react';

interface CustomSafeAreaProps extends PropsWithChildren {}
export default function CustomSafeArea({ children }: CustomSafeAreaProps) {
  const insets = useSafeAreaInsets();

  //react navigation recommend using hook instead of SafeAreView component
  //https://reactnavigation.org/docs/7.x/handling-safe-area
  return (
    <View
      style={{
        flex: 1,
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  );
}
