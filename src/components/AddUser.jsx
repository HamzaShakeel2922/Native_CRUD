import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';

const AddUser = ({addUser, isModalVisible, setShowModal}) => {
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    username: '',
    company: {
      name: '',
    },
    email: '',
    phone: '',
  });

  return (
    <Modal
      isVisible={isModalVisible}
      onRequestClose={() => setShowModal(false)}
      onBackdropPress={() => setShowModal(false)}>
      <View
        style={{
          backgroundColor: '#acacac',
          padding: 30,
          justifyContent: 'center',
          borderRadius: 30,
          gap: 20,
        }}>
        <Text style={{textAlign: 'center', fontSize: 25}}>ADD USER</Text>
        <View
          style={{
            gap: 10,
          }}>
          <TextInput
            placeholder="Enter name"
            placeholderTextColor="black"
            style={styles.inputBox}
            value={userInfo.name}
            onChangeText={newValue =>
              setUserInfo({...userInfo, ['name']: newValue})
            }
          />
          <TextInput
            placeholder="Enter username"
            placeholderTextColor="black"
            style={styles.inputBox}
            value={userInfo.username}
            onChangeText={newValue =>
              setUserInfo({...userInfo, ['username']: newValue})
            }
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter company username"
            placeholderTextColor="black"
            value={userInfo.company.name}
            onChangeText={newValue =>
              setUserInfo({
                ...userInfo,
                ['company']: {
                  name: newValue,
                },
              })
            }
          />
          <TextInput
            style={styles.inputBox}
            placeholder="Enter email"
            placeholderTextColor="black"
            value={userInfo.email}
            onChangeText={newValue =>
              setUserInfo({...userInfo, ['email']: newValue})
            }
          />
          <TextInput
            inputMode="numeric"
            placeholder="Enter phone number"
            placeholderTextColor="black"
            style={styles.inputBox}
            value={userInfo.phone}
            onChangeText={newValue =>
              setUserInfo({...userInfo, ['phone']: newValue})
            }
          />
        </View>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Button
            title="Add"
            onPress={() => {
              addUser(userInfo);
              setShowModal(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e4e4e4',
    borderRadius: 10,
    color: 'black',
    paddingHorizontal: 10,
  },
});
export default AddUser;
