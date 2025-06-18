// // eslint-disable-next-line no-undef
// module.exports = {
//   plugins: {
//       'postcss-px-to-viewport': {
//           // 设备宽度375计算vw的值
//           viewportWidth: 375,
//       },
//   },
// };
//转为ES模块，而不是common js模块
 
export const plugins = {
'postcss-px-to-viewport': {
viewportWidth: 375,
},
};