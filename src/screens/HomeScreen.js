import { View, Text, Button } from "react-native";
import { db } from "../services/firebase";

console.log("Firestore connected:", db);
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ClassPulse 🚀</Text>
    </View>
  );
}