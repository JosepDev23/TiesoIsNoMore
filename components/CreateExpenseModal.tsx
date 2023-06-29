import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Expense from '../models/Expense'


interface CreateExpenseModalProps {
  createModalVisible: boolean
  setCreateModalVisible: Dispatch<SetStateAction<boolean>>
  handleCreateExpense: (expense: Expense) => void
}

const CreateExpenseModal: React.FC<CreateExpenseModalProps> = (props) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('');

  useEffect(() => {
    setName('')
    setAmount('')
  }, [props.createModalVisible])

  return (
    <Modal
      visible={props.createModalVisible}
      onRequestClose={() => props.setCreateModalVisible(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            placeholder='NAME'
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <TextInput
            placeholder='AMOUNT'
            keyboardType='numeric'
            value={amount}
            onChangeText={setAmount}
            style={styles.input}
          />
          <Pressable
            disabled={name === '' || amount === ''}
            onPress={() => props.handleCreateExpense({ name, amount: parseInt(amount) })}
            style={[]}
          >
            <View style={styles.createButton}>
              <Text style={styles.text}>CREATE EXPENSE</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default CreateExpenseModal

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: '70%',
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  createButton: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#555',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 0,
    marginBottom: 10,
    color: '#fff',
    width: '69%'
  }
})