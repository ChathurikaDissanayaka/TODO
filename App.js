import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet, Text, View, FlatList, Alert,
  TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Sandbox from './components/sandbox'

export default function App() {
  const [todos, setTodos] = useState([
    { todo: 'Check fb', key: '1' },
    { todo: 'Check insta', key: '2' },
    { todo: 'Check twitter', key: '3' },
    { todo: 'Check LinkedIN', key: '4' },
    { todo: 'Check Telegram', key: '5' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (todo) => {
    if (todo.length > 3) {
      setTodos((prevTodos)=> {
        return [
          {todo: todo, key:Math.random().toString()},
          ...prevTodos
        ]
      })
    }
    else {
      Alert.alert('OOPS!', 'Todods must be over 3charslong', [
        { text: 'Understood', onPress: () =>console.log('alert closed')}
      ])
    }
  }
  
  return (
    //<Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Dismissed keyboard')
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content} >
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex:1,
  },
  list: {
    marginTop: 20,
    flex:1,
  },
});
