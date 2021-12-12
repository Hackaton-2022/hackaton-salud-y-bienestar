<template>
	<div class="row align-items-center mt mb">
		<h1 class="mb-5">Ingesta Diaria de Alimentos Recomendada</h1>
		<div class="col-7 d-none d-md-block">
			<b-img
				:src="require('../../../assets/movil.svg')"
				alt="Movil"
				fluid
			></b-img>
		</div>
		<div class="col-sm-12 col-md-5  formulario">
			<form
				@submit.prevent=""
				autocomplete="off"
			>
				<h2 class="row align-self-start form-title">Ingresa tus datos personales</h2>
				<div class="row align-items-start form-group">
					<label
						for="genero"
						class="row"
					>Genero:</label>
					<b-form-input
						placeholder="Seleccione su genero"
						list="genero-list"
						id="genero"
						v-model="genero"
					></b-form-input>
					<datalist id="genero-list">
						<option
							v-for="genero in generos"
							:key="genero"
						>{{ genero }}</option>
					</datalist>
				</div>

				<div class="row align-items-start form-group">
					<label
						for="peso"
						class="row"
					>Peso:</label>
					<b-form-input
						placeholder="Ingrese su peso en kilogramos"
						type="number"
						id="peso"
						v-model="peso"
					></b-form-input>
				</div>

				<div class="row align-items-start form-group">
					<label
						for="estatura"
						class="row align-self-start"
					>Estatura:</label>
					<b-form-input
						placeholder="Ingrese su estatura en centimetros"
						type="number"
						id="estatura"
						v-model="estatura"
					></b-form-input>
				</div>

				<input
					type="submit"
					value="Calcular"
					class="btn mt-3"
				>

			</form>
		</div>

		<div class="col-12 mt-5 pt-3 pb-3 indice">
			<h2>Su indice de masa corporal es de <strong>20</strong></h2>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				genero: '',
				peso: null,
				estatura: null,
				generos: ['Masculino', 'Femenino']
			}
		}

	}
</script>

<style scoped>
	h1,
	h2,
	label {
		color: #0c5190;
	}
	.borde {
		border: 1px solid black;
	}
	.img-fluid {
		max-width: 60%;
	}
	.mt {
		margin-top: 30px !important;
	}
	.mb {
		margin-bottom: 70px !important;
	}
	.formulario {
		background-color: #e5f6f5;
		padding: 30px 50px;
		border-radius: 5px;
	}
	.form-title {
		font-weight: bold;
		margin-bottom: 30px;
	}
	.form-group {
		margin-bottom: 15px;
	}
	.form-group label {
		margin-bottom: 15px;
		font-weight: bold;
	}
	.btn {
		background-color: #00a69f;
		color: white;
		font-weight: bold;
		padding: 3px 20px;
	}
	.btn:hover {
		background-color: #00e093;
	}
	.error {
		color: red;
		text-align: left;
		margin-top: 3px;
	}
	.indice {
		background-color: #e5f6f5;
		border-radius: 5px;
	}
	.informacion {
		margin: 0 auto;
		width: 50%;
		background-color: #e5f6f5;
		border-radius: 5px;
	}
</style>