import {
	computed,
	unref
} from 'vue';
import {
	WINDOW_INFO
} from './config.js';
// 状态栏高度
export const statusBarH = computed(() => WINDOW_INFO.statusBarHeight || 25);
// 样式
export const useNavBarStyle = () => {
	const statusBarHeight = computed(() => unref(statusBarH) + 'px');
	return {
		statusBarHeight
	}
}