<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
       <button @click="onChange">修改</button>
			 <text>{{ demoPinia.count }}</text>
       <button @click="demoPinia.increment">修改pinia</button>
			 <button @click="go">ggooo demo</button>
    </view>
		<uni-card>
			<text>使用uni-ui使用uni-ui使用uni-ui使用uni-ui使用uni-ui使用uni-ui使用uni-ui使用uni-ui使用uni-ui使用uni-ui使用uni-ui</text>
		</uni-card>
  </view>
</template>

<script setup lang="ts">
import urlFormat from '@/router';
import { useDemoPinia } from '@/store'
const demoPinia = useDemoPinia()
let title = ref<string>('Hello')

function onChange(){
	title.value = 'xsdsd'
}

function go(){
	uni.navigateTo({url: urlFormat('demo',{index:'sas'})})
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
