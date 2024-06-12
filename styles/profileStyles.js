import { StyleSheet } from "react-native";
import common from "./commonStyles";

const { colors } = common;
const { fonts } = common;

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.pearlBush,
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    color: colors.summerGreen,
    fontFamily: fonts.semiBold,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 8,
    color: colors.summerGreen,
    fontFamily: fonts.bold,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    color: colors.summerGreen,
    fontFamily: fonts.regular,
  },
  iconButton: {
    padding: 10,
    color: "#9AB7AA",
  },
  triggerContainer: {
    borderColor: colors.summerGreen,
    borderTopWidth: 1,
    width: 300,
    marginTop: 0,
    paddingTop: 0,
    height: 310,
  },
  triggerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  triggerItemContent: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    minWidth: 150,
    maxWidth: 190,

  },
  triggerItemText: {
    color: colors.summerGreen,
    fontFamily: fonts.semiBold,
    fontSize: 15,
  },
  triggerMessageText: {
    color: colors.gray,
    fontFamily: fonts.regular,
    fontSize: 13,
  },
  triggerTime: {
    flexDirection: "column",
    width: 100,
    alignItems: "flex-end",
  },
  triggerTimeText: {
    color: colors.gray,
    fontFamily: fonts.semiBold,
    fontSize: 10,
  },
  triggerHeadingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 0,
    paddingTop: 0,
  },
  triggerHeading: {
    fontSize: 20,
    color: colors.gray,
    fontFamily: fonts.semiBold,
    textAlign: "left",
    paddingBottom: 5,
    marginTop: 0,
    paddingTop: 0,
  },
  triggerListContainer: {
    marginLeft: 30,
    marginTop: 10,
    paddingTop: 0,
    alignItems: "flex-start",
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.red,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  pokeBoard: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  pokeTile: {
    width: "45%",
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors.summerGreen,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  pokeText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  logOutWrapper: {
    marginVertical: 25,
    height: 100,
  },
  logOutButton: {
    fontSize: 32,
    padding: 20,
  },
  error: {
    marginVertical: 25,
    height: 100,
  },
  removeWrapper: {
    fontFamily: fonts.semiBold,
    colors: colors.summerGreen,
    fontSize: 16,
    marginVertical: 14,
  },
  removeButton: {
    fontSize: 32,
    padding: 20,
    fontFamily: fonts.semiBold,
  },
});

export default profileStyles;
