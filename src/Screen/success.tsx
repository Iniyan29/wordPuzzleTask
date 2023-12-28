
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Success({navigation}: any): React.JSX.Element {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{'Correct!\n Congratulations\n\n You earn 10 \n points'}</Text>
        <TouchableOpacity style={styles.button}
          onPress={()=>{navigation.navigate('Home')}}>
         <Text style={styles.TouchableOpacityText}>{'NEXT'}</Text>

        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 28,
        color: 'green',
        textAlign: 'center'
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

export default Success