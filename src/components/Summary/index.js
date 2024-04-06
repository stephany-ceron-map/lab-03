import { Text, View } from 'react-native';
import styles from './styles';

const Summary = ({ transactions, showErrorMessage }) => {
  
  const totalAmount = transactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0);

  const highTransaction = transactions.reduce((prev, current) => {
    return (prev.amount > current.amount) ? prev : current;
  }, 0);

  const lowTransaction = transactions.reduce((prev, current) => {
    return (prev.amount < current.amount) ? prev : current;
  }, 0);
  

  return (
    <>
      {showErrorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorContainer.title}>Attention</Text>
          <Text style={styles.errorContainer.description}>There was an error loading the data</Text>
        </View>
      )}
      {transactions && transactions.length > 0 &&  (
        <View>
          <View style={styles.container}>
            <View style={styles.item}>
              <Text style={styles.description}>Transactions</Text>
              <Text style={styles.amount}>{transactions.length}</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.item}>
              <Text style={styles.description}>Balance</Text>
              <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subtitle}>High Spending</Text>
            <View style={styles.item}>
              <Text style={styles.description}>{highTransaction.name}</Text>
              <Text style={styles.amount}>${highTransaction.amount.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.subtitle}>Low Spending</Text>
            <View style={styles.item}>
              <Text style={styles.description}>{lowTransaction.name}</Text>
              <Text style={styles.amount}>${lowTransaction.amount.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      )}
    </>
  )
}

export default Summary;