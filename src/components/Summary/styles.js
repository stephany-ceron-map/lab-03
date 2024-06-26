import { StyleSheet } from "react-native";
import { blue_400, gray_50, primaryColor, white , gray_900} from "../../../includes/variables";

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    margin: 12,
    marginBottom: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: gray_50,
    padding:10,
  }, 
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
    color: primaryColor,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: blue_400,
    marginBottom: 4
  },
  errorContainer: {
    backgroundColor: '#FFCECE',
    borderRadius: 6,
    padding: 12,
    margin: 12,
    title: {
      color: gray_900,
      fontWeight: 'bold',
      fontSize: 18
    },
    description: {
      color: gray_900,
      fontSize: 16
    }
  }
})