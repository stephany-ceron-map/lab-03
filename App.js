import { useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { gray_200, gray_50, primaryColor } from './includes/variables';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Transactions from './src/components/Transactions';
import Summary from './src/components/Summary';
import styles from './src/styles/main';
import AppLoader from './src/components/AppLoader';
import AddTransaction from './src/components/AddTransaction';

const Tab = createBottomTabNavigator();

export default function App() {

  const [transactions, setTransactions] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const handleSetLoadingData = (isLoading) => {
    setLoadingData(isLoading)
  }

  const handleShowErrorMessage = (show) => {
    setShowErrorMessage(show)
  }

  const handleLoadTransactions = (data) => {
    setTransactions(data);
  }

  const handleAddTransaction = (data) => {
    const updatedTransactions = [data, ...transactions];
    setTransactions(updatedTransactions);
  }

  return (
    <>
      <AppLoader
        handleLoadTransactions={handleLoadTransactions}
        handleShowErrorMessage={handleShowErrorMessage}
        handleSetLoadingData={handleSetLoadingData}
      />
      <View style={styles.container}>
        <StatusBar style="light" />
        <NavigationContainer >
          {loadingData
            ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color={gray_200} />
                <Text style={styles.loadingText}>Loading Transactions...</Text>
              </View>
            )
            : (
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
                        showErrorMessage={showErrorMessage}
                      />

                    )
                  }
                </Tab.Screen>

                <Tab.Screen
                  name='Add'
                  options={({ route }) => ({
                    title: 'Add Transaction',
                    tabBarIcon: ({ color, size }) => (
                      <FontAwesome6
                        name="add"
                        size={size}
                        color={color}
                      />
                    ),
                    headerShown: route.name === 'Add' ? true : false
                  })}
                >
                  {
                    (props) => (

                      <AddTransaction
                        {...props}
                        onAddTransaction={handleAddTransaction}
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
                        showErrorMessage={showErrorMessage}
                      />
                    )
                  }
                </Tab.Screen>
              </Tab.Navigator>
            )}
        </NavigationContainer>
      </View>
    </>
  );
}
