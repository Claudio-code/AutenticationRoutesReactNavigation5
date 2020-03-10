import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Button
} from 'react-native';
import { AuthContext } from '../../Context';

export default ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn</Text>
      <Button 
        title="Sign In"
        onPress={() => signIn()}
      />
      <Button 
        title="Create Account"
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