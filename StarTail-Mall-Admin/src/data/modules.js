export const modules = [
  {
    key: 'overview',
    label: '经营概览',
    icon: '◎',
    action: '刷新数据',
    tableTitle: '运营待办',
    tableDesc: '聚合商品、订单和用户侧的关键动作。',
    searchPlaceholder: '搜索事项或负责人',
    primaryField: 'name',
    searchFields: ['name', 'owner'],
    statusOptions: [
      { value: 'urgent', label: '高优先级' },
      { value: 'normal', label: '普通' },
      { value: 'done', label: '已处理' }
    ],
    metrics: [
      { label: '今日订单', value: '128', tip: '较昨日 +12%' },
      { label: '待发货', value: '24', tip: '需要尽快处理' },
      { label: '商品总数', value: '386', tip: '在售 342' },
      { label: '新增用户', value: '57', tip: '近 24 小时' }
    ],
    columns: [
      { key: 'name', label: '事项' },
      { key: 'count', label: '数量' },
      { key: 'status', label: '状态' },
      { key: 'owner', label: '负责人' }
    ],
    detailFields: [
      { key: 'name', label: '事项' },
      { key: 'count', label: '数量' },
      { key: 'status', label: '状态' },
      { key: 'owner', label: '负责人' },
      { key: 'remark', label: '备注' }
    ],
    rows: [
      { id: 'todo-1', name: '待确认订单', count: '18', status: 'urgent', owner: '运营', remark: '包含 6 个超过 2 小时未确认的订单。' },
      { id: 'todo-2', name: '库存预警商品', count: '9', status: 'normal', owner: '商品', remark: '库存低于 20 件，需要补货或下架。' },
      { id: 'todo-3', name: '售后申请', count: '4', status: 'urgent', owner: '客服', remark: '退款申请需要在 24 小时内处理。' },
      { id: 'todo-4', name: '活动素材复核', count: '3', status: 'done', owner: '设计', remark: '首页 banner 已完成复核。' }
    ]
  },
  {
    key: 'products',
    label: '商品管理',
    icon: '□',
    action: '新增商品',
    tableTitle: '商品列表',
    tableDesc: '后续可接入商品分类、SKU、库存和上下架接口。',
    searchPlaceholder: '搜索商品或类目',
    primaryField: 'name',
    searchFields: ['name', 'category'],
    statusOptions: [
      { value: 'on-sale', label: '在售' },
      { value: 'low-stock', label: '低库存' },
      { value: 'off-sale', label: '已下架' }
    ],
    metrics: [
      { label: '在售商品', value: '342', tip: '覆盖 8 个类目' },
      { label: '低库存', value: '9', tip: '小于 20 件' },
      { label: '今日上新', value: '12', tip: '已同步前台' },
      { label: '下架商品', value: '44', tip: '待复核' }
    ],
    columns: [
      { key: 'name', label: '商品' },
      { key: 'category', label: '类目' },
      { key: 'stock', label: '库存' },
      { key: 'price', label: '售价' },
      { key: 'status', label: '状态' }
    ],
    detailFields: [
      { key: 'name', label: '商品' },
      { key: 'category', label: '类目' },
      { key: 'stock', label: '库存' },
      { key: 'price', label: '售价' },
      { key: 'status', label: '状态' },
      { key: 'remark', label: '备注' }
    ],
    rows: [
      { id: 'prd-1', name: '拂晓长誓系列戒指', category: '首饰珠宝', stock: '86', price: '¥169', status: 'on-sale', remark: '主推款，首页推荐位展示。' },
      { id: 'prd-2', name: '鸣潮薪火系列守岸人手办', category: '游戏周边', stock: '12', price: '¥349', status: 'low-stock', remark: '库存不足，建议补货。' },
      { id: 'prd-3', name: '白川柏川限定画集', category: '艺术收藏', stock: '45', price: '¥158', status: 'on-sale', remark: '限量款，适合专题活动。' },
      { id: 'prd-4', name: '周可可联名抱枕', category: '生活调剂', stock: '0', price: '¥79', status: 'off-sale', remark: '等待供应商确认新批次。' }
    ]
  },
  {
    key: 'orders',
    label: '订单管理',
    icon: '◇',
    action: '导出订单',
    tableTitle: '最近订单',
    tableDesc: '后续可接入支付状态、履约状态和售后流程。',
    searchPlaceholder: '搜索订单号或用户',
    primaryField: 'orderNo',
    searchFields: ['orderNo', 'buyer'],
    statusOptions: [
      { value: 'pending-pay', label: '待付款' },
      { value: 'pending-ship', label: '待发货' },
      { value: 'done', label: '已完成' },
      { value: 'refund', label: '退款中' }
    ],
    metrics: [
      { label: '待付款', value: '31', tip: '15 分钟内新增 6' },
      { label: '待发货', value: '24', tip: '优先处理' },
      { label: '退款中', value: '5', tip: '客服跟进' },
      { label: '今日成交额', value: '¥18,920', tip: '较昨日 +8%' }
    ],
    columns: [
      { key: 'orderNo', label: '订单号' },
      { key: 'buyer', label: '用户' },
      { key: 'amount', label: '金额' },
      { key: 'status', label: '状态' }
    ],
    detailFields: [
      { key: 'orderNo', label: '订单号' },
      { key: 'buyer', label: '用户' },
      { key: 'amount', label: '金额' },
      { key: 'status', label: '状态' },
      { key: 'remark', label: '备注' }
    ],
    rows: [
      { id: 'ord-1', orderNo: 'ST20260820001', buyer: 'Iris', amount: '¥349', status: 'pending-ship', remark: '含手办类商品，需防压包装。' },
      { id: 'ord-2', orderNo: 'ST20260820002', buyer: 'Mia', amount: '¥89', status: 'pending-pay', remark: '等待支付，15 分钟后可自动关闭。' },
      { id: 'ord-3', orderNo: 'ST20260820003', buyer: 'Noah', amount: '¥1,580', status: 'done', remark: '已完成评价。' },
      { id: 'ord-4', orderNo: 'ST20260820004', buyer: 'Luna', amount: '¥258', status: 'refund', remark: '用户申请仅退款，客服处理中。' }
    ]
  },
  {
    key: 'users',
    label: '用户管理',
    icon: '○',
    action: '查看画像',
    tableTitle: '活跃用户',
    tableDesc: '后续可接入用户标签、地址、订单历史和权限数据。',
    searchPlaceholder: '搜索用户或等级',
    primaryField: 'name',
    searchFields: ['name', 'level'],
    statusOptions: [
      { value: 'member', label: '会员' },
      { value: 'regular', label: '普通' },
      { value: 'silent', label: '沉默' }
    ],
    metrics: [
      { label: '用户总数', value: '9,842', tip: '近 7 日 +426' },
      { label: '会员用户', value: '1,236', tip: '占比 12.5%' },
      { label: '复购用户', value: '728', tip: '近 30 日' },
      { label: '沉默用户', value: '318', tip: '待召回' }
    ],
    columns: [
      { key: 'name', label: '用户' },
      { key: 'level', label: '等级' },
      { key: 'orders', label: '订单数' },
      { key: 'lastVisit', label: '最近访问' },
      { key: 'status', label: '状态' }
    ],
    detailFields: [
      { key: 'name', label: '用户' },
      { key: 'level', label: '等级' },
      { key: 'orders', label: '订单数' },
      { key: 'lastVisit', label: '最近访问' },
      { key: 'status', label: '状态' },
      { key: 'remark', label: '备注' }
    ],
    rows: [
      { id: 'usr-1', name: 'Iris', level: '会员', orders: '12', lastVisit: '今天', status: 'member', remark: '偏好游戏周边和艺术收藏。' },
      { id: 'usr-2', name: 'Mia', level: '普通', orders: '3', lastVisit: '昨天', status: 'regular', remark: '最近浏览首饰珠宝类目。' },
      { id: 'usr-3', name: 'Noah', level: '会员', orders: '8', lastVisit: '3 天前', status: 'member', remark: '复购率高，可进入会员活动名单。' },
      { id: 'usr-4', name: 'Luna', level: '普通', orders: '1', lastVisit: '45 天前', status: 'silent', remark: '可进入召回优惠券分组。' }
    ]
  }
]
