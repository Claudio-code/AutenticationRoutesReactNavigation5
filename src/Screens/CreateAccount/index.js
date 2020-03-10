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
      <Text style={styles.title}>CreateAccount</Text>
      <Button 
        title="CreateAccount"
        onPress={() => navigation.navigate('SignIn')}
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