import React from "react" 
import {useState} from 'react'
import { Text, View, Button, StyleSheet, TouchableOpacity, } from 'react-native';

export default function App() {

function handleInput(buttonPressed){
  console.log(buttonPressed)
  if(buttonPressed === '+' | buttonPressed === '-' | buttonPressed === '*' | buttonPressed === '/' | buttonPressed === '%')
  {
    setCurrentNumber(currentNumber + " " + buttonPressed + " ")
    return
  }
  switch(buttonPressed){
    case 'DEL':
    setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
      return

    case 'AC':
      setLastNumber("")
      setCurrentNumber("")
      return
    
    case '=':
      setLastNumber(currentNumber + " = ")
      calculator()
      return
    
    case '+/-':
    return
  }

  setCurrentNumber(currentNumber + buttonPressed)
}

function calculator(){
  const splitNumbers = currentNumber.split(' ')
  const firstNumber = parseFloat(splitNumbers[0])
  const lastNumber = parseFloat(splitNumbers[2])
  const operator = splitNumbers[1]

  switch(operator){
    case '+':
      setCurrentNumber((firstNumber + lastNumber).toString())
      return

    case '-':
      setCurrentNumber((firstNumber - lastNumber).toString())
      return
    
    case '*':
    setCurrentNumber((firstNumber * lastNumber).toString())
      return

    case '/':
    setCurrentNumber((firstNumber / lastNumber).toString())
    return

    case '%':
    setCurrentNumber((firstNumber / 100).toString())
    return
  }
}
  const buttons = ['AC','DEL','%','/','7','8','9','*','4','5','6','-','1','2','3','+','.','0','+/-','=']

const [currentNumber, setCurrentNumber] = useState("")

const [lastNumber, setLastNumber] = useState("")
  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
    </View>
    <View style={styles.buttons}>
      {buttons.map((button) => 
      <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button,{backgroundColor: '#3B4343'}]}>
      <Text style={[styles.textButton, {color: "#08ABAC", fontSize: 30}]}>{button}</Text>
      </TouchableOpacity>
      )}
    </View>
   </View> 
   
  );
}

const styles = StyleSheet.create({
  result: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#383B3B'
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    flex: "25%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    minHeight: 80,
    minWidth: 80
  },
  textButton: {
    color: "#08ABAC",
    fontSize: 25,
  },
  resultText: {
    color: "#08ABAC",
    margin: 10,
    fontSize: 40
  },

  historyText:{
    color: "#08ABAC",
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
});