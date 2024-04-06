import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionDetail from '../TransactionDetail';
import TransactionsList from '../TransactionsList'
import { primaryColor } from '../../../includes/variables';
import AddTransaction from '../AddTransaction';

const Stack = createNativeStackNavigator();

const Transactions = ({ transactions, showErrorMessage}) => {

  return (
    <Stack.Navigator
      initialRouteName='TransactionsList'
      screenOptions={{ 
        headerStyle: { backgroundColor: primaryColor },
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name='Transactions List'>
        {
          (props) =>
            <TransactionsList {...props} transactions={transactions} showErrorMessage={showErrorMessage}/>
        }
      </Stack.Screen>
      <Stack.Screen name="Detail" component={TransactionDetail} />
      <Stack.Screen name="Add" component={AddTransaction} />
    </Stack.Navigator>
  )
}

export default Transactions;