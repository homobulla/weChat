# weChat

## 技术选取：

-   koa + socket   

## 页面部分：
* 登录
* 聊天界面

### 登录页面
ID唯一，在不加入数据库的基础上，用本地缓存来解决。进入首页直接获取所有ID数组，直接在本地判断有无重复。
### 聊天界面
聊天界面的ID加时间戳。


deadline：2018-09-30
后端热更新：nodemon
