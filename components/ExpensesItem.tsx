import React from "react"
import { ListRenderItemInfo, Text, View, StyleSheet, TouchableHighlight } from "react-native"
import Expense from "../models/Expense"


interface ExpensesItemProps {
  expense: ListRenderItemInfo<Expense>,
  onDelete: (expense: Expense) => void
}
const ExpensesItem: React.FC<ExpensesItemProps> = (props) => {

  return (
    <View
      key={props.expense.index}
      style={styles.container}
    >
      <Text style={styles.text}>{props.expense.item.name}</Text>
      <View style={styles.rightSide}>
        <Text style={styles.text}>{`${props.expense.item.amount}€`}</Text>
        <TouchableHighlight onPress={() => props.onDelete(props.expense.item)}>
          <Text> X </Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default ExpensesItem

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#555',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightSide: {
    flexDirection: 'row'
  },
  text: {
    color: '#fff'
  }
})