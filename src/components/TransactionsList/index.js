import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import styles from './styles';

const TransactionsList = ({ navigation, transactions, showErrorMessage }) => {
  
  const groupByDate = () => {
    const grouped = {};
    transactions.forEach(transaction => {
      let date = transaction.date.toDate();

      const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      };

      date = date.toLocaleDateString('en-CA', options);

      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(transaction);
    });

    return grouped;
  };

  const groupedTransactions = groupByDate();

  return (
    <>
      {showErrorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorContainer.title}>Attention</Text>
          <Text style={styles.errorContainer.description}>There was an error loading the data</Text>
        </View>
      )}
      {transactions && (
        <ScrollView>
          {Object.keys(groupedTransactions).map(date => (
            <View key={date} >
              <Text style={styles.dateHeader}>{date}</Text>
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
        </ScrollView>
      )}
    </>
  );
}

export default TransactionsList;
