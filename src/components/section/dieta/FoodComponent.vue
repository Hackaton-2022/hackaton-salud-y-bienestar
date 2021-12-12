<template>
	<div class="food-container">
		<div v-if="align === 'right'">
			<b-row
				align-v="center"
				align-h="center"
			>
				<b-col
					cols="12"
					md="5"
				>
					<b-img
						:src="require(`../../../assets/${imagen}.svg`)"
						alt="Desayuno"
						fluid
						center
						width='400'
					></b-img>
				</b-col>
				<b-col
					cols="12"
					md="5"
				>
					<h3>{{tipo}}</h3>
					<p>{{comida1}}</p>
					<p>{{comida2}}</p>
					<p>{{comida3}}</p>
				</b-col>
			</b-row>
		</div>
		<div v-if="align === 'left'">
			<b-row
				align-v="center"
				align-h="center"
			>
				<b-col
					cols="12"
					md="5"
				>
					<h3>Desayuno</h3>
					<p>1 vaso de yogurt griego sin azucar</p>
					<p>1 tazon de avena o cereal con leche</p>
					<p>1 porcion de fruta (manzana, banano)</p>
				</b-col>
				<b-col
					cols="12"
					md="5"
				>
					<b-img
						:src="require(`../../../assets/desayuno.svg`)"
						alt="Desayuno"
						fluid
						center
						width='400'
					></b-img>
				</b-col>
			</b-row>
		</div>
	</div>

</template>

<script>
	export default {
		props: {
			align: String,
			tipo: String,
			imagen: String,
			comida1: String,
			comida2: String,
			comida3: String
		}
	}
</script>

<style scoped>
	h3 {
		margin-bottom: 20px !important;
		font-weight: bold;
		color: #0c5190;
	}
	p {
		margin-bottom: 10px;
		color: #0c5190;
	}
	.food-container {
		margin-bottom: 50px;
	}

	.food-container h3 {
		margin-top: 20px;
	}
</style>