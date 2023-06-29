import Navigation from '~/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '~/store';

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </StoreProvider>
  );
}
