import React, { Component } from "react"
import { View } from "react-native"
import { getMetricMetaInfo } from "../utils/helpers"

const GetMetricMetaInfo = getMetricMetaInfo("bike").getIcon

export default class AddEntry extends Component {
  render() {
    return <View><GetMetricMetaInfo /></View>
  }
}
