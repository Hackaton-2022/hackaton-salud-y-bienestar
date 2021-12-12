<template>
	<div>
		<h1>Listado de especialistas</h1>

		<div>
			<EspecialistaPersonComponent
				align="right"
				imagen="avatar"
				nombre="Carlos Alberto"
				apellido="Perez Gomez"
				address="Calle 127 # 54-32 Oficina 302"
				tel="300 123 4567"
				ocupacion="Medico Internista"
			/>
			<EspecialistaPersonComponent
				align="right"
				imagen="avatar"
				nombre="Maria Paula"
				apellido="Ramirez Charry"
				address="Calle 127 # 54-32 Oficina 402"
				tel="300 123 4321"
				ocupacion="Medico Cardiologo"
			/>
			<EspecialistaPersonComponent
				align="right"
				imagen="avatar"
				nombre="Mario"
				apellido="Gonzales Rubio"
				address="Calle 100 # 22-13 Oficina 106"
				tel="300 0981234"
				ocupacion="Medico Neurologo"
			/>
			<EspecialistaPersonComponent
				align="right"
				imagen="avatar"
				nombre="Alejandra"
				apellido="Rodriguez"
				address="Calle 127 # 54-32 Oficina 501"
				tel="300 123 7654"
				ocupacion="Medico Neurologo"
			/>
		</div>

	</div>

</template>

<script>
	import EspecialistaPersonComponent from '../../../components/section/especialistas/EspecialistaPersonComponent.vue'
	export default {
		components: {
			EspecialistaPersonComponent
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