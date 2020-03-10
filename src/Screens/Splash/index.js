import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator
} from 'react-native';

export default ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large" 
        color="#0000ff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '70%',
    marginLeft: '30%',
    marginRight: '30%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '10%'
  }
});
