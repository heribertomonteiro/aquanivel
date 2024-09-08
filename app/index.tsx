import { View } from "react-native";
import Header from "./components/header";
import Menu from "./components/menu";


export default function Index() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Menu />
    </View>
    
  )
}

