window.KS_I18N = {
  en: {
    all:'ALL ITEMS', category:'CATEGORY', collections:'COLLECTIONS', about:'ABOUT US', policies:'STORE POLICIES',
    shop:'SHOP NOW', viewAll:'VIEW ALL', shopSweater:'SHOP SWEATER', shipping:'Shipping & Delivery', returns:'Exchanges & Returns', orders:'My Order',
    read:'Read More', track:'View Orders', sort:'Sort', filter:'Filter All', size:'SIZE', addToCart:'ADD TO CART', productDetails:'PRODUCT DETAILS',
    shippingShort:'SHIPPING', detailText:'Soft textures, relaxed fit and everyday comfort.', shippingText:'Shipping calculated at checkout.',
    aboutLead:'In a world full of noise,', aboutTitle:'KEEP:SILENT', aboutText:"Your loudest self doesn't have to speak.",
    aboutFlash:'They come alive under the flash.', aboutFlashSub:'Reflective. Reactive. Remarkable.',
    policyShipping:'Check delivery fees, processing time and pre-order information.', policyReturns:'Read our exchange, return and order policies.',
    policyAbout:'Learn more about the brand and the ideas behind each collection.', policyOrders:'Track and manage your purchases in one place.',
    campaignLabel:'PERMANENT DREAM', collectionHeading:'COLLECTIONS'
  },
  th: {
    all:'สินค้าทั้งหมด', category:'หมวดหมู่', collections:'คอลเลกชัน', about:'เกี่ยวกับเรา', policies:'นโยบายร้านค้า',
    shop:'เลือกซื้อสินค้า', viewAll:'ดูทั้งหมด', shopSweater:'เลือกซื้อสเวตเตอร์', shipping:'การจัดส่งและการส่งมอบ', returns:'การเปลี่ยนและคืนสินค้า', orders:'คำสั่งซื้อของฉัน',
    read:'อ่านเพิ่มเติม', track:'ดูคำสั่งซื้อ', sort:'เรียงลำดับ', filter:'ตัวกรองทั้งหมด', size:'ขนาด', addToCart:'เพิ่มลงตะกร้า', productDetails:'รายละเอียดสินค้า',
    shippingShort:'การจัดส่ง', detailText:'เนื้อผ้านุ่ม ทรงสบาย เหมาะสำหรับการสวมใส่ในทุกวัน', shippingText:'ค่าจัดส่งจะคำนวณในขั้นตอนชำระเงิน',
    aboutLead:'ในโลกที่เต็มไปด้วยเสียงรบกวน', aboutTitle:'KEEP:SILENT', aboutText:'ตัวตนที่ดังที่สุดของคุณไม่จำเป็นต้องพูด',
    aboutFlash:'ทุกชิ้นมีชีวิตขึ้นมาเมื่อเจอแสงแฟลช', aboutFlashSub:'สะท้อนแสง ตอบสนอง และโดดเด่น',
    policyShipping:'ตรวจสอบค่าจัดส่ง ระยะเวลาดำเนินการ และข้อมูลพรีออเดอร์', policyReturns:'อ่านเงื่อนไขการเปลี่ยน คืนสินค้า และคำสั่งซื้อ',
    policyAbout:'ทำความรู้จักแบรนด์และแนวคิดเบื้องหลังแต่ละคอลเลกชัน', policyOrders:'ติดตามและจัดการคำสั่งซื้อของคุณได้ในที่เดียว',
    campaignLabel:'PERMANENT DREAM', collectionHeading:'คอลเลกชัน'
  },
  zh: {
    all:'全部商品', category:'分类', collections:'系列', about:'关于我们', policies:'商店政策',
    shop:'立即购买', viewAll:'查看全部', shopSweater:'购买毛衣', shipping:'配送与运输', returns:'换货与退货', orders:'我的订单',
    read:'了解更多', track:'查看订单', sort:'排序', filter:'全部筛选', size:'尺码', addToCart:'加入购物车', productDetails:'产品详情',
    shippingShort:'配送', detailText:'柔软质感、宽松版型，适合日常穿着。', shippingText:'运费将在结账时计算。',
    aboutLead:'在充满噪音的世界里，', aboutTitle:'KEEP:SILENT', aboutText:'最响亮的自我，不一定需要发声。',
    aboutFlash:'在闪光灯下，它们才真正醒来。', aboutFlashSub:'反光、回应、令人难忘。',
    policyShipping:'查看配送费用、处理时间和预售信息。', policyReturns:'查看换货、退货及订单相关政策。',
    policyAbout:'了解品牌，以及每个系列背后的想法。', policyOrders:'在一个页面中追踪并管理你的订单。',
    campaignLabel:'永久梦境', collectionHeading:'系列'
  },
  zht: {
    all:'全部商品', category:'分類', collections:'系列', about:'關於我們', policies:'商店政策',
    shop:'立即購買', viewAll:'查看全部', shopSweater:'購買毛衣', shipping:'配送與運輸', returns:'換貨與退貨', orders:'我的訂單',
    read:'了解更多', track:'查看訂單', sort:'排序', filter:'全部篩選', size:'尺碼', addToCart:'加入購物車', productDetails:'產品詳情',
    shippingShort:'配送', detailText:'柔軟質感、寬鬆版型，適合日常穿著。', shippingText:'運費將於結帳時計算。',
    aboutLead:'在充滿噪音的世界裡，', aboutTitle:'KEEP:SILENT', aboutText:'最響亮的自我，不一定需要發聲。',
    aboutFlash:'在閃光燈下，它們才真正醒來。', aboutFlashSub:'反光、回應、令人難忘。',
    policyShipping:'查看配送費用、處理時間和預售信息。', policyReturns:'查看換貨、退貨及訂單相關政策。',
    policyAbout:'了解品牌，以及每個系列背後的想法。', policyOrders:'在一個頁面中追蹤並管理你的訂單。',
    campaignLabel:'永久夢境', collectionHeading:'系列'
  }
};
window.ksLang = () => localStorage.getItem('ks_lang') || 'zh';
window.ksT = (k) => (KS_I18N[ksLang()] && KS_I18N[ksLang()][k]) || KS_I18N.en[k] || k;
window.ksLocal = (obj) => {
  if (!obj || typeof obj !== 'object') return obj || '';
  return obj[ksLang()] || obj.en || obj.zh || Object.values(obj)[0] || '';
};

