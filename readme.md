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
  
- response格式：

  ```json
  {
    "_type": "News",
    "readLink": "https://api.cognitive.microsoft.com/api/v7/news/search?q=COVID19",
    "queryContext": {
      "originalQuery": "COVID19",
      "adultIntent": false
    },
    "totalEstimatedMatches": 71100,
    "sort": [
      {
        "name": "最佳匹配",
        "id": "relevance",
        "isSelected": true,
        "url": "https://api.cognitive.microsoft.com/api/v7/news/search?q=COVID19"
      },
      {
        "name": "最新发布",
        "id": "date",
        "isSelected": false,
        "url": "https://api.cognitive.microsoft.com/api/v7/news/search?q=COVID19&sortby=date"
      }
    ],
    "value": [
      {
        "name": "COVID-19 sigue siendo emergencia de salud pública de importancia internacional",
        "url": "http://spanish.china.org.cn/txt/2020-05/03/content_76003460.htm",
        "image": {
          "thumbnail": {
            "contentUrl": "https://www.bing.com/th?id=ON.2EE49CDD1C30976F5087789B8ABA0E83&pid=News",
            "width": 320,
            "height": 192
          }
        },
        "description": "El director general de la Organización Mundial de la Salud (OMS), Tedros Adhanom Ghebreyesus, dijo hoy que el brote de la COVID-19 sigue constituyendo una emergencia de salud pública de importancia in",
        "provider": [
          {
            "_type": "Organization",
            "name": "China Internet Information Center"
          }
        ],
        "datePublished": "2020-05-03T04:29:00.0000000Z"
      }
    ]
  }
  ```

  

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

### 防疫查询

#### 获取附近医院位置

- GET方法：
  - URL示例：http://localhost:8080/quiryhospital?city=杭州
  - 参数：`city`为当前地理位置所在的地级市以及直辖市(例如：杭州，背景，上海等)，且在url中，参数city为中文

- 返回值

  ```json
  {
      "status":0,
      "message":"ok",
      "results":[
          {
              "name":string,
              "location":{
                  "lat":float,
                  "lng":float
              },
              "address":string,
              "province":string,
              "city":string,
              "area":string,
              "street_id":string,
              "telephone":string,
              "detail":int,
              "uid":string
          },
          ...
      ]
  }
  ```

#### 获取附近药店的位置

- GET方法：
  - URL示例：http://localhost:8080/quirymedicine?city=杭州
  - 参数：`city`为当前地理位置所在的地级市以及直辖市(例如：杭州，背景，上海等)，且在url中，参数city为中文

- 返回值

```json
  {
      "status":0,
      "message":"ok",
      "results":[
          {
              "name":string,
              "location":{
                  "lat":float,
                  "lng":float
              },
              "address":string,
              "province":string,
              "city":string,
              "area":string,
              "street_id":string,
              "telephone":string,
              "detail":int,
              "uid":string
          },
          ...
      ]
  }
```

####   查询口罩真伪

- GET方法：

  - URL示例：http://localhost:8080/quirymask?number=沪械注准20172630093
  - 参数：number为口罩的编号

