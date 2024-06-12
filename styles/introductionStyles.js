import { StyleSheet } from "react-native";
import common from "./commonStyles";

const colors = common.colors;
const fonts = common.fonts;

const introductionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pearlBush,
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  cloudContainer: {
    position: "absolute",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 140,
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.grayGreen,
    fontSize: 20,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  caption: {
    fontFamily: fonts.semiBold,
    color: colors.grayGreen,
    fontSize: 15,
    marginTop: 10,
    alignSelf: "flex-start",
  },
});

export default introductionStyles;
