import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';

const TransactionDetail = ({ route }) => { 

  const { transaction } = route.params;

  const formatDate = (dateString) => {
    const date = new Date(`${dateString}`);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit' 
    };
    return date.toLocaleDateString('en-CA', options);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.description}>{transaction.name}</Text>
      <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
      <Text style={styles.location }>{transaction.location}</Text>
      <Text style={styles.date}>{formatDate(transaction.date.toDate())}</Text>
    </View>
  )
 }
export default TransactionDetail;