import { StyleSheet } from "react-native";
import common from "./commonStyles";

const colors = common.colors;
const fonts = common.fonts;

const friendViewStyles = StyleSheet.create({
  friendItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.summerGreen,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.summerGreen,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 25,
    marginLeft: 15,
  },
  avatarText: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 10,
  },
  friendItemContent: {
    flex: 1,
  },
  friendItemText: {
    color: colors.summerGreen,
    fontFamily: fonts.semiBold,
    fontSize: 18,
  },
  container: {
    backgroundColor: colors.pearlBush,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: colors.summerGreen,
    fontFamily: fonts.bold,
    fontSize: 30,
    paddingLeft: 10,
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: colors.summerGreen,
    borderRadius: 10,
    overflow: 'hidden',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    width: 150,
    marginLeft: 10,
  },
  button: {
    color: "white",
  },
  noFriendsText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  errorText: {
    marginTop: 20,
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    opacity: 0.3,
  },
});

export default friendViewStyles;
