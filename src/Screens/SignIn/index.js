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
      <Text style={styles.title}>SignIn</Text>
      <Button 
        title="SignIn"
        onPress={() => navigation.push('CreateAccount')}
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