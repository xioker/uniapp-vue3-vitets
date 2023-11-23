import { createI18n } from "vue-i18n";
import en from './en.json'
import ko from './ko.json'
import ja from './ja.json'
import zh from './zh-Hans.json'
import hk from './zh-Hant.json'

let i18nConfig = {
	locale: uni.getLocale(),// 获取已设置的语言
	messages: {
		en,
		ja,
		ko,
		'zh-Hans': zh,
		'zh-Hant': hk,
	},
}
const i18n = createI18n(i18nConfig)
export default i18n