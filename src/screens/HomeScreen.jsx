import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useUserContext} from '../Context/UserContext';
import {AddUser, UserCard, AddButton} from '../components';

const HomeScreen = () => {
  const {data, addUser} = useUserContext();
  const [isModalVisible, setShowModal] = useState(false);
  return (
    <View
      style={{
        paddingTop: 20,
        gap: 20,
        flex: 1,
      }}>
      <AddButton setShowModal={setShowModal} />
      <FlatList
        data={data}
        renderItem={({item}) => <UserCard key={item.id} {...item} />}
      />
      <View
        style={{
          backgroundColor: 'red',
        }}>
        <AddUser
          addUser={addUser}
          isModalVisible={isModalVisible}
          setShowModal={setShowModal}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
