import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const BottomBar = ({ onNextPress }) => {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={onNextPress}>
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});

export default BottomBar;
