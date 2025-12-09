<script>
export default {
	onLaunch: function () {
		console.log('App Launch');
	},
	onShow: function () {
		console.log('App Show');
	},
	onHide: function () {
		console.log('App Hide');
	}
};
</script>

<style>
/* 通用字体设置 */
page,
view,
text,
button,
input,
textarea {
	font-family: FZYingBiKaiShu-S15S;
}
/* #ifdef MP-WEIXIN */
page,
view,
text,
button,
input,
textarea {
	font-family: Arial, Helvetica, sans-serif;
}
/* #endif */

/* 针对tabBar的特殊处理 */
/* 微信小程序的tabBar是一个原生组件，需要通过CSS变量或自定义组件来修改样式 */
uni-tabbar .uni-tabbar__item,
uni-tabbar .uni-tabbar__icon,
uni-tabbar .uni-tabbar__label {
	font-family: FZYingBiKaiShu-S15S !important;
}
</style>
