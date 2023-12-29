import { StyleSheet } from "react-native";

export const WishPropertyStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    padding: 10,
    marginRight: 1,
  },
  leftButton: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  rightButton: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  activeButton: {
    backgroundColor: "#8FDF8F",
  },
  inactiveButton: {
    backgroundColor: "#D9D9D9",
  },
  SectionContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  SectionText: {
    color: "#FFFFFF",
    fontFamily: "Cairo_700Bold",
    fontWeight: "900",
    fontSize: 20,
    lineHeight: 37.48,
  },
  SectionInputContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  SectionInputBox: {
    width: 155,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  SectionInputText: {
    fontFamily: "Cairo_700Bold",
    fontWeight: "900",
    fontSize: 20,
    lineHeight: 37.48,
  },
  SectionPlaceholderText: {
    fontFamily: "Cairo_700Bold",
    fontWeight: "900",
    fontSize: 20,
    lineHeight: 37.48,
    color: "#A9A9A9",
  },
  backText: {
    fontFamily: "Cairo_700Bold",
    fontSize: 24,
    lineHeight: 48,
  },
});
