import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Header() {
    return (
            <View style={styles.container}>
              <View style={styles.header}>
                <View style={styles.texto}>
                  <Text style={{color: 'white', fontSize: 32, position: 'absolute', left: 25}}>AquaNível</Text>
                  <TouchableOpacity style={{position: "absolute", top: 10, right: 37}}><Image source={require('../assets/images/sino.png')}/></TouchableOpacity>
                </View>
              </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
  
    },
  
    header: {
      backgroundColor: '#0057AA',
      height: 149,
    },
    
    texto: {
      flexDirection: 'row',
      marginTop: 86,
    }
  })