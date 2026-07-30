import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Balada</Text>
      <TextInput style={styles.campo}/>
      <TextInput placeholder= "Vip"
       style={styles.nego}/>
      <TouchableOpacity style={styles.botao}>
      <Text>Entrada</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao2}>
      <Text>Saida</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create ({

  titulo: {
  fontSize: 20,
  color: "#e8e1d6",
  backgroundColor: "#000000",
  textAlign: "center",
 
  

  
},


botao: {
  alignItems: "center",
  backgroundColor: "#9bb0c1",
  borderWidth: 2,
  borderColor: "#000000",
  borderRadius:5,
  justifyContent: "center",
  margin: 10,
},

botao2: { 
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#dde9f4",
  borderRadius:5,
  borderWidth: 2,
  borderColor: "#000000",
  margin: 10,
},


campo: {
  backgroundColor: "#000000",
},

nego: {
  borderRadius:5,
  borderWidth: 2,
  borderColor: "#000000",
  padding: 3,
  margin: 10,
},

})
