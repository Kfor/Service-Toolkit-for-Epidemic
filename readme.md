## 后端接口

- 挂载在了<http://119.3.185.241:8080/>



### 疫情地图

#### 获取地图上各个地区数据

- method: GET
- format: http://localhost:8080/getMapData
- parameter: 
  - area: global和inland二选一
    - global: 
      - 全球数据
      
      - 例子：http://localhost:8080/getMapData?area=global
      
      - response: 全球各个国家疫情数据，含义看英文
      
        ```json
        {
            "code": 200,
            "msg": "success",
            "newslist": [
                {
                    "modifyTime": 1588157796000,
                    "continents": "北美洲",
                    "provinceName": "美国",
                    "currentConfirmedCount": 838292,
                    "confirmedCount": 1012583,
                    "confirmedCountRank": 1,
                    "curedCount": 115936,
                    "deadCount": 58355,
                    "deadCountRank": 1,
                    "deadRate": "5.76",
                    "deadRateRank": 30,
                    "locationId": 971002,
                    "countryShortCode": "USA"
                }
            ]
        }
        ```
      
      - 
    - inland:
      - 国内数据
    
      - 例子：http://localhost:8080/getMapData?area=inland
    
      - response国内各个省份及城市疫情数据，含义看英文
    
        ```json
        {
            "code": 200,
            "msg": "success",
            "newslist": [
                {
                    "provinceName": "黑龙江省",
                    "provinceShortName": "黑龙江",
                    "currentConfirmedCount": 339,
                    "confirmedCount": 939,
                    "suspectedCount": 384,
                    "curedCount": 587,
                    "deadCount": 13,
                    "comment": "",
                    "locationId": 230000,
                    "cities": [
                        {
                            "cityName": "境外输入",
                            "currentConfirmedCount": 270,
                            "confirmedCount": 386,
                            "suspectedCount": 34,
                            "curedCount": 116,
                            "deadCount": 0,
                            "locationId": 0
                        }
                    ]
                }
            ]
        }
        ```

#### 获取概览数据

- method: GET

- format: http://localhost:8080/getOutlineData

- parameter:

  - area: global和inland二选一

    - global:

      - 全球数据

      - 例子：http://localhost:8080/getOutlineData?area=global

      - response返回全球各个数字，含义同inland见下方（5.2注！原始API中，所有带Incr字样的都失效了！）

        ```json
        {
            "currentConfirmedCount": 1947236,
            "confirmedCount": 3070127,
            "curedCount": 905341,
            "deadCount": 217550,
            "currentConfirmedIncr": 2576,
            "confirmedIncr": 18709,
            "curedIncr": 15835,
            "deadIncr": 298
        }
        ```

    - inland

      - 国内数据

      - 例子：http://localhost:8080/getOutlineData?area=inland

      - response返回国内各个数字，含义见下方（5.2注！原始API中，所有带Incr字样的都失效了！）

        ```json
        {
            "currentConfirmedCount": "984",
            "confirmedCount": "84369",
            "curedCount": "78742",
            "seriousCount": "993",
            "currentConfirmedIncr": "-56",
            "suspectedIncr": "21",
            "seriousIncr": "-4",
            "confirmedIncr": "22",
            "curedIncr": "78",
            "deadCount": "4643",
            "deadIncr": "0",
            "suspectedCount": "1660"
        }
        ```

      - response含义

      

      - | currentConfirmedCount | int  | 55881 | 现存确诊人数         |
        | --------------------- | ---- | ----- | -------------------- |
        | confirmedCount        | int  | 74679 | 累计确诊人数         |
        | suspectedCount        | int  | 4922  | 现存疑似人数         |
        | curedCount            | int  | 16676 | 累计治愈人数         |
        | deadCount             | int  | 2122  | 累计死亡人数         |
        | seriousCount          | int  | 11864 | 现存重症人数         |
        | suspectedIncr         | int  | 1277  | 新增疑似人数         |
        | currentConfirmedIncr  | int  | -2002 | 相比昨天现存确诊人数 |
        | confirmedIncr         | int  | 403   | 相比昨天累计确诊人数 |
        | curedIncr             | int  | 2289  | 相比昨天新增治愈人数 |
        | deadIncr              | int  | 116   | 相比昨天新增死亡人数 |
        | seriousIncr           | int  | -113  | 相比昨天现存重症人数 |

#### 获取周边数据

- method: GET

- format: http://localhost:8080/getCommunityData

- parameter: 

  - province, city, district: 均为字符串，可以中文

  - 例子：http://localhost:8080/getCommunityData?province=山西省&city=太原市&district=小店区

  - response返回周围患病的位置，lng和lat为经纬度

    ```json
    {
        "code": 200,
        "msg": "success",
        "newslist": [
            {
                "locale": "华泰御景湾",
                "address": "山西省太原市小店区华泰御景湾",
                "lng": "112.544342",
                "lat": "37.798328",
                "source": "热爱太原"
            },
            {
                "locale": "汇泰丽城",
                "address": "山西省太原市小店区正阳街汇泰丽城",
                "lng": "112.577393",
                "lat": "37.723492",
                "source": "热爱太原"
            }
        ]
    }
    ```





### 国际舆情

- 未确定DB形式，只使用了bing新闻搜索的API

#### 主页面的数据刷新

- GET 方法，将请求映射到 `getNews`
  - URL示例：`http://localhost:8080/getNews`
  - 返回 json 格式数据，其中 `"value":[]` 包含了新闻条目
  - 默认是以`COVID19` 为关键字的 50 条新闻
  - 新闻条目内部有具体新闻的URL，该URL可用于点击查看详细页面
  - 新闻条目有图片链接

#### 关键字检索的数据请求

- POST 方法，将请求仍然映射到 `getNews`
  - 提供四个参数设定，均为字符串
    - `query` : 查询关键字，必须设置，若有多个关键字，请组合为 `key1+key2+key3` 的形式，即以 `+` 连接
    - `mkt` ：新闻来源的地区，其参数举例：`en-us`, `zh-CN`等
      - 部分地区的参数可能没有返回值，建议以中国作为尝试
    - `count`：返回的新闻数上限，最大为`100`
    - `offset`：跳跃`offset`条到下一条新闻，没啥用，不用设置
  - 参数需要内嵌到 POST 的 body 中
    - 格式为 raw 形式下的 json 数据，举例如下
```json
{
	"query":"gates",
	"mkt":"zh-CN",
	"count":"10"
}
```