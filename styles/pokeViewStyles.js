import { StyleSheet } from "react-native";
import common from "./commonStyles";

const colors = common.colors;
const fonts = common.fonts;

const pokeViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.pearlBush,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 5,
    borderRadius: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  content: {
    fontSize: 14,
    color: "#555",
  },
  dateTime: {
    fontSize: 12,
    color: "#888",
  },
  title: {
    color: colors.summerGreen,
    fontFamily: fonts.bold,
    fontSize: 30,
    paddingLeft: 30,
    marginTop: 30,
  },
  noPokesText: {
    marginTop: 30,
    paddingLeft: 30,
    fontSize: 16,
    color: colors.grayGreen,
    textAlign: "flex-start",
  },
});

export default pokeViewStyles;
