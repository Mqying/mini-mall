import { request } from "@tarojs/taro";
import { server } from "../../config/server";

export async function getData(data) {
  try {
    let result = request({
      url: "https://api.shy-jan.com.cn/api/Daily",
      data: data,
      method: "GET",
      success: function (res) { }
    })

    return result
  } catch (err) {
    return err
  }
}