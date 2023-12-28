
import React, { useEffect, useState } from 'react';
import {
    GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


type Props = {
  onPress?: (event: GestureResponderEvent) => void
  title: string;

}


function HomeScreen({navigation}: any): React.JSX.Element {
  const [selectedTypes, setSelectedTypes] = useState<any>()
 const category =[
  {
    id: 1,
    title: 'Animals',
    name: ['Lion', 'Tiger']
  },
  {
    id: 2,
    title: 'Countries',
    name: ['India', 'Singapore']

  },
  {
    id: 3,
    title: 'Fruits',
    name: ['Apple', 'Mango']
  }
 ]
 useEffect(()=>{
  console.log('jjjjj')
  setSelectedTypes('')
 },[])
 function handleButtonPress(item: any){

const copyData = [... category]

const selectedCategory = copyData.filter(element => element.title === item.title)
const [{id,name,title}] = selectedCategory
    const randomIndex = Math.floor(Math.random() * name.length);
    const nameList = name
    console.log(nameList[randomIndex], 'iiiiijjjjjgggg')
    setSelectedTypes({name: nameList[randomIndex],title: title})
 }



  return (
   <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center', paddingVertical: 50
  }}>
     
        
       
        <View style={styles.title}>
          <Text style={styles.text}>{'Words puzzle'}</Text>
        </View>
       <View style={{paddingTop: 50}}>
        <>
       { category.map((it)=> (
        
        <>
        <TouchableOpacity style={styles.button} onPress={()=>{handleButtonPress(it)}}>
        <Text style={styles.text}>{it.title}</Text>
        </TouchableOpacity>
        </>
        ))}
        </>
        
        
        </View>
        <TouchableOpacity style={{marginTop: 50,
    height: 50,
    width: 180, borderColor: '#ff6666', backgroundColor: '#ffb3b3', borderWidth: 1,
   alignItems: 'center'}}
   onPress={()=>{
    if(selectedTypes){
    navigation.navigate('Puzzle', {selectedTypes})
   }}}>
        <Text style={styles.text}>{'START'}</Text>

        </TouchableOpacity>
      <View style={{marginVertical: 50}}>
        <Text style={styles.text}>{'Leaders Board'}</Text>
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    height: 60,
    width: 250, borderColor: '#7ba7d1', backgroundColor: '#d9e6f2', borderWidth: 1,
   justifyContent: 'center',
   alignItems: 'center'
  },
  text: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: '700',
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 30,
   alignItems: 'center'
  }
});

export default HomeScreen;