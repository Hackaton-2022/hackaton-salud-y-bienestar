<template>
	<div>
		<h1>Listado de actividades</h1>

		<div>
			<ActividadComponent
				align="right"
				imagen="activity"
				name="Actividad de aerobicos"
				address="Calle 127 # 54-32 Oficina 302"
				fecha="30/12/2021"
				hora="12:00"
			/>
			<ActividadComponent
				align="right"
				imagen="activity"
				name="Actividad de aerobicos"
				address="Calle 127 # 54-32 Oficina 302"
				fecha="30/12/2021"
				hora="12:00"
			/>
			<ActividadComponent
				align="right"
				imagen="activity"
				name="Actividad de aerobicos"
				address="Calle 127 # 54-32 Oficina 302"
				fecha="30/12/2021"
				hora="12:00"
			/>
			<ActividadComponent
				align="right"
				imagen="activity"
				name="Actividad de aerobicos"
				address="Calle 127 # 54-32 Oficina 302"
				fecha="30/12/2021"
				hora="12:00"
			/>
		</div>

	</div>

</template>

<script>
	import ActividadComponent from '../../../components/section/actividades/ActividadComponent.vue';
	export default {
		components: {
			ActividadComponent
		},
		data() {
			return {
				bajar: false,
				subir: false,
				informacion: true
			}
		},
		methods: {
			subirHandler() {
				this.informacion = false;
				this.bajar = false
				this.subir = true;
			},
			bajarHandler() {
				this.informacion = false;
				this.subir = false;
				this.bajar = true;
			}
		}
	}
</script>

<style scoped>
	h1,
	h2 {
		color: #0c5190;
		font-weight: bold;
	}
</style>