- 返回值:

  ```json
  {
    "索引条件": {
      "索引字符串": "沪械注准20172630093"
    },
  "索引状态": "一切都如您的神机妙算，天下均在您的掌握之中",
    "索引总数量": "1",
    "索引总页数": "0",
    "索引页容量": "10",
    "索引页序号": "1",
    "索引实体信息": [
      {
        "国产医疗器械产品批准文号": "沪械注准20172630093",
        "国产医疗器械产品注册人名称": "上海天垠贸易发展有限公司",
        "国产医疗器械产品注册人名称_精简": "上海天垠贸易发展有限公司",
        "国产医疗器械产品注册人住所地址": "上海市浦东新区历城路70号甲室",
        "国产医疗器械产品注册人住所地址_格式标准化": "上海市浦东新区历城路|70|甲",
        "国产医疗器械产品注册人住所地址_国家": "中国",
        "国产医疗器械产品注册人住所地址_省份": "上海市",
        "国产医疗器械产品注册人住所地址_城市": "上海市",
        "国产医疗器械产品注册人住所地址_区域": "浦东新区",
        "国产医疗器械产品注册人住所地址_GPS": "121.492369,31.176144",
        "国产医疗器械产品注册人住所地址_国家行政编码": "310115",
        "国产医疗器械产品注册人生产地址": "上海市浦东新区历城路70号甲室",
        "国产医疗器械产品注册人生产地址_格式标准化": "上海市浦东新区历城路|70|甲",
        "国产医疗器械产品注册人生产地址_国家": "中国",
        "国产医疗器械产品注册人生产地址_省份": "上海市",
        "国产医疗器械产品注册人生产地址_城市": "上海市",
        "国产医疗器械产品注册人生产地址_区域": "浦东新区",
        "国产医疗器械产品注册人生产地址_GPS": "121.492369,31.176144",
        "国产医疗器械产品注册人生产地址_国家行政编码": "310115",
        "国产医疗器械产品代理人名称": "",
        "国产医疗器械产品代理人名称_精简": "",
        "国产医疗器械产品代理人住所地址": "",
        "国产医疗器械产品代理人住所地址_格式标准化": "",
        "国产医疗器械产品代理人住所地址_国家": "",
        "国产医疗器械产品代理人住所地址_省份": "",
        "国产医疗器械产品代理人住所地址_城市": "",
        "国产医疗器械产品代理人住所地址_区域": "",
        "国产医疗器械产品代理人住所地址_GPS": "",
        "国产医疗器械产品代理人住所地址_国家行政编码": "",
        "国产医疗器械产品名称": "定制式活动义齿",
        "国产医疗器械产品名称_精简": "定制式活动义齿",
        "国产医疗器械产品型号与规格": "见附表",
        "国产医疗器械产品机构与组成": "活动义齿由基托、人工牙、固位体和连接体组成，根据医生的设计，采用有效注册证的主体及辅助齿科材料加工而成。主要技术指标：1. 修复体中除组织面外，假牙、基托、卡环及连接体均应高度抛光，表面粗糙度RA≤0.025；2. 修复体的组织面不得存在残余石膏；3. 基托边缘应该与石膏模型相贴合，无明显晃动、翘动；4. 修复体的制作应符合口腔临床医生的设计要求；5. 产品表面污染菌应≤200CFU/G，致病菌不得检出。",
        "国产医疗器械产品适用范围": "根据医生的设计制作，用作牙体、牙列的缺失或缺损的修复。",
        "国产医疗器械产品其他内容": "",
        "国产医疗器械产品批准日期": "20170208",
        "国产医疗器械产品批准有效期至": "20220207",
        "国产医疗器械产品标准": "",
        "国产医疗器械产品变更日期": "20171204",
        "国产医疗器械产品主要组成成分（体外诊断试剂）": "活动义齿由基托、人工牙、固位体和连接体组成，根据医生的设计，采用有效注册证的主体及辅助齿科材料加工而成。主要技术指标：1. 修复体中除组织面外，假牙、基托、卡环及连接体均应高度抛光，表面粗糙度RA≤0.025；2. 修复体的组织面不得存在残余石膏；3. 基托边缘应该与石膏模型相贴合，无明显晃动、翘动；4. 修复体的制作应符合口腔临床医生的设计要求；5. 产品表面污染菌应≤200CFU/G，致病菌不得检出。",
        "国产医疗器械产品预期用途（体外诊断试剂）": "",
        "国产医疗器械产品产品储存条件及有效期（体外诊断试剂）": "/",
        "国产医疗器械产品批准机构": "上海市食品药品监督管理局",
        "数据编码": "000A24C6B3076B39E54DCB9DFD0554EC"
      }
    ]
  }
  ```
  
  