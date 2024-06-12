import { StyleSheet } from "react-native";
import common from "./commonStyles";

const { colors } = common;
const { fonts } = common;

const loggingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pearlBush,
    alignItems: "flex-start",
    padding: 25,
  },
  header: {
    fontSize: 40,
    fontFamily: fonts.bold,
    color: colors.summerGreen,
    marginTop: 100,
    marginLeft: -10,
  },
  caption: {
    fontSize: 15,
    fontFamily: fonts.semiBold,
    color: colors.summerGreen,
    marginTop: 10,
  },
  dropdown: {
    margin: 12,
    marginLeft: 10,
    height: 50,
    borderColor: colors.summerGreen,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: colors.conch,
    padding: 10,
    width: 250,
  },
  dropdownPlaceholder: {
    fontFamily: fonts.semiBold,
    color: colors.summerGreen,
    fontSize: 15,
  },
  dropdownSelectedText: {
    fontSize: 15,
    fontFamily: fonts.semiBold,
    color: colors.summerGreen,
  },
  dropdownContainer: {
    width: "90%",
    marginLeft: -10,
  },
  dropdownItemContainer: {
    backgroundColor: colors.pampas,
    borderRadius: 15,
    opacity: 0.7,
  },
  dropdownItemText: {
    color: colors.grayGreen,
    fontFamily: fonts.semiBold,
    fontSize: 15,
  },
  textInput: {
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: colors.pampas,
    padding: 10,
    width: "100%",
    maxWidth: "100%",
    minHeight: 150,
    textAlignVertical: "top",
  },
  submitContainer: {
    marginTop: 20,
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dropdownTouchable: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default loggingStyles;
