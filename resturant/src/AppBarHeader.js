import React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBarHeader = ({ title }) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content title={title} titleStyle={styles.title} />
      <Appbar.Action icon="magnify" onPress={() => console.log('Search pressed')} />
      <Appbar.Action icon="dots-vertical" onPress={() => console.log('Menu pressed')} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00C853', // Light green color
    elevation: 4, // Adds elevation for a raised appearance
  },
  title: {
    color: '#333', // White text color
    alignSelf: 'flex-start', // Center-aligns the title
  },
});

export default AppBarHeader;

