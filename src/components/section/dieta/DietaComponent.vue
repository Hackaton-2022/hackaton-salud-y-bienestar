<template>
	<div>
		<h1>Dieta</h1>
		<b-row align-h="center">
			<b-col
				cols="12"
				md="3"
				@click="subirHandler"
			>
				<OptionButton
					title="Subir de peso"
					svg="logo_option_4"
					page="Dieta"
				/>
			</b-col>
			<b-col
				cols="12"
				md="3"
				@click="bajarHandler"
			>
				<OptionButton
					title="Bajar de peso"
					svg="logo_option_4"
					page="Dieta"
				/>
			</b-col>
		</b-row>

		<div v-if="subir===true">
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

		<div v-else-if="bajar===true">
			<FoodComponent
				align="right"
				tipo="Desayuno"
				imagen="desayuno"
				comida1="1 taza de cafe con leche descremada"
				comida2="2 tostadas integrales"
			/>
			<FoodComponent
				align="right"
				tipo="Merienda de la mañana"
				imagen="merienda_mañana"
				comida1="1 manzana"
			/>
			<FoodComponent
				align="right"
				tipo="Almuerzo"
				imagen="almuerzo"
				comida1="1 taza de crema de ahuyama"
				comida2="1 porcion pechuga asada"
				comida3="1 papa al horno"
			/>
			<FoodComponent
				align="right"
				tipo="Merienda de la tarde"
				imagen="merienda_tarde"
				comida1="1 Banano"
			/>
			<FoodComponent
				align="right"
				tipo="Cena"
				imagen="cena"
				comida1="1 porcion de ensalada verde (lechuga, pepino, tomate)"
				comida2="1 porcion de arroz integral"
				comida3="1 porcion atun asado"
			/>
		</div>

		<div v-else-if="informacion===true">
			<h2>Tu dieta a un solo click</h2>
			<div class="col-7 mt-5 mb-5 mx-auto d-none d-md-block">
				<b-img
					:src="require('../../../assets/food.svg')"
					alt="Map"
					fluid
					width='400'
				></b-img>
			</div>
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