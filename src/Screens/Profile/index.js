import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default ({ navigation }) => {
  const [isLoading] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button
        title="Show Drawer"
        onPress={() => navigation.toggleDrawer()}
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
