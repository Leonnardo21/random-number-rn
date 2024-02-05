import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

export default () => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [result, setResult] = useState(null);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Número Aleatório</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Min"
          keyboardType="numeric"
          value={min.toString()}
          onChangeText={text => setMin(parseInt(text))}
        />
        <TextInput
          style={styles.input}
          placeholder="Max"
          keyboardType="numeric"
          value={max.toString()}
          onChangeText={text => setMax(parseInt(text))}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => setResult(randomNumber(min, max))}>
        <Text style={styles.textButton}>Gerar número</Text>
      </Pressable>
      <Text style={styles.result}>
        {result !== null ? `Resultado: ${result}` : ''}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 20,
    width: '30%',
    textAlign: 'center',
  },
  button: {
    width: 200,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#48BB78',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
  },
  result: {
    marginTop: 30,
    fontWeight: 'bold',
  },
});
