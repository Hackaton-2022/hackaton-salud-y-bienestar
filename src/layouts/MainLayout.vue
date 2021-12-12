<template>
	<div>
		<div class="container">
			<NavbarComponent />
			<router-view />
		</div>
		<FooterComponent />
	</div>
</template>

<script>
	import NavbarComponent from '../components/navbar/NavbarComponent.vue'
	import FooterComponent from '../components/footer/FooterComponent.vue'
	export default {
		name: 'MainLayout',
		components: {
			NavbarComponent,
			FooterComponent
		}
	}
</script>