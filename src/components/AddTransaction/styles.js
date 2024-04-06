import { StyleSheet } from "react-native";
import { blue_400, gray_200, gray_900, primaryColor, white } from "../../../includes/variables";

export default StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: white,
    padding: 12,

    borderRadius: 8
  },
  label: {
    fontSize: 18,
    marginTop: 6,
    color: gray_900,
  },
  textInput: {
    borderWidth: 1,
    borderColor: gray_200,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 4,
    marginBottom: 4,
    fontSize: 18,
    backgroundColor: white
  },
  button: {
    pressed: {
      backgroundColor: blue_400
    },
    marginVertical: 16,
    backgroundColor: primaryColor,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 50,
    text: {
      fontSize: 20,
      color: white,
      fontWeight: 'bold'
    }
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
  },
  errorContainer: {
    backgroundColor: '#FFCECE',
    borderRadius: 6,
    padding: 12,
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