import { StyleSheet } from "react-native";
import common from "./commonStyles";

const colors = common.colors;
const fonts = common.fonts;

const onboardingStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.pearlBush,
    alignItems: "flex-start",
    padding: 25,
  },
  backButton: {
    position: "absolute",
    top: 35,
    left: 20,
    padding: 10,
    zIndex: 1,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: colors.summerGreen,
    shadowOffset: { height: 1, width: 0 },
  },
  header: {
    fontSize: 30,
    color: colors.summerGreen,
    fontFamily: fonts.bold,
    marginTop: 100,
    letterSpacing: -0.3,
    lineHeight: 45,
  },
  question: {
    fontSize: 18,
    marginTop: 20,
    color: colors.summerGreen,
    fontFamily: fonts.bold,
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
  submitContainer: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default onboardingStyles;
