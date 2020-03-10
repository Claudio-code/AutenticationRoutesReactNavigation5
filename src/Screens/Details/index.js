import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Button
} from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detais</Text>
      <Button 
        title="Go Back"
        onPress={() => navigation.goBack()}
      />

      <Button 
        title="Search"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '30%',
    marginLeft: '30%',
    marginRight: '30%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10%'
  }
});