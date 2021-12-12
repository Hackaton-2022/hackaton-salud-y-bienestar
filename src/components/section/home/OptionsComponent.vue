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
						title="Ingesta diaria de comidas y nutrientes"
						description="Para que tengas un control de tus ingestas diarias de energías y nutrientes."
						svg="logo_option_1"
						page="Nutrientes"
					/>
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Ingresa tu peso y estatura"
						description="Para que conozcas tu indice de masa corporal."
						svg="logo_option_2"
						page="Calculadora"
					/>
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Encuentra tu dieta ideal"
						description="Las mejores dietas diseñadas por profesionales, solo para ti."
						svg="logo_option_3"
						page="Dieta"
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
						svg="logo_option_4"
					/>
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Recordatorio medico"
						description="Recibe alertas para agendar citas de control periodicamente y sobre tus proximas citas medicas"
						svg="logo_option_5"
					/>
				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Listado de especialistas"
						description="Accede a un especialista capacitado, y adecuado para tus necesidades"
						svg="logo_option_6"
					/>
				</b-col>
			</b-row>
			<b-row align-h="center">
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Informate y entiende como funciona una enfermedad"
						svg="logo_option_7"
						page="Heart"
					/>

				</b-col>
				<b-col
					cols="12"
					md="3"
				>
					<OptionButton
						title="Registra tus examenes medicos"
						description="Puedes tener almacenados tus registros medicos, y comparar con registros anteriores."
						svg="logo_option_8"
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