import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddElem } from './src/AddElem';
import { ElemList } from './src/ElemList';

export default function App() {  
  const [elems, setElem] = React.useState([]); 

  const addElem = (title) => {
    setElem(prev => [...prev, {
      id: Date.now().toString(),
      title: title
    }])
  }

  return (
    <View style={styles.container}>
      <Navbar title="Навигация по приложению" />
      <View style={styles.addItemWrapper}>
        <AddElem onSubmit={addElem} />

        {/* <FlatList 
          data={elems}
          keyExtractor={item => item.id.toString()}
          renderItem = {({ elem }) => <ElemList elem={elem} />}
        /> */}

        <ScrollView>
          {
            elems.map(elem => {
              return <ElemList elem={elem} key={elem.id} />
            })
          }
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  addItemWrapper: {
    paddingHorizontal: 20,
  },
});
