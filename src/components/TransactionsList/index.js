import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const TransactionsList = ({ navigation, transactions }) => {

  const sortByDate = (a, b) => {
    return new Date(b.date) - new Date(a.date);
  };

  const sortedTransactions = transactions.sort(sortByDate);

  const groupByDate = () => {
    const grouped = {};

    sortedTransactions.forEach(transaction => {
      const date = transaction.date;
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(transaction);
    });

    return grouped;
  };

  const formatDate = (dateString) => {
    const date = new Date(`${dateString}T00:00:00`);
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    };
    return date.toLocaleDateString('en-CA', options);
  };

  const groupedTransactions = groupByDate();

  return (
    <View>
      {Object.keys(groupedTransactions).map(date => (
        <View key={date} >
          <Text style={styles.dateHeader}>{formatDate(date)}</Text>
          <View style={styles.container}>
            {groupedTransactions[date].map(transaction => (
              <Pressable
                key={transaction.id}
                style={styles.item}
                onPress={() => navigation.navigate('Detail', { transaction })}
              >
                <Text style={styles.label}>{transaction.name}</Text>
                <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      ))
      }
    </View>

  );
}

export default TransactionsList;
