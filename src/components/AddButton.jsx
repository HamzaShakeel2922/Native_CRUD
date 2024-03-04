import {Text, TouchableOpacity} from 'react-native';

const AddButton = ({setShowModal}) => {
  return (
    <TouchableOpacity
      onPress={() => setShowModal(true)}
      style={{
        padding: 20,
        backgroundColor: 'grey',
        alignSelf: 'center',
        borderRadius: 15,
      }}>
      <Text
        style={{
          fontSize: 25,
        }}>
        ADD USER
      </Text>
    </TouchableOpacity>
  );
};

export default AddButton;
