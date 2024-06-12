import { StyleSheet } from "react-native";
import common from "./commonStyles";

const { colors } = common;
const { fonts } = common;

const feedStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pearlBush,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  subHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: colors.summerGreen,
    fontFamily: fonts.bold,
    fontSize: 40,
  },
  sectionHeader: {
    marginTop: 0,
    color: colors.gray,
    fontFamily: fonts.semiBold,
    fontSize: 24,
  },
  scrollContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 0,
  },
  avatarContainer: {
    borderColor: colors.summerGreen,
    borderWidth: 1,
    borderRadius: 50,
  },
  avatarText: {
    color: colors.summerGreen,
    fontFamily: fonts.regular,
    fontSize: 20,
  },
  feedItemContainer: {
    /* flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.pampas, */
  },
  feedItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: colors.summerGreen,
    borderTopWidth: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: colors.summerGreen,
    borderWidth: 1,
  },
  feedItemContent: {
    marginLeft: 30,
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  feedItemText: {
    color: colors.summerGreen,
    fontFamily: fonts.semiBold,
    fontSize: 20,
    lineHeight: 20,
    paddingTop: 10,
  },
  feedPokeText: {
    color: colors.summerGreen,
    fontFamily: fonts.semiBold,
    fontSize: 15,
  },
  feedTime: {
    flexDirection: "column",
    width: 30,
    alignItems: "flex-end",
  },
  feedTimeText: {
    color: colors.gray,
    fontFamily: fonts.semiBold,
    fontSize: 10,
  },
  noItemContainer: {
    flexDirection: "column",
    marginTop: 30,
    marginLeft: 25,
    width: "80%",
    borderBottomWidth: 1,
    borderColor: colors.summerGreen,
  },
  noItemText: {
    color: colors.grayGreen,
    fontFamily: fonts.semiBold,
    fontSize: 15,
  },
});

export default feedStyles;
