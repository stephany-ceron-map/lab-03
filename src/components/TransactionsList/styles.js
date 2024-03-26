import { StyleSheet } from "react-native";
import { gray_50, white, primaryColor } from "../../../includes/variables";

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
  }
})