import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'

const PuzzleScreen: React.FC = ({route, navigation}: any) => {
  const selectedName = route.params?.selectedTypes
  const [puzzleWord, setPuzzleWord] = useState<string[]>([])
  const [selectedText, setSelectedText] = useState<string[]>()
  const [originalArray, setOriginalArray] = useState([])
  const [isEnable, setISEnable] = useState(false)


  useEffect(() => {
    if(selectedName && selectedName.name){
const newArray = selectedName.name.split('')
console.log(newArray,'888888888')
setOriginalArray(selectedName.name.split(''))
const shuffledArray = shuffleArray(newArray)
setPuzzleWord(shuffledArray)
setSelectedText(Array(newArray.length).fill(''))
setISEnable(false)

    }

  },[selectedName])
console.log(originalArray, '9999999999');

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleButtonPress = (element: string) => {
setSelectedText((prevState) => {
  const index = prevState?.findIndex((it)=> it === '')
  if(index !== -1){
    const update = [... prevState]
   update[index] = element
   const enable = update.every((it) => it !== '')
   if(enable){
    setISEnable(true)
   }
    return update
  }
 return prevState
})
  }

  const handleNext = () => {
    console.log(selectedText, '+++++++++++')
    console.log(originalArray, '+++++++++++')

    const isCorrect = selectedText?.every((it, index) => it === originalArray[index])
    if(isCorrect){
      navigation.navigate('Success')
    }else{
      Alert.alert('Incorrect\n Try again', )
    }
  }
  
  return (
    <View style={{flex: 1}}>
      <View style={{paddingBottom: 100,}}>
        <Text style={styles.text}>{selectedName.title}</Text>
         <View style={styles.wordContainer}>
          <>
          {selectedText?.map((it: string, index: number)=>
          (
            <>
            <View key={index} style={styles.container}>
              
                  <Text style={styles.TouchableOpacityText}>{it.toUpperCase()}</Text>
          
            
            </View>

            </>
          ))} 
          </>
         </View>
         
      </View>
      <View style={{paddingTop: 100,}}>

      <View style={styles.wordContainer}>
          <>
          {puzzleWord?.map((it: string, index: number)=>(
            
            <>
            <TouchableOpacity key={index} style={styles.container} onPress={()=>{handleButtonPress(it, index)}}>
              <Text style={styles.TouchableOpacityText}>{it.toUpperCase()}</Text>
            </TouchableOpacity>

            </>
          ))} 
          </>
         </View>
        </View>
      <View style={{justifyContent:'center', alignItems: 'center'}}>
      <TouchableOpacity style={styles.button}
          onPress={()=>{handleNext()}}
          disabled={!isEnable}>
         <Text style={styles.TouchableOpacityText}>{'NEXT'}</Text>

        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical:50,
    letterSpacing:2,
  },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  container: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 10,
   alignItems: 'center',
   justifyContent: 'center',
   marginVertical: 10,
   backgroundColor: 'transparent'
  },
  button: {
    marginTop: 50,
    height: 50,
    width: 180, 
    borderColor: '#ff6666', 
    backgroundColor: '#ffb3b3', 
    borderWidth: 1,
    alignItems: 'center',
   justifyContent: 'center',

  },
  TouchableOpacityText: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 2
  }
})

export default PuzzleScreen;