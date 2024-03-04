import {UserContextProvider} from './src/Context/UserContext';
import {HomeScreen} from './src/screens';

const App = () => {
  return (
    <UserContextProvider>
      <HomeScreen />
    </UserContextProvider>
  );
};

export default App;
