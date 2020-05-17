(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/epidemicMap/epidemicMap"],{

/***/ 15:
/*!********************************************************************************************************************!*\
  !*** C:/Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/main.js?{"page":"pages%2FepidemicMap%2FepidemicMap"} ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _epidemicMap = _interopRequireDefault(__webpack_require__(/*! ./pages/epidemicMap/epidemicMap.vue */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_epidemicMap.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 16:
/*!*************************************************************************************************!*\
  !*** C:/Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/pages/epidemicMap/epidemicMap.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./epidemicMap.vue?vue&type=template&id=f9012828& */ 17);
/* harmony import */ var _epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./epidemicMap.vue?vue&type=script&lang=js& */ 19);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _epidemicMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./epidemicMap.vue?vue&type=style&index=0&lang=css& */ 523);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__["render"],
  _epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/pages/epidemicMap/epidemicMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 17:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/pages/epidemicMap/epidemicMap.vue?vue&type=template&id=f9012828& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./epidemicMap.vue?vue&type=template&id=f9012828& */ 18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_template_id_f9012828___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 18:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/pages/epidemicMap/epidemicMap.vue?vue&type=template&id=f9012828& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 19:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/pages/epidemicMap/epidemicMap.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./epidemicMap.vue?vue&type=script&lang=js& */ 20);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 20:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/pages/epidemicMap/epidemicMap.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








































































