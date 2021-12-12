<template>
	<div>
		<alimentos-component />
	</div>
</template>

<script>
	import AlimentosComponent from '@/components/section/alimentos/AlimentosComponent.vue'
	export default {
		name: 'Alimentos',
		components: {
			AlimentosComponent
		}
	}
</script>