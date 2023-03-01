import React, { useEffect, useState } from "react";
import {  StyleSheet,  View,} from "react-native";
import NewItemHeader from "./src/components/NewItemHeader";
import ModalCustom from "./src/components/ModalCustom";
import ListItem from "./src/components/ItemList/List";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {   
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const deleteAll = (items) => {
    setItems([]);
  }

  return (
    <View style={styles.screen}>

      <NewItemHeader
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToState={addItemToState}
        deleteAll={deleteAll}
      ></NewItemHeader>

      <ListItem 
      items={items} 
      openModal={openModal}
      ></ListItem>

      <ModalCustom 
      modalVisible={modalVisible} 
      selectedItem={selectedItem} 
      onCancelModal={onCancelModal} 
      onDeleteModal={onDeleteModal}>        
      </ModalCustom>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flex: 1,
  },
});
