import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const StudentData = ({ title, content, date ,image }) => {
  return (
    <Card style={styles.card}>
      <Card.Cover  source={{image}} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Card.Content>
      <Card.Actions style={styles.cardActions}>
        <Paragraph style={styles.date}>{date}</Paragraph>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  date: {
    color: 'gray',
  },
});

export default StudentData;
