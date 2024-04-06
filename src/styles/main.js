import { StyleSheet } from "react-native";
import { primaryColor } from "../../includes/variables";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: primaryColor
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6'
  },
  loadingText: {
    color: primaryColor,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10
  }
});