Object.assign(window.KS_I18N.en,{aboutProduct:'ABOUT PRODUCT',paymentMethods:'PAYMENT METHODS',colorStyling:'COLOR & STYLING',tapToOpen:'Tap to view',productInfo:'PRODUCT INFORMATION',care:'CARE & MAINTENANCE',fit:'FIT & CONSTRUCTION',fabric:'FABRIC & TEXTURE',colorNote:'COLOR NOTE',styling:'STYLING NOTES',close:'Close',stock:'In stock',leadTime:'Preparation time',weight:'Weight',productStatus:'Product status',card:'Credit / Debit Card',qr:'QR Payment',banking:'Online Banking',installment:'Installments',wallet:'Online Wallet',transfer:'Bank Transfer'});
Object.assign(window.KS_I18N.zh,{aboutProduct:'关于产品',paymentMethods:'支付方式',colorStyling:'配色与搭配',tapToOpen:'点击展开查看',productInfo:'产品信息',care:'保养与维护',fit:'尺码与版型',fabric:'材质与织法',colorNote:'配色说明',styling:'搭配建议',close:'关闭',stock:'现货供应',leadTime:'产品准备时间',weight:'重量',productStatus:'产品状态',card:'信用卡 / 借记卡',qr:'扫描二维码',banking:'网上银行',installment:'分期付款',wallet:'在线账户',transfer:'转账到银行账户'});
Object.assign(window.KS_I18N.zht,{aboutProduct:'關於產品',paymentMethods:'支付方式',colorStyling:'配色與搭配',tapToOpen:'點擊展開查看',productInfo:'產品資訊',care:'保養與維護',fit:'尺碼與版型',fabric:'材質與織法',colorNote:'配色說明',styling:'搭配建議',close:'關閉',stock:'現貨供應',leadTime:'產品準備時間',weight:'重量',productStatus:'產品狀態',card:'信用卡 / 借記卡',qr:'掃描二維碼',banking:'網上銀行',installment:'分期付款',wallet:'在線帳戶',transfer:'轉帳到銀行帳戶'});
Object.assign(window.KS_I18N.th,{aboutProduct:'เกี่ยวกับสินค้า',paymentMethods:'วิธีการชำระเงิน',colorStyling:'สีและการแต่งตัว',tapToOpen:'แตะเพื่อดูรายละเอียด',productInfo:'ข้อมูลสินค้า',care:'การดูแลรักษา',fit:'ขนาดและทรง',fabric:'วัสดุและพื้นผิว',colorNote:'ข้อมูลสี',styling:'คำแนะนำการแต่งตัว',close:'ปิด',stock:'พร้อมจัดส่ง',leadTime:'ระยะเวลาเตรียมสินค้า',weight:'น้ำหนัก',productStatus:'สถานะสินค้า',card:'บัตรเครดิต / เดบิต',qr:'ชำระผ่าน QR',banking:'ธนาคารออนไลน์',installment:'ผ่อนชำระ',wallet:'กระเป๋าเงินออนไลน์',transfer:'โอนเงินเข้าบัญชีธนาคาร'});
