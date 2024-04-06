import { Text, View, TextInput, Pressable, Keyboard, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useState } from "react";
import * as database from "../../database";
import { gray_200 } from '../../../includes/variables';

const AddTransaction = ({navigation, onAddTransaction}) => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('$0.00');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [savingData, setSavingData] = useState(false);

  const { format: formatCurrency } = Intl.NumberFormat('en-CA', {
    currency: 'CAD',
    style: 'currency',
  });

  const handleChange = (value)=> {
    const decimal = Number(value.replace(/\D/g, '')) / 100;
    setAmount(formatCurrency(decimal || 0).replace('$\xa0', ''));
  }

  const handleAddPress = async () => {
    const floatAmount = parseFloat(amount.replace(/\D/g, '')) / 100;

    const data = {
      name: description,
      amount: floatAmount,
      location
    }
    setSavingData(true);
    const transaction = await database.save(data);
    setSavingData(false);
    if (transaction) {
      onAddTransaction(transaction);
      setDescription('');
      setAmount('$0.00');
      setLocation('')
      setErrorMessage('');
      Keyboard.dismiss();
      navigation.navigate('Transactions');
    }
    else {
      setErrorMessage('The task could not be saved. Please try again in a moment.');
    }
  }
  if (savingData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color={gray_200} />
        <Text style={styles.loadingText}>Adding transaction to the list...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a transaction description"
        value={description}
        maxLength={150}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.textInput}
        placeholder="$0.000"
        value={amount}
        onChangeText={handleChange}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter the location"
        value={location}
        maxLength={150}
        onChangeText={setLocation}
      />

      <Pressable
        onPress={handleAddPress}
        style={({ pressed }) => [styles.button, pressed ? styles.button.pressed : styles.button]}>

        <Text
          style={styles.button.text}>
          Save
        </Text>
      </Pressable>
      
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorContainer.title}>Attention</Text>
          <Text style={styles.errorContainer.description}>{errorMessage}</Text>
        </View>
      )}
    </View>
  )
}

export default AddTransaction;