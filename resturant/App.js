import React from 'react';
import { Button ,Appbar} from 'react-native-paper';
import { View , StyleSheet , ScrollView} from 'react-native';
import AppBarHeader from './src/AppBarHeader';
import StudentData from './src/StudentData';
import BottomBar from './src/BottomBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import hacker from './images/hacker.jpg'

const App = () => {

  const newsData = [
    {
      title: 'Over 13,000 cybercrime cases registered in UP from 2022 to March 20, 2023',
      content: 'This is the content of the first breaking news article...',
      date: 'August 8, 2023',
      image : './images/hacker.jpg'
    },
    {
      title: 'Latest Update',
      content: 'Check out the latest update on...',
      date: 'August 7, 2023',
      image : './images/hacker.jpg'
    },
    // Add more news articles here
  ];
  const handleNextPress = () => {
    // Add your logic for the "Next" button press here
    console.log('Next button pressed');
  };

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <AppBarHeader title="News" />
      <ScrollView style={styles.container}>
      {newsData.map((news, index) => (
        <StudentData
          key={index}
          title={news.title}
          content={news.content}
          date={news.date}
          image = {news.image}
        />
      ))}
    </ScrollView>
      <BottomBar onNextPress={handleNextPress} />
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
