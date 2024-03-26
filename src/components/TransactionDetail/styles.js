import { StyleSheet } from "react-native";
import { blue_400, blue_50 } from "../../../includes/variables";

export default StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: blue_400,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center'
  },
  description: {
    fontSize: 16,
    color: blue_50,
    fontWeight: '700',
    marginBottom: 4
  },
  amount: {
    fontSize: 40,
    color: blue_50,
    fontWeight: '700',
    marginBottom: 4
  },
  date: {
    fontSize: 16,
    color: blue_50,
    marginBottom: 4
  },
  location: {
    fontSize: 16,
    color: blue_50,
    marginBottom: 4
  }
})