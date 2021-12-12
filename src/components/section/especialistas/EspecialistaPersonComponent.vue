<template>
	<div class="food-container mt-5 mb-5">
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
						alt="Especialista"
						fluid
						center
						width='200'
					></b-img>
				</b-col>
				<b-col
					cols="12"
					md="5"
				>
					<h3>{{ocupacion}}</h3>
					<p>{{nombre}}</p>
					<p>{{apellido}}</p>
					<p>{{address}}</p>
					<p>{{tel}}</p>
				</b-col>
			</b-row>
		</div>
	</div>

</template>

<script>
	export default {
		props: {
			align: String,
			imagen: String,
			nombre: String,
			apellido: String,
			address: String,
			tel: String,
			ocupacion: String
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