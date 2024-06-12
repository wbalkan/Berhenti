import { StyleSheet } from "react-native";
import common from "./commonStyles";

const colors = common.colors;
const fonts = common.fonts;

const treePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#BBCED1",
  },
  titleContainer: {
    zIndex: 100,
    position: "absolute",
    top: 80,
    left: 30,
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.summerGreen,
    fontSize: 30,
  },
  subtitleContainer: {
    zIndex: 100,
    position: "absolute",
    top: 140,
    left: 30,
    right: 30,
  },
  subtitle: {
    fontFamily: fonts.semiBold,
    color: colors.summerGreen,
    fontSize: 15,
  },
  signContainer: {
    marginTop: 4,
    zIndex: 5,
    bottom: -30,
    left: -100,
  },
  streakContainer: {
    zIndex: 8,
    left: -90,
    marginLeft: -10,
    marginRight: 8,
    bottom: 60,
    fontFamily: fonts.semiBold,
    color: colors.pampas,
  },
  hillContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 215,
    zIndex: 8,
  },
  sproutContainer: {
    position: "absolute",
    right: 80,
    bottom: "20%",
    zIndex: 5,
  },
  saplingContainer: {
    position: "absolute",
    right: 30,
    bottom: "20%",
    zIndex: 6,
  },
  oakTree3Container: {
    position: "absolute",
    right: 10,
    bottom: "20%",
    zIndex: 6,
  },
  oakTree4Container: {
    position: "absolute",
    right: -70,
    bottom: "18%",
    zIndex: 6,
  },
  oakTree5Container: {
    position: "absolute",
    right: 80,
    bottom: "18%",
    zIndex: 6,
    width: "50%",
    height: "50%",
  },
  cloudsContainer: {
    marginTop: 10,
    top: -100,
    paddingTop: 5,
  },
});

export default treePageStyles;
