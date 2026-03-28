import { View, Text, Button } from "react-native";

export default function AdminScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Student Dashboard</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}