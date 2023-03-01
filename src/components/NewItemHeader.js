import { StyleSheet, View, TextInput, Button } from "react-native";
import React from "react";



const NewItemHeader = ({
  onChangeText,
  itemText,
  addItemToState,
  deleteAll,
}) => {
  return (
    <View style={styles.addItemInputContainer}>
      <TextInput
        placeholder="Type here to add an item"
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
      />

<View style={styles.buttonPosition}>

      <Button
        title="Add"
        color="#358823"
        disabled={!itemText}
        onPress={addItemToState}
      />

      <Button      
        title="Delete All"
        color="red"
        onPress={deleteAll}
      />

</View>

    </View>

  );
};

export default NewItemHeader

const styles = StyleSheet.create({
  addItemInputContainer: {
    marginTop: 50,
  },
  input: {
    display:"flex",
    alignSelf:"center",
    width: 235,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  buttonPosition: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonAdd: {
    backgroundColor: "33FF33",
    color: "33FF33",
  }, 
});

