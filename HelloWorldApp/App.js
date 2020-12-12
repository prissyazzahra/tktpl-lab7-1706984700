import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#006ac7",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#db4d7f",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 30
  }
})

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      color: "#006ac7"
    }
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress = () => {
    const { color } = this.state
    if (color === "#006ac7") {
      this.setState({color: "#edb200"})
    } else {
      this.setState({color: "#006ac7"})
    }
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <Text style={{
          fontSize: 40,
          fontWeight: "bold",
          color: this.state.color,
        }}>
          Hello World!
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.onButtonPress}>
          <Text style={{color: "white"}}>Change Color</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
