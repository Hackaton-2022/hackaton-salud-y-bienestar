<template>
	<div>
		<h1>Dieta</h1>
		<b-row align-h="center">
			<b-col
				cols="12"
				md="3"
			>
				<OptionButton
					title="Subir de peso"
					svg="logo_option_4"
				/>
			</b-col>
			<b-col
				cols="12"
				md="3"
			>
				<OptionButton
					title="Bajar de peso"
					svg="logo_option_4"
				/>
			</b-col>
		</b-row>

		<div>
			<FoodComponent
				align="right"
				tipo="Desayuno"
				imagen="desayuno"
				comida1="1 vaso de yogurt griego sin azucar"
				comida2="1 tazon de avena o cereal con leche"
				comida3="1 porcion de fruta (manzana, banano)"
			/>
			<FoodComponent
				align="right"
				tipo="Merienda de la mañana"
				imagen="merienda_mañana"
				comida1="1 porcion de fruta acompañada de una porcion de frutos secos"
				comida2="1 vaso de yogurt natural"
			/>
			<FoodComponent
				align="right"
				tipo="Almuerzo"
				imagen="almuerzo"
				comida1="1 porcion de pasta integral"
				comida2="1 porcion de ensalada con lechuga y zanahoria"
				comida3="1 porcion de atun al horno con champiñones"
			/>
			<FoodComponent
				align="right"
				tipo="Merienda de la tarde"
				imagen="merienda_tarde"
				comida1="1 Tostada integral"
				comida2="1 rodaja de jamon de pavo"
				comida3="1 rodaja de queso"
			/>
			<FoodComponent
				align="right"
				tipo="Cena"
				imagen="cena"
				comida1="1 porcion de vegetales salteados"
				comida2="1 porcion de pechuga asada"
				comida3="1 porcion de pure de papa"
			/>
		</div>

	</div>

</template>

<script>
	import OptionButton from '../../../components/section/home/OptionButton.vue'
	import FoodComponent from './FoodComponent.vue'
	export default {
		components: {
			OptionButton,
			FoodComponent
		}
	}
</script>

<style scoped>
	h1 {
		color: #0c5190;
		font-weight: bold;
	}
</style>