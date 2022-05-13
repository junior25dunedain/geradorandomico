import React, {useState} from "react";
import {Text, SafeAreaView,View, StyleSheet,TouchableOpacity} from "react-native";



const App = () => {
  
  const [numero, setNumero] = useState(0);

  function handleNumero(){
    const novo_numero = Math.floor(Math.random()*10);
    setNumero(novo_numero);
  }
  
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text style={style.textobotao}>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  botao:{
    backgroundColor: 'white',
    width: '80%',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textobotao:{
    color: 'black',
    fontSize: 20,
  }
});

export default App;