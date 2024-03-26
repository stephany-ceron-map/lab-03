import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { gray_200, gray_50, primaryColor } from './includes/variables';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Transactions from './src/components/Transactions';
import Summary from './src/components/Summary';
import styles from './src/styles/main';
import transactionsData from './src/data/transactions.json';

const Tab = createBottomTabNavigator();

export default function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer >
        <Tab.Navigator screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: primaryColor },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: gray_200,
          tabBarStyle: {
            backgroundColor: gray_50
          }
        }}>
          <Tab.Screen
            name="Transactions"
            options={{
              title: 'Transactions',
              tabBarIcon: ({ color, size }) => {
                return (
                  <FontAwesome6
                    name="arrow-right-arrow-left"
                    size={size}
                    color={color}
                  />
                )
              }
            }}
          >
            {
              (props) => (

                <Transactions
                  {...props}
                  transactions={transactions}
                />

              )
            }
          </Tab.Screen>

          <Tab.Screen
            name='Summary'
            options={({ route }) => ({
              title: 'Summary',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5
                  name="file-invoice-dollar"
                  size={size}
                  color={color}
                />
              ),
              headerShown: route.name === 'Summary' ? true : false
            })}
          >
            {
              (props) => (

                <Summary
                  {...props}
                  transactions={transactions}
                />
              )
            }
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
