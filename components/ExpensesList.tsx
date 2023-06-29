import React, { useState } from "react"
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from "react-native"
import Expense from "../models/Expense"
import ExpensesItem from "./ExpensesItem"
import CreateExpenseModal from "./CreateExpenseModal"

const ExpensesList = () => {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [createModalVisible, setCreateModalVisible] = useState(false)

  function handleDeleteExpense(expenseToDelete: Expense) {
    setExpenses(prev => prev.filter(expense => expense.name !== expenseToDelete.name))
  }

  function handleCreateExpense(expense: Expense) {
    setExpenses(prev => prev.concat(expense))
    setCreateModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <CreateExpenseModal
        createModalVisible={createModalVisible}
        setCreateModalVisible={setCreateModalVisible}
        handleCreateExpense={handleCreateExpense}
      />
      <Pressable
        style={[]}
        onPress={() => setCreateModalVisible(true)}
      >
        <View style={styles.createButton}>
          <Text style={styles.text}>CREATE EXPENSE</Text>
          <Text style={styles.text}>+</Text>
        </View>
      </Pressable>
      <FlatList
        data={expenses}
        renderItem={(expense: ListRenderItemInfo<Expense>) => (
          <ExpensesItem
            expense={expense}
            onDelete={handleDeleteExpense}
          />
        )}
      />
    </View>
  )
}

export default ExpensesList

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#333',
    height: '100%'
  },
  createButton: {
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#555',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#fff'
  },
})