<template>
	<div class="mt-5">
		<h4>Tenemos muchas maneras de cuidarte a ti y a los que mas quieres</h4>
		<div class="mt-5 mb-5">
			<b-row align-h="center">
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Registra tus comidas"
						description="Para que tengas un control de tus ingestas diarias de energías y nutrientes."
					/>
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Ingresa tu peso y estatura"
						description="Para que conozcas tu indice de masa corporal."
					/>
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Encuentra tu dieta ideal"
						description="Las mejores dietas diseñadas por profesionales, solo para ti."
					/>
				</b-col>
			</b-row>
			<b-row align-h="center">
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Actividades en tu zona"
						description="Enterate de las actividades perfectas en la zona e inscribete"
					/>
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Recordatorio medico"
						description="Recibe alertas para agendar citas de control periodicamente y sobre tus proximas citas medicas"
					/>
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Listado de especialistas"
						description="Accede a un especialista capacitado, y adecuado para tus necesidades"
					/>
				</b-col>
			</b-row>
			<b-row align-h="center">
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton title="Informate y entiende como funciona una enfermedad" />
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Registra tus examenes medicos"
						description="Puedes tener almacenados tus registros medicos, y comparar con registros anteriores."
					/>
				</b-col>
			</b-row>

		</div>
	</div>
</template>

<script>
	import OptionButton from './OptionButton.vue'
	export default {
		components: {
			OptionButton
		}
	}
</script>

<style scoped>
	h4 {
		font-weight: bold;
		color: #0c5190;
	}
</style>