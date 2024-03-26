import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TransactionDetail from '../TransactionDetail';
import TransactionsList from '../TransactionsList'
import { primaryColor } from '../../../includes/variables';

const Stack = createNativeStackNavigator();

const Transactions = ({transactions}) => {
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
            <TransactionsList {...props} transactions={transactions}/>
        }
      </Stack.Screen>
      <Stack.Screen name="Detail" component={TransactionDetail} />
    </Stack.Navigator>
  )
}

export default Transactions;