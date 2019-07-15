/*
Navicat MySQL Data Transfer

Source Server         : qq
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : h51905

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2019-07-12 20:52:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for data
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `gid` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `bigImg` varchar(255) DEFAULT NULL,
  `cur` int(255) DEFAULT NULL,
  `market_price` varchar(255) DEFAULT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `col5` varchar(255) DEFAULT NULL,
  `comment` int(255) DEFAULT NULL,
  `proPlace` varchar(255) DEFAULT NULL,
  `discountstr` varchar(255) DEFAULT NULL,
  `selfflag` varchar(255) DEFAULT NULL,
  `hot_sale` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of data
-- ----------------------------
INSERT INTO `data` VALUES ('1', 'Apple 苹果 iPhone XR (A2108) 128GB  移动联通电信4G手机 双卡双待', '1.jpeg', '5488', '6699', '自营', '特价', '921', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('10', '【赠电源+风扇+视窗套+音箱】Huawei/华为 P30大屏超感光徕卡三摄变焦双景录像980芯片智能手机p 30 p20', '10.jpeg', '3988', '4189', '赠', '白条免息', '43', '中国', '9.5折', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('11', '【赠智能套+风扇+音箱】Huawei/华为 P30 Pro大屏超感光徕卡四摄变焦双景录像980芯片智能手机P30pro', '11.jpeg', '5488', '6488', '赠', '白条免息', '36', '中国', '8.5折', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('12', 'Apple 苹果 iPhone XR (A2108) 64GB 移动联通电信4G手机 双卡双待', '12.jpeg', '4799', '6199', '自营', '限时购', '157', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('13', 'Apple 苹果 iPhone8 Plus (A1864) 64GB 移动联通电信4G手机 国内行货', '13.jpeg', '4599', '5699', '自营', '限时购', '212', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('14', 'Apple 苹果 Pencil 手写笔 MK0C2CH/A 白色', '14.jpeg', '719', '741', '自营', '限时购', '222', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('15', 'Apple 苹果 iPad Air 3代 平板电脑 10.5英寸 256G WLAN版', '15.jpeg', '4799', '5065', '自营', '限时购', '9', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('16', 'Apple 苹果 iPhone8(A1863) 64GB 移动联通电信4G手机 国内行货', '16.jpeg', '3759', '4999', '自营', '限时购', '80', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('17', 'Apple 苹果 iPad 平板电脑  9.7英寸（128G WLAN/A10/Ret', '17.jpeg', '2969', '3272', '自营', '特价', '674', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('18', 'Apple 苹果 iPhone Xs(A2100) 64G  移动联通电信4G手机 国内行货', '18.jpeg', '7188', '8199', '自营', '限时购', '62', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('19', 'Apple 苹果iPad mini4 7.9英寸(128G WLAN/A8/Retina屏/MK9P2CH)', '19.jpeg', '2599', '3259', '自营', '特价', '271', '美国', '8折', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('2', 'Apple 苹果  iPad mini 5代 平板电脑 7.9英寸 64G WLAN版', '2.jpeg', '2599', '2921', '自营', '限时购', '77', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('20', 'Apple 苹果 iPhone 6s Plus (A1699) 32G 全网通4G手机', '20.jpeg', '2699', '2999', '自营', '限时购', '57', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('21', 'Apple 苹果 Watch Series4 苹果手表智能手表 40毫米表带/GPS款', '21.jpeg', '3199', '3199', '自营', '限时优惠', '38', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('22', 'Apple 苹果 iPhone8 Plus(A1864)  256GB移动联通电信4G手机 国内行货', '22.jpeg', '6299', '7099', '自营', '限时优惠', '222', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('23', 'Apple iPad Pro 平板电脑  11英寸（256G WLAN版/A12X芯片/Face ID）', '23.jpeg', '7099', '7699', '自营', '限时购', '7', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('24', 'Apple 苹果 Watch Series4 苹果手表智能手表 44毫米表带/GPS款', '24.jpeg', '3499', '3499', '自营', '特价', '36', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('25', 'Apple 苹果 iPhone Xs (A2100) 256G 移动联通电信4G手机 国内行货', '25.jpeg', '8399', '9599', '自营', '限时购', '112', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('26', 'Apple 苹果 iPhone XR (A2108) 256GB 移动联通电信4G手机 双卡双待', '26.jpeg', '6699', '7599', '自营', '赠', '1073', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('27', '【送1W毫安移动电源】+【XE100原装耳机】vivo  iQOO 高通骁龙855，生而强悍', '27.jpeg', '2598', '3198', '特价', '限时优惠', '30', '中国', '8.1折', 'vivo手机旗舰店', '热销');
INSERT INTO `data` VALUES ('28', 'Apple 苹果 iPad 平板电脑  9.7英寸（32G WLAN/A10/Retina屏/MR7G2', '28.jpeg', '2299', '2499', '自营', '特价', '140', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('29', 'Apple 苹果 iPad Pro 平板电脑  11英寸（64G WLAN版/A12X芯片/Face', '29.jpeg', '5899', '6499', '自营', '限时购', '20', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('3', 'Apple 苹果 iPhone Xs Max (A2104) 256G 移动联通电信4G手机 双卡双待', '3.jpeg', '8759', '10499', '自营', '特价', '524', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('30', '新款Apple 苹果 AirPods H1芯片 蓝牙无线耳机 配有线充电盒', '30.jpeg', '1219', '1399', '自营', '限时购', '8924', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('31', 'Apple 苹果 iPhone8(A1863) 256GB 移动联通电信4G手机 国内行货', '31.jpeg', '5499', '6199', '自营', '限时优惠', '93', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('32', '考拉工厂店 苹果快充数据线（MFI认证）', '32.jpeg', '49', '89', '自营', '129选3件', '2211', '中国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('33', 'Apple 苹果  Magic Mouse 2 无线鼠标第二代 MLA02CH/A', '33.jpeg', '529', '588', '自营', '限时购', '478', '美国', '9折', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('34', '【苹果原装】Apple/苹果 采用Lightning接头的 EarPods 耳机/适用于iPhoneX/8 XSmax正品保障 苹果耳机', '34.jpeg', '219', '229', '优惠价', '限时优惠', '68', '美国', '9.6折', '易道时代数码专营店', '热销');
INSERT INTO `data` VALUES ('35', '领券立减200元【送蓝牙音箱+蓝牙耳机+指环扣】OPPO Reno 全新系列拍照手机 全网通移动联通电信双卡双待手机', '35.jpeg', '2799', '3199', '券满2799减200', '限时购', '10', '中国', '8.7折', 'OPPO手机旗舰店', '热销');
INSERT INTO `data` VALUES ('36', 'Apple 苹果 iPhone Xs Max (A2104) 512GB 移动联通电信4G手机 双卡双待', '36.jpeg', '10799', '12299', '自营', '限时购', '730', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('37', '新款Apple苹果  AirPods 新款H1芯片 蓝牙无线耳机 配无线充电盒', '37.jpeg', '1399', '1799', '自营', '特价', '8537', '美国', '7.8折', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('38', '网易严选 网易智造云感手机保护壳 适用iPhone', '38.jpeg', '34', '49', '自营', '特价', '16083', '中国', '7折', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('39', 'HUAWEI/华为荣耀20 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版移动联通电信4G手机', '39.jpeg', '2699', '2799', '优惠价', '限时优惠', '567', '中国', '9.6折', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('4', 'Apple 苹果iPhone Xs Max（A2104） 64G  移动联通电信4G手机 双卡双待', '4.jpeg', '7659', '9099', '自营', '特价', '189', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('40', '顺丰速发【赠精美阳伞+手持风扇】Huawei/华为 Mate 20 6GB+64GB珍珠屏三镜头智能全网通4G手机', '40.jpeg', '3199', '4000', '满2999减100', '赠', '1365', '中国', '8折', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('41', 'Apple 苹果 MacBook 12英寸笔记本电脑 玫瑰金色（Core m3 处理器/8GB内存/', '41.jpeg', '9199', '10200', '自营', '限时购', '24', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('42', 'Apple MacBook Air 13.3英寸笔记本电脑(Retina屏/第八代Core i5 /8GB内存/1', '42.jpeg', '8499', '9499', '自营', '限时购', '17', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('43', '【赠手持风扇】HUAWEI WATCH GT/运动款/时尚款/活力款/雅致款可选 华为手表  触屏手表 高清彩屏 持久续航', '43.jpeg', '1188', '1288', '赠', '白条免息', '10', '中国', '9.2折', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('44', 'APPLE 苹果 MacBook Pro 13.3英寸笔记本电脑（2017新款Core i5处理器/8GB内', '44.jpeg', '11688', '11786', '自营', '限时优惠', '37', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('45', 'HUAWEI 华为 freebuds2无线耳机 双耳蓝牙音乐耳机 陶瓷白', '45.jpeg', '779', '799', '自营', '特价', '82', '中国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('46', '【送蓝牙音箱+蓝牙自拍杆】华为 HUAWEI P30  感光徕卡三摄手机 全网通双4G手机 现货速发', '46.jpeg', '3988', '3988', '优惠价', '限时优惠', '18', '中国', '', '迪信通手机旗舰店', '热销');
INSERT INTO `data` VALUES ('47', '考拉工厂店 MFI认证三合一充电数据线', '47.jpeg', '69', '99', '自营', '满2件减20', '394', '中国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('48', 'Baseus倍思 iphone XS手机壳苹果XSmax全包防摔液态硅胶保护套超薄iPhoneXR软壳新款保护壳苹果女男网红同款i', '48.jpeg', '59', '69', '满2件享5折', '限时优惠', '27', '中国', '', 'Baseus倍思旗舰店', '热销');
INSERT INTO `data` VALUES ('49', '小米（MI） Ninebot 九号平衡车 智能代步电动体感车（黑）', '49.jpeg', '1999', '1999', '自营', '限时优惠', '49', '中国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('5', 'Apple 苹果 MacBook Air 13.3英寸  128G(i5/8GB/MQD32CH/A)', '5.jpeg', '5799', '6928', '自营', '特价', '1047', '美国', '8.4折', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('50', '【赠mini手持风扇】华为 HUAWEI nova 4 超广角三摄全网通 4G版 电信联通移动 双卡双待手机nova3 nova4', '50.jpeg', '2099', '2899', '赠', '白条免息', '44', '中国', '7.2折', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('51', '顺丰速发【赠精美阳伞+手持风扇】华为 HUAWEI Mate 20 X 6GB+128GB 麒麟980大屏徕卡三摄全网通版4G手机', '51.jpeg', '4099', '4999', '满2999减100', '赠', '523', '中国', '8.2折', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('52', '【送自拍杆】vivo U1 大屏大电池+面部指纹双识别手机', '52.jpeg', '699', '799', '特价', '限时优惠', '45', '中国', '8.7折', 'vivo手机旗舰店', '甩卖');
INSERT INTO `data` VALUES ('53', 'Baseus倍思 苹果手机XS手机壳iphonexsmax透明硅胶XR超薄新iPhones防摔套外壳女男软壳', '53.jpeg', '39', '45', '满2件享5折', '限时优惠', '32', '中国', '', 'Baseus倍思旗舰店', '热销');
INSERT INTO `data` VALUES ('54', 'Apple 苹果MacBook Pro 13.3英寸笔记本电脑 深空灰色（Core i5处理器/8GB内', '54.jpeg', '11688', '11688', '自营', '限时优惠', '49', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('55', 'Baseus倍思 iphonexr钢化膜防偷窥膜苹果7防窥膜8plus全屏覆盖隐私防窥苹果x防偷看膜iphonexsmax手机膜贴膜', '55.jpeg', '28', '39', '满2件享5折', '限时优惠', '21', '中国', '', 'Baseus倍思旗舰店', '热销');
INSERT INTO `data` VALUES ('56', '【6月开门红】华为honor/荣耀 荣耀8X智能手机全网通4G大屏全新正品官方旗舰店', '56.jpeg', '1458', '1799', '特价', '限时优惠', '32', '中国', '8.1折', '迪信通手机旗舰店', '特价');
INSERT INTO `data` VALUES ('57', '赠风扇+音箱【新品现货发售】HUAWEI 华为nova 5 Pro 4G全网通版 智能大屏四摄手机nova5 nova4', '57.jpeg', '2999', '3000', '赠', '白条免息', '11', '中国', '', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('58', '【特价顺丰速发】HUAWEI 华为畅享9 系列 高清珍珠屏 AI长续航 全网通 移动联通电信4G手机', '58.jpeg', '899', '999', '赠', '白条免息', '61', '中国', '9折', '臻火旗舰店', '热销');
INSERT INTO `data` VALUES ('59', 'Apple 苹果 iPhone Xs (A2100) 512GB 移动联通电信4G手机 国内行货', '59.jpeg', '10599', '11399', '自营', '赠', '176', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('6', 'Apple 苹果  iPad Air 3代 平板电脑 10.5英寸 64G WLAN版', '6.jpeg', '3399', '3896', '自营', '限时购', '20', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('60', '网易严选 网易智造云感磁吸手机壳 适用iPhone', '60.jpeg', '59', '59', '自营', '满2件享5折', '4728', '中国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('7', 'Apple 苹果 iPad 平板电脑  9.7英寸（128G WLAN/A10/Retina屏/MRJP', '7.jpeg', '2969', '3272', '自营', '特价', '2377', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('8', 'Apple 苹果 iPhone X 64GB 移动联通电信4G手机 国内行货', '8.jpeg', '5999', '6999', '自营', '特价', '2636', '美国', '', '网易考拉自营', '热销');
INSERT INTO `data` VALUES ('9', 'Apple 苹果 iPad 平板电脑 9.7英寸（128G WLAN/A10/Retina屏/MR7J', '9.jpeg', '2969', '3272', '自营', '特价', '795', '美国', '', '网易考拉自营', '热销');
SET FOREIGN_KEY_CHECKS=1;
