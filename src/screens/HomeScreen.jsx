import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {useUserContext} from '../Context/UserContext';
import {AddUser, UserCard, AddButton} from '../components';

const HomeScreen = () => {
  const {data, isLoading} = useUserContext();
  const [isModalVisible, setShowModal] = useState(false);
  if (data.length === 0 && isLoading)
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator />
      </View>
    );
  if (data.length === 0 && !isLoading)
    return (
      <View style={styles.errorScreen}>
        <Text style={styles.errorMessageStyles}>No Records.</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <AddButton setShowModal={setShowModal} />
      <FlatList
        data={data}
        style={styles.listStyles}
        renderItem={({item}) => <UserCard key={item.id} {...item} />}
      />
      <View>
        <AddUser isModalVisible={isModalVisible} setShowModal={setShowModal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 20,
    flex: 1,
  },
  listStyles: {
    paddingHorizontal: 10,
  },
  errorScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMessageStyles: {
    fontSize: 30,
    color: 'red',
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
