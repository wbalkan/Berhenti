import { StyleSheet } from "react-native";
import common from "./commonStyles";

const colors = common.colors;
const fonts = common.fonts;

const triggerModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.pearlBush,
    borderRadius: 20,
    padding: 35,
    alignItems: "flex-start",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    fontFamily: fonts.bold,
    fontSize: 30,
    color: colors.summerGreen,
    marginBottom: 10,
  },
  modalText: {
    fontFamily: fonts.semiBold,
    fontSize: 15,
    color: colors.grayGreen,
    marginTop: 10,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
  },
  dropdown: {
    margin: 12,
    marginLeft: 10,
    height: 40,
    borderColor: colors.summerGreen,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: colors.conch,
    padding: 10,
  },
  dropdownPlaceholder: {
    fontFamily: fonts.semiBold,
    color: colors.summerGreen,
    fontSize: 12,
  },
  dropdownSelectedText: {
    fontSize: 12,
    fontFamily: fonts.semiBold,
    color: colors.summerGreen,
  },
  dropdownContainer: {
    width: 120,
    marginLeft: -10,
  },
  bigDropdownContainer: {
    width: 300,
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
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  circle: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 17,
    borderColor: colors.summerGreen,
    borderWidth: 1,
  },
  selectedCircle: {
    backgroundColor: colors.seaBlue,
  },
});

export default triggerModalStyles;
