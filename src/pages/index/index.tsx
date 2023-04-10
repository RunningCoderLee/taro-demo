import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.css";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {
    const url = new URL("https://www.baidu.com/index?a=1");
    url.searchParams.append("b", "2");
    const newUrl = url.toString();
    // 期望 https://www.baidu.com/index?a=1&b=2
    console.log(
      "%c [ newUrl ]-64",
      "font-size:13px; background:#1dcdc6; color:#61ffff;",
      newUrl
    );
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
      </View>
    );
  }
}
