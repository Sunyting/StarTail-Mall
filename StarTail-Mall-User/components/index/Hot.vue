<script setup>
import { ref } from 'vue';
import Commodity from '@/components/common/Commodity';
const props = defineProps({
	hotList: Array
});
</script>

<template>
	<Commodity :dataList="props.hotList" :itemwidth="250" />
</template>

<style lang="scss" scoped></style>
