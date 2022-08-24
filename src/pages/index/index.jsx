import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import style from "./index.module.less"
import { Button } from "@taroify/core"
import { getData } from "../../service/getData"


(async () => {
  let data = await getData()
  console.log(data.data.data || undefined);
})()

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text className={style.text}>css module</Text>

        <Button color="primary">主要按钮</Button>
        <Button color="info">信息按钮</Button>
        <Button color="success">成功按钮</Button>
        <Button color="warning">警告按钮</Button>
        <Button color="danger">危险按钮</Button>
        <Button color="default">默认按钮</Button>
        <Button color="default">默认按钮</Button>
      </View>
    )
  }
}