var _echarts = _interopRequireDefault(__webpack_require__(/*! ../../node_modules/echarts */ 21));
__webpack_require__(/*! echarts/map/js/china.js */ 521);
__webpack_require__(/*! echarts/map/js/world.js */ 522);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//引入中国地图
var option = { series: [{ name: '确诊人数', type: 'map', // 告诉echarts渲染一个地图
    map: '', nameMap: { "Canada": "加拿大", "Turkmenistan": "土库曼斯坦", "Saint Helena": "圣赫勒拿", "Lao PDR": "老挝", "Lithuania": "立陶宛", "Cambodia": "柬埔寨", "Ethiopia": "埃塞俄比亚", "Faeroe Is.": "法罗群岛", "Swaziland": "斯威士兰", "Palestine": "巴勒斯坦", "Belize": "伯利兹", "Argentina": "阿根廷", "Bolivia": "玻利维亚", "Cameroon": "喀麦隆", "Burkina Faso": "布基纳法索", "Aland": "奥兰群岛", "Bahrain": "巴林", "Saudi Arabia": "沙特阿拉伯", "Fr. Polynesia": "法属波利尼西亚", "Cape Verde": "佛得角", "W. Sahara": "西撒哈拉", "Slovenia": "斯洛文尼亚", "Guatemala": "危地马拉", "Guinea": "几内亚", "Dem. Rep. Congo": "刚果（金）", "Germany": "德国", "Spain": "西班牙", "Liberia": "利比里亚", "Netherlands": "荷兰", "Jamaica": "牙买加", "Solomon Is.": "所罗门群岛", "Oman": "阿曼", "Tanzania": "坦桑尼亚", "Costa Rica": "哥斯达黎加", "Isle of Man": "曼岛", "Gabon": "加蓬", "Niue": "纽埃", "Bahamas": "巴哈马", "New Zealand": "新西兰", "Yemen": "也门", "Jersey": "泽西岛", "Pakistan": "巴基斯坦", "Albania": "阿尔巴尼亚", "Samoa": "萨摩亚", "Czech Rep.": "捷克", "United Arab Emirates": "阿拉伯联合酋长国", "Guam": "关岛", "India": "印度", "Azerbaijan": "阿塞拜疆", "N. Mariana Is.": "北马里亚纳群岛", "Lesotho": "莱索托", "Kenya": "肯尼亚", "Belarus": "白俄罗斯", "Tajikistan": "塔吉克斯坦", "Turkey": "土耳其", "Afghanistan": "阿富汗", "Bangladesh": "孟加拉国", "Mauritania": "毛里塔尼亚", "Dem. Rep. Korea": "朝鲜", "Saint Lucia": "圣卢西亚", "Br. Indian Ocean Ter.": "英属印度洋领地", "Mongolia": "蒙古", "France": "法国", "Cura?ao": "库拉索岛", "S. Sudan": "南苏丹", "Rwanda": "卢旺达", "Slovakia": "斯洛伐克",
      "Somalia": "索马里",
      "Peru": "秘鲁",
      "Vanuatu": "瓦努阿图",
      "Norway": "挪威",
      "Malawi": "马拉维",
      "Benin": "贝宁",
      "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
      "Korea": "韩国",
      "Singapore": "新加坡",
      "Montenegro": "黑山共和国",
      "Cayman Is.": "开曼群岛",
      "Togo": "多哥",
      "China": "中国",
      "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
      "Armenia": "亚美尼亚",
      "Falkland Is.": "马尔维纳斯群岛（福克兰）",
      "Ukraine": "乌克兰",
      "Ghana": "加纳",
      "Tonga": "汤加",
      "Finland": "芬兰",
      "Libya": "利比亚",
      "Dominican Rep.": "多米尼加",
      "Indonesia": "印度尼西亚",
      "Mauritius": "毛里求斯",
      "Eq. Guinea": "赤道几内亚",
      "Sweden": "瑞典",
      "Vietnam": "越南",
      "Mali": "马里",
      "Russia": "俄罗斯",
      "Bulgaria": "保加利亚",
      "United States": "美国",
      "Romania": "罗马尼亚",
      "Angola": "安哥拉",
      "Chad": "乍得",
      "South Africa": "南非",
      "Fiji": "斐济",
      "Liechtenstein": "列支敦士登",
      "Malaysia": "马来西亚",
      "Austria": "奥地利",
      "Mozambique": "莫桑比克",
      "Uganda": "乌干达",
      "Japan": "日本",
      "Niger": "尼日尔",
      "Brazil": "巴西",
      "Kuwait": "科威特",
      "Panama": "巴拿马",
      "Guyana": "圭亚那",
      "Madagascar": "马达加斯加",
      "Luxembourg": "卢森堡",
      "American Samoa": "美属萨摩亚",
      "Andorra": "安道尔",
      "Ireland": "爱尔兰",
      "Italy": "意大利",
      "Nigeria": "尼日利亚",
      "Turks and Caicos Is.": "特克斯和凯科斯群岛",
      "Ecuador": "厄瓜多尔",
      "U.S. Virgin Is.": "美属维尔京群岛",
      "Brunei": "文莱",
      "Australia": "澳大利亚",
      "Iran": "伊朗",
      "Algeria": "阿尔及利亚",
      "El Salvador": "萨尔瓦多",
      "C?te d'Ivoire": "科特迪瓦",
      "Chile": "智利",
      "Puerto Rico": "波多黎各",
      "Belgium": "比利时",
      "Thailand": "泰国",
      "Haiti": "海地",
      "Iraq": "伊拉克",
      "S?o Tomé and Principe": "圣多美和普林西比",
      "Sierra Leone": "塞拉利昂",
      "Georgia": "格鲁吉亚",
      "Denmark": "丹麦",
      "Philippines": "菲律宾",
      "S. Geo. and S. Sandw. Is.": "南乔治亚岛和南桑威奇群岛",
      "Moldova": "摩尔多瓦",
      "Morocco": "摩洛哥",
      "Namibia": "纳米比亚",
      "Malta": "马耳他",
      "Guinea-Bissau": "几内亚比绍",
      "Kiribati": "基里巴斯",
      "Switzerland": "瑞士",
      "Grenada": "格林纳达",
      "Seychelles": "塞舌尔",
      "Portugal": "葡萄牙",
      "Estonia": "爱沙尼亚",
      "Uruguay": "乌拉圭",
      "Antigua and Barb.": "安提瓜和巴布达",
      "Lebanon": "黎巴嫩",
      "Uzbekistan": "乌兹别克斯坦",
      "Tunisia": "突尼斯",
      "Djibouti": "吉布提",
      "Greenland": "格陵兰",
      "Timor-Leste": "东帝汶",
      "Dominica": "多米尼克",
      "Colombia": "哥伦比亚",
      "Burundi": "布隆迪",
      "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
      "Cyprus": "塞浦路斯",
      "Barbados": "巴巴多斯",
      "Qatar": "卡塔尔",
      "Palau": "帕劳",
      "Bhutan": "不丹",
      "Sudan": "苏丹",
      "Nepal": "尼泊尔",
      "Micronesia": "密克罗尼西亚",
      "Bermuda": "百慕大",
      "Suriname": "苏里南",
      "Venezuela": "委内瑞拉",
      "Israel": "以色列",
      "St. Pierre and Miquelon": "圣皮埃尔和密克隆群岛",
      "Central African Rep.": "中非",
      "Iceland": "冰岛",
      "Zambia": "赞比亚",
      "Senegal": "塞内加尔",
      "Papua New Guinea": "巴布亚新几内亚",
      "Trinidad and Tobago": "特立尼达和多巴哥",
      "Zimbabwe": "津巴布韦",
      "Jordan": "约旦",
      "Gambia": "冈比亚",
      "Kazakhstan": "哈萨克斯坦",
      "Poland": "波兰",
      "Eritrea": "厄立特里亚",
      "Kyrgyzstan": "吉尔吉斯斯坦",
      "Montserrat": "蒙特塞拉特",
      "New Caledonia": "新喀里多尼亚",
      "Macedonia": "马其顿",
      "Paraguay": "巴拉圭",
      "Latvia": "拉脱维亚",
      "Hungary": "匈牙利",
      "Syria": "叙利亚",
      "Honduras": "洪都拉斯",
      "Myanmar": "缅甸",
      "Mexico": "墨西哥",
      "Egypt": "埃及",
      "Nicaragua": "尼加拉瓜",
      "Cuba": "古巴",
      "Serbia": "塞尔维亚",
      "Comoros": "科摩罗",
      "United Kingdom": "英国",
      "Fr. S. Antarctic Lands": "南极洲",
      "Congo": "刚果（布）",
      "Greece": "希腊",
      "Sri Lanka": "斯里兰卡",
      "Croatia": "克罗地亚",
      "Botswana": "博茨瓦纳",
      "Siachen Glacier": "锡亚琴冰川地区" },



    // 告诉echarts渲染中国地图
    label: {
      // 设置地区汉字
      show: false,
      color: '#333',
      fontSize: 10 },

    itemStyle: {
      // 地图区域样式
      areaColor: '#eee' },

    roam: true,
    // 鼠标滚轮效果
    zoom: 1.2,
    // 地图放大缩小
    emphasis: {
      // 鼠标经过地图和字体样式
      label: {
        color: '#fff',
        fontSize: 12 },

      itemStyle: {
        areaColor: '#ccc' } },


    data: []
    // 展示后台给的数据，必须格式（name:xxx;value:xxx）
  }],
  visualMap: [{
    // 区域显示颜色
    type: 'piecewise',
    show: true,
    // splitNumber: 4
    pieces: [
    { min: 10000 },
    { min: 1000, max: 9999 },
    { min: 100, max: 999 },
    { min: 10, max: 99 },
    { min: 1, max: 9 },
    { max: 0 }],

    inRange: {
      // 区域图标样式
      symbol: 'rect',

      color: ['#FFFFFF', '#FFAA85', '#FF7B69', '#CC2929', '#8C0D0D', '#660208'] } }],


  tooltip: {
    // 鼠标放上去显示内容
    trigger: 'item' },

  toolbox: {
    // 下载
    show: false,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: { readyOnly: false },
      restore: {},
      saveAsImage: {} } } };



