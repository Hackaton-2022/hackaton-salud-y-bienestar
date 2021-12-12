<template>
	<div>
		<BannerComponent />
		<OptionsComponent />
	</div>
</template>

<script>
	import BannerComponent from '../../components/section/home/BannerComponent.vue'
	import OptionsComponent from '../../components/section/home/OptionsComponent.vue'
	export default {
		name: 'Home',
		components: {
			BannerComponent,
			OptionsComponent
		}
	}
</script>