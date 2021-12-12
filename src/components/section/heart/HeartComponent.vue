<template>
	<div class="mt-5">
		<h1>Informacion acerta de tu Corazon</h1>

		<b-row align-h="center">
			<b-col
				cols="12"
				md="4"
				align-self="center"
			>
				<b-img
					:src="require('../../../assets/artificial.svg')"
					alt="Map"
					fluid
				></b-img>
			</b-col>
			<b-col
				cols="12"
				md="4"
			>
				<p class="descripcion">
					Llenando el siguiente formulario accederas a una <strong>inteligencia artificial</strong> la cual predicira si pudieras tener algun tipo de problema con tu corazon, este modelo no reemplaza la revision de un medico experto en el area.
					<br>
					Nota: Si presentas algun dato vacio lo reemplazaremos con la media de los datos
				</p>
			</b-col>
		</b-row>

		<form @submit.prevent="calc">
			<div class="col-10 mx-auto formulario mb-5">
				<h2 class="mb-5">Ingresa tus datos</h2>
				<b-row align-h="around">
					<b-col
						cols="12"
						md="5"
					>
						<div class="row align-items-start form-group">
							<label
								for="edad"
								class="row"
							>Edad:</label>
							<b-form-input
								placeholder="Ingrese su edad"
								id="edad"
								v-model="age"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="sexo"
								class="row"
							>Sexo:</label>
							<b-form-input
								placeholder="Ingrese su genero"
								id="sexo"
								v-model="sex"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="dolorpecho"
								class="row"
							>Dolor en el pecho:</label>
							<b-form-input
								placeholder="Ingrese un valor de 0 a 4"
								id="dolorpecho"
								v-model="cp"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="psanguinea"
								class="row"
							>Presion sanguinea en reposo:</label>
							<b-form-input
								placeholder="Ingrese su presion sanguinea"
								id="psanguinea"
								v-model="trestbps"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="colesterol"
								class="row"
							>Medicion de colesterol:</label>
							<b-form-input
								placeholder="Ingrese su medicion de colesterol"
								id="colesterol"
								v-model="chol"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="azucar"
								class="row"
							>Medicion de azucar en la sangre:</label>
							<b-form-input
								placeholder="Ingrese su medicion de azucar"
								id="azucar"
								v-model="fbs"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="ecgr"
								class="row"
							>Resultados electrocardiograficos en reposo:</label>
							<b-form-input
								placeholder="Ingrese sus resultados electrocardiograficos"
								id="ecgr"
								v-model="restcg"
							></b-form-input>
						</div>
					</b-col>

					<b-col
						cols="12"
						md="5"
					>
						<div class="row align-items-start form-group">
							<label
								for="frec"
								class="row"
							>Frecuencia cardiaca maxima alcanzada:</label>
							<b-form-input
								placeholder="Ingrese sus resultados de frecuencia"
								id="frec"
								v-model="thalach"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="anguina"
								class="row"
							>Se presento anguina de pecho despues de haber hecho ejercicio=:</label>
							<b-form-input
								placeholder="Ingrese sus resultados de frecuencia"
								id="anguina"
								v-model="exang"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="st"
								class="row"
							>Depresión ST inducida por ejercicio respecto al reposo (Más información aquí. ​https://litfl.com/st-segment-ecg-library/​):</label>
							<b-form-input
								placeholder="Ingrese sus resultados de frecuencia"
								id="st"
								v-model="oldpeak"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="slope"
								class="row"
							>Pendiente del pico del segmento ST:</label>
							<b-form-input
								placeholder="Ingrese sus resultados de frecuencia"
								id="slope"
								v-model="slope"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="ca"
								class="row"
							>Número de vasos sanguíneos mayores coloreados por la fluoroscopia:</label>
							<b-form-input
								placeholder="Ingrese sus resultados de frecuencia"
								id="ca"
								v-model="ca"
							></b-form-input>
						</div>

						<div class="row align-items-start form-group">
							<label
								for="thal"
								class="row"
							>Talasemia: 1 - Normal, 2 - Defecto fijo, 3 - Defecto reversible:</label>
							<b-form-input
								placeholder="Ingrese sus resultados de frecuencia"
								id="thal"
								v-model="thal"
							></b-form-input>
						</div>
					</b-col>
				</b-row>

				<input
					type="submit"
					value="Entrar"
					class="btn mt-3"
				>
			</div>
		</form>

		<div
			class="formulario col-10 mx-auto resultado"
			v-if="prediction != -1"
		>
			<h3>Tus resultados fueron</h3>
			<p> {{ prediction }} <span v-if="prediction == 1">Te sugerimos estar pendiente de tu corazón podrias tener algun problema</span> <span v-else-if="prediction == 0">Al parecer no pareces tener problemas en el corazon sin embargo sigue controlando tus indices</span> </p>
		</div>

	</div>

</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Heart',
		data() {
			return {
				prediction: -1,
				age: 0,
				sex: 0,
				cp: 0,
				trestbps: 0,
				chol: 0,
				fbs: 0,
				restcg: 0,
				thalach: 0,
				exang: 0,
				oldpeak: 0,
				slope: 0,
				ca: 0,
				thal: 0
			}
		},
		methods: {
			async calc() {
				try {
					let result = await axios.post('http://flask-ml-heart.herokuapp.com/predict', {
						age: this.age || 54,
						sex: this.sex || 1,
						cp: this.cp || 1,
						trestbps: this.trestbps || 131,
						chol: this.chol || 246,
						fbs: this.fbs || 0,
						restcg: this.restcg || 1,
						thalach: this.thalach || 150,
						exang: this.exang || 0,
						oldpeak: this.oldpeak || 1,
						slope: this.slope || 1,
						ca: this.ca || 1,
						thal: this.thal || 3
					})

					console.log(result)

					this.prediction = result.data.Prediction

				} catch (error) {
					alert("Error del servidor")
				}

			}
		}
	}
</script>

<style scoped>
	h2 {
		color: #0c5190;
		font-weight: bold;
	}
	label {
		color: #0c5190;
	}
	h1 {
		color: #0c5190;
		font-weight: bold;
		margin-bottom: 40px;
	}
	.login .img-fluid {
		max-width: 60%;
	}
	.login h2 {
		font-weight: bold;
	}
	.formulario {
		background-color: #f8f8f8;
		padding: 30px 50px;
		border-radius: 5px;
		margin-top: 20px;
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
		background-color: #006095;
		color: white;
		font-weight: bold;
		padding: 3px 20px;
	}
	.button-modal {
		display: flex;
		justify-content: center;
	}
	.error {
		color: red;
		text-align: left;
		margin-top: 3px;
	}
	.descripcion {
		color: #0c5190;
		font-size: 20px;
	}
	.resultado {
		color: #0c5190;
		font-size: 20px;
		margin-bottom: 30px;
	}
	.resultado h3 {
		font-weight: bold;
	}
</style>