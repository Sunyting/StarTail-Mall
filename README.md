# StarTail Mall 星轨商城

StarTail Mall 是一个基于 Vue3、uni-app、uniCloud 和 Vite 的商城项目，当前仓库包含用户端、后台管理端、用户端本地 mock 服务以及部分 uniCloud 数据库/云函数资源。

项目当前重点是二次元与兴趣周边商城体验：用户端提供首页、分类、搜索、购物车和个人中心入口；后台端提供经营概览、商品、订单、用户等管理界面的本地开发版本。

## 项目结构

```text
.
├─ package.json                 # 根目录聚合脚本
├─ 笔记.md                      # 技术记录与阶段性改造记录
├─ StarTail-Mall-User/          # 用户端 uni-app 项目
│  ├─ pages/                    # 首页、分类、搜索、购物车、我的
│  ├─ components/               # 移动导航、首页区块、商品卡片等组件
│  ├─ services/                 # uniCloud 商品与购物车服务封装
│  ├─ utils/                    # 请求封装、系统信息工具
│  ├─ static/                   # tabBar、banner、商品展示资源
│  ├─ server/                   # Express mock 服务，默认端口 3001
│  └─ uniCloud-aliyun/          # 商品、购物车集合与云函数
└─ StarTail-Mall-Admin/         # 后台管理端 Vue3 + Vite 项目
   ├─ src/                      # 当前独立后台实现
   ├─ 开发说明.md               # 后台改造说明
   ├─ uniCloud-aliyun/          # uni-admin 模板保留的云函数与数据库资源
   └─ uni_modules/              # DCloud 插件模块
```

## 技术栈

- 用户端：Vue3、uni-app、Vite、uni-ui、Sass。
- 后台端：Vue3、Vite、普通 CSS，保留 uni-admin/uniCloud 相关模板资源。
- 本地 mock：Node.js、Express。
- 云开发：uniCloud 阿里云服务空间，当前包含 `startail-product`、`startail-cart` 两个用户端业务集合设计。
- 包管理器：npm，仓库内已存在 `package-lock.json`。

## 当前功能

### 用户端

- 首页：顶部分类 Tab、轮播、推荐、热门、店铺和多分类内容区。
- 商城分类：按分类浏览商品，优先读取 `product-list` 云函数，失败时回退页面本地 mock 数据。
- 搜索：搜索入口、热门词、历史记录、搜索结果页和筛选面板。
- 购物车：商品勾选、全选、数量调整、删除、合计金额；优先读取 `cart-manage` 云函数，失败时使用本地 `startail-cart` 缓存。
- 我的：已有页面入口，个人信息、登录态和订单入口待完善。

### 后台端

- 已从原 uni-admin 模板入口改造为独立 Vue3 + Vite 后台。
- 当前模块包括经营概览、商品管理、订单管理、用户管理。
- 已实现侧边导航、指标卡片、表格筛选、加载/失败/重试状态、详情抽屉。
- 当前数据来自 `StarTail-Mall-Admin/src/data/modules.js`，通过 `src/services/adminData.js` 模拟异步服务读取。

### 云函数与数据库

用户端当前业务云函数位于 `StarTail-Mall-User/uniCloud-aliyun/cloudfunctions/`：

- `product-list`：读取 `startail-product` 中 `on-sale` 商品，支持按分类筛选。
- `cart-manage`：基于云函数上下文 `OPENID` 管理购物车，支持 `list`、`add`、`update`、`remove`。

用户端数据库设计位于 `StarTail-Mall-User/uniCloud-aliyun/database/`：

- `startail-product`：商品主数据，客户端直连读写权限关闭。
- `startail-cart`：用户购物车，客户端直连读写权限关闭，用户身份由云函数可信上下文写入。

## 环境要求

- Node.js >= 18。
- npm。
- HBuilderX 或 DCloud uni-app CLI。
- 微信开发者工具：运行或预览微信小程序时需要。
- uniCloud 服务空间：验证云函数、数据库、登录态和后续支付能力时需要。

## 安装依赖

首次运行建议分别安装根目录和子项目依赖：

