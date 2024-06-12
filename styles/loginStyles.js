import { StyleSheet } from "react-native";
import common from "./commonStyles";

const colors = common.colors;
const fonts = common.fonts;

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pearlBush,
    alignItems: "flex-start",
    paddingLeft: 40,
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
  logoContainer: {
    marginTop: 60,
    alignItems: "center",
    marginLeft: 50,
    marginBottom: 10,
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  header: {
    color: colors.summerGreen,
    fontFamily: fonts.semiBold,
    fontSize: 35,
    marginLeft: 3,
  },
  caption: {
    color: colors.summerGreen,
    fontFamily: fonts.semiBold,
    fontSize: 15,
    marginBottom: 15,
  },
  inputStyle: {
    width: 300,
    height: 45,
    backgroundColor: colors.pearlBush,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.pampas,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    fontFamily: fonts.regular,
    fontSize: 15,
    color: "#636E69",
    paddingLeft: 20,
  },
});

export default loginStyles;
