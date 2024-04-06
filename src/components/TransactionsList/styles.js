import { StyleSheet } from "react-native";
import { gray_50, white, primaryColor, gray_900 } from "../../../includes/variables";

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    marginHorizontal: 12,
    marginTop: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: gray_50
  }, 
  item: {
    flexDirection: 'row',
    padding:12,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: gray_50
  },
  label: {
    fontSize: 16,
    fontWeight: '700'
  },
  amount: {
    fontSize: 16,
    color: primaryColor
  },
  dateHeader: {
    marginLeft: 14,
    marginTop: 12,
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