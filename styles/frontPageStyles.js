import { StyleSheet } from "react-native";
import common from "./commonStyles";

const colors = common.colors;
const fonts = common.fonts;

const frontPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pearlBush,
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 160,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: colors.summerGreen,
    fontFamily: fonts.bold,
    fontSize: 50,
  },
  caption: {
    color: "#636369",
    fontFamily: fonts.semiBold,
    fontSize: 20,
    marginBottom: 50,
  },
  sproutContainer: {
    marginBottom: 30,
    paddingRight: 20,
  },
});

export default frontPageStyles;
