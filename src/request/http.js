
import { Request } from "@/util/request.js"

//获取接口的公共的配置文件

//登录接口
export const login = (obj,data) => Request.getData({
    url : `/api/user/login.do?username=${obj.username}&password=${obj.password}`,
    method : "post",
    // data
})



//首页接口
export const HomeRight = Request.getData({
    url : `/api/statistic/base_count.do`,
    method : "get",
    // data
})