//	console.log('data1',option.series[0].data);
var _default =
{
  props: {
    selectedDepartment: Number },

  data: function data() {
    return {
      showOptions: false,
      itemList: [{ name: "国内", id: 'inland' }, { name: "世界", id: 'global' }],
      //	itemList:['国内','世界'],
      index: 0,
      area: 'inland',
      itemSelected: '国内',
      currentConfirmedCount: 1947236,
      //	currentConfirmedCount: '',
      confirmedCount: 3070127,
      curedCount: 905341,
      deadCount: 217550,
      currentConfirmedIncr: 2576,
      confirmedIncr: 18709,
      curedIncr: 15835,
      deadIncr: 298,
      numList: '',
      mapList: '',
      myCharts: '',
      mapData: [],
      map: '' };

  },
  created: function created() {
    this.area = this.itemList[this.index].id;
  },
  onReady: function onReady() {var _this = this; //template挂载到页面时调用
    console.log("onready");
    this.getMapData();

    this.getOutlineData(); //执行getOutlineData方法
    this.mycharts = _echarts.default.init(this.$refs.mapbox);
    // 初始化echarts
    this.$nextTick(function () {

      _this.mycharts.setOption(option);
    });

    //	console.log('mapList',this.mapList);
    //	console.log('mapdata',this.mapData);

  },
  methods: {
    getMapData: function getMapData() {var _this2 = this;
      uni.request({
        url: this.$serverUrl + '/getMapData?area=' + this.area,
        //method: 'GET',
        success: function success(ret) {
          if (ret.statusCode !== 200) {
            console.log('失败!');
          }
          console.log('ret', ret);
          _this2.mapList = ';';
          _this2.mapList = ret.data.newslist;

          _this2.mapData = [];
          for (var item in _this2.mapList) {
            //	console.log('item',this.mapList[item]);
            if (_this2.area == 'inland')
            _this2.mapData[item] = {
              name: _this2.mapList[item].provinceShortName,
              value: _this2.mapList[item].currentConfirmedCount };else

            if (_this2.area == 'global')
            _this2.mapData[item] = {
              name: _this2.mapList[item].provinceName,
              value: _this2.mapList[item].currentConfirmedCount };

          }
          option.series[0].data = _this2.mapData;
          //	console.log('getList',this.mapData);
          if (_this2.area == 'inland')
          option.series[0].map = 'china';else
          if (_this2.area == 'global')
          option.series[0].map = 'world';
          _this2.mycharts.setOption(option);
          //	console.log('getList',this.mapList);
          //console.log('getdata',this.mapData);
        } });

      //		
    },

    getOutlineData: function getOutlineData() {var _this3 = this;
      console.log(this.$serverUrl + '/getOutlineData?area=' + this.area);
      uni.request({
        url: this.$serverUrl + '/getOutlineData?area=' + this.area,
        //method: 'GET',

        success: function success(ret) {
          if (ret.statusCode !== 200) {
            console.log('失败!');
          }

          _this3.numList = ret.data;
          console.log('data', ret.data);
          _this3.currentConfirmedCount = ret.data.currentConfirmedCount;
          _this3.confirmedCount = ret.data.confirmedCount;
          _this3.curedCount = ret.data.curedCount;
          _this3.deadCount = ret.data.deadCount;

          _this3.currentConfirmedIncr = ret.data.currentConfirmedIncr;
          _this3.confirmedIncr = ret.data.confirmedIncr;
          _this3.curedIncr = ret.data.curedIncr;
          _this3.deadIncr = ret.data.deadIncr;
        } });


    },

    goCommunity: function goCommunity() {
      uni.navigateTo({
        url: '/pages/epidemicMap/community' });

    },
    goGraph: function goGraph() {
      uni.navigateTo({
        url: '/pages/epidemicMap/graph' });

    },
    getItemSelected: function getItemSelected(e) {
      this.index = e.target.value; //将数组改变索引赋给定义的index变量
      this.itemSelected = this.itemList[this.index];
      this.area = this.itemList[this.index].id;
      this.getOutlineData();
      this.getMapData();

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 523:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/pages/epidemicMap/epidemicMap.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./epidemicMap.vue?vue&type=style&index=0&lang=css& */ 524);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_epidemicMap_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 524:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Kfor/Desktop/se/frontServiceToolkitForEpidemic/pages/epidemicMap/epidemicMap.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[15,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/epidemicMap/epidemicMap.js.map