```bash
npm install
npm --prefix StarTail-Mall-Admin install
npm --prefix StarTail-Mall-User install
npm --prefix StarTail-Mall-User/server install
```

## 本地运行

### 后台管理端

```bash
npm run dev
```

等价于：

```bash
npm run dev:admin
```

默认地址：

```text
http://localhost:5173
```

### 用户端 H5

用户端首页部分接口依赖本地 Express mock 服务，建议先启动服务端：

```bash
npm run dev:user-server
```

再启动用户端 H5：

```bash
npm run dev:user:h5
```

### 用户端微信小程序

```bash
npm run dev:user:mp-weixin
```

构建产物可使用微信开发者工具打开。当前 `StarTail-Mall-User/project.config.json` 中配置了微信小程序 AppID；正式发布前请再次确认 `manifest.json`、微信合法域名、隐私协议和云服务空间配置。

## 构建

```bash
npm run build:admin
npm run build:user:h5
npm run build:user:mp-weixin
```

微信小程序构建产物位于：

```text
StarTail-Mall-User/dist/build/mp-weixin
```

## 开发注意事项

- 面向用户的商品、购物车、订单、支付、权限校验应放在云函数或可信服务端，前端提交的用户 ID、价格、库存、角色和订单状态都不能直接信任。
- 当前后台仍是 mock 数据驱动，接真实接口时优先替换 `src/services/adminData.js`，避免在页面组件里散落请求逻辑。
- 用户端有两条数据链路：本地 Express mock 接口用于首页分类资源，uniCloud 云函数用于商品分类和购物车。后续应逐步统一到可信后端/云函数。
- 小程序端不要请求 `localhost` 作为正式资源地址。本地调试可关闭域名校验，真机和发布必须使用合法 HTTPS 域名。
- `StarTail-Mall-Admin/uniCloud-aliyun` 保留大量 uni-admin 模板云资源，迁移前需要区分“模板能力”和“星轨商城真实业务能力”。
- 更多阶段性技术记录见 `笔记.md`。

## 接下来的开发计划

### 1. 打通订单闭环

- 新增订单集合设计，明确订单状态、支付状态、履约状态、售后状态和状态流转记录。
- 新增 `order-create` 云函数，从购物车选中项生成订单，并在云端重新校验商品上下架、价格和库存。
- 购物车结算页从“待接入提示”改为确认订单页，补充收货地址、商品明细、运费、备注和提交状态。

### 2. 完善登录与用户中心

- 接入微信登录或 uni-id 体系，统一用户身份来源。
- 完善“我的”页面：用户信息、订单入口、地址管理、客服/售后入口。
- 增加登录未授权、登录过期和云函数身份缺失的前端反馈。

### 3. 后台接入真实商品管理

- 以 `startail-product` 为基础补充后台商品列表、上下架、库存、价格、排序和图片维护。
- 后台写操作必须经过云函数或受控接口，保留操作人、操作时间和变更前后数据。
- 商品分类枚举需要和用户端分类页保持一致，避免前后台展示不一致。

### 4. 商品详情与搜索真实化

- 补齐商品详情页，修复搜索结果中已存在但未注册的 `/pages/shop/commodity-details` 跳转目标。
- 搜索从页面 mock 数据迁移到统一商品查询服务，支持关键词、分类、价格区间和排序。
- 商品图片资源上线前替换为已授权素材，避免第三方商品图版权风险。

### 5. 支付、售后与消息通知

- 在订单云函数稳定后接入微信支付，支付金额只以服务端订单金额为准。
- 区分支付回调、主动查单和业务履约状态，不用前端结果直接确认付款。
- 设计退款/售后流程，并将订阅消息作为业务提交后的 best-effort 通知。

### 6. 工程质量与发布准备

- 补充最小回归测试或脚本检查：云函数入参校验、购物车数量边界、订单状态流转。
- 建立发布前检查清单：构建、微信开发者工具预览、真机登录、合法域名、隐私协议、云函数部署、数据库索引。
- 清理模板遗留文件和未使用资源时分批进行，避免影响当前可运行路径。
