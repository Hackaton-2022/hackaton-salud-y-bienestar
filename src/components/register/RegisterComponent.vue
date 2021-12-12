<template>
	<div class="container">
		<div>
			<b-modal
				id="modal"
				hide-footer
				hide-header
			>
				<div class="d-block text-center">
					<h4>{{ message }}</h4>
				</div>
				<div class="button-modal">
					<b-button
						class="mt-3"
						block
						@click="closeModal"
					>Cerrar</b-button>

				</div>
			</b-modal>
		</div>
		<div class="row mt-5 mb-5 login">
			<div class="col-7 align-self-center mt-5 mb-5 d-none d-md-block">
				<b-img
					:src="require('../../assets/register.svg')"
					alt="Map"
					fluid
				></b-img>
			</div>
			<div class="col-sm-12 col-md-5 formulario">
				<form @submit.prevent="register">
					<h2 class="row align-self-start form-title mb-5">Registro</h2>
					<div class="row align-items-start form-group">
						<label
							for="username"
							class="row"
						>Usuario:</label>
						<b-form-input
							placeholder="Ingrese su nombre de usuario"
							id="username"
							v-model="username"
						></b-form-input>
						<div
							v-if="error.username"
							class="error"
						>{{ error.username }}</div>
					</div>

					<div class="row align-items-start form-group">
						<label
							for="email"
							class="row"
						>Correo electronico:</label>
						<b-form-input
							placeholder="Ingrese su correo electronico"
							type="email"
							id="email"
							v-model="email"
						></b-form-input>
						<div
							v-if="error.email"
							class="error"
						>{{ error.email }}</div>
					</div>

					<div class="row align-items-start form-group">
						<label
							for="password"
							class="row"
						>Contraseña:</label>
						<b-form-input
							placeholder="Ingrese su contraseña"
							type="password"
							id="password"
							v-model="password"
						></b-form-input>
						<div
							v-if="error.password"
							class="error"
						>{{ error.password }}</div>
					</div>

					<div class="row align-items-start form-group">
						<label
							for="repeat-password"
							class="row"
						>Repetir contraseña:</label>
						<b-form-input
							placeholder="Ingrese su contraseña"
							type="password"
							id="repeat-password"
							v-model="repeatPassword"
						></b-form-input>
						<div
							v-if="error.repeatPassword"
							class="error"
						>{{ error.repeatPassword }}</div>
					</div>

					<div class="row align-items-start form-group">
						<label
							for="name"
							class="row"
						>Nombres:</label>
						<b-form-input
							placeholder="Ingrese su nombre"
							id="name"
							v-model="name"
						></b-form-input>
						<div
							v-if="error.name"
							class="error"
						>{{ error.name }}</div>
					</div>

					<div class="row align-items-start form-group">
						<label
							for="last-name"
							class="row"
						>Apellidos:</label>
						<b-form-input
							placeholder="Ingrese su apellido"
							id="last-name"
							v-model="lastName"
						></b-form-input>
						<div
							v-if="error.lastName"
							class="error"
						>{{ error.lastName }}</div>
					</div>

					<div class="row align-items-start form-group">
						<label
							for="peso"
							class="row"
						>Peso:</label>
						<b-form-input
							placeholder="Ingrese su peso en kilogramos"
							id="peso"
							type="Number"
							v-model="peso"
						></b-form-input>
						<div
							v-if="error.peso"
							class="error"
						>{{ error.peso }}</div>
					</div>

					<div class="row align-items-start form-group">
						<label
							for="estatura"
							class="row"
						>Estatura:</label>
						<b-form-input
							placeholder="Ingrese su estatura en centimetros"
							id="estatura"
							type="Number"
							v-model="estatura"
						></b-form-input>
						<div
							v-if="error.estatura"
							class="error"
						>{{ error.estatura }}</div>
					</div>

					<div class="row align-items-start form-group">
						<label
							for="edad"
							class="row"
						>Edad:</label>
						<b-form-input
							placeholder="Ingrese su edad"
							id="edad"
							type="Number"
							v-model="edad"
						></b-form-input>
						<div
							v-if="error.edad"
							class="error"
						>{{ error.edad }}</div>
					</div>

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

					<input
						type="submit"
						value="Entrar"
						class="btn mt-3"
					>

				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				username: '',
				password: '',
				repeatPassword: '',
				email: '',
				name: '',
				lastName: '',
				peso: '',
				estatura: '',
				edad: '',
				genero: '',
				message: '',
				isValidData: false,
				generos: ['Masculino', 'Femenino'],
				error: {
					username: '',
					password: '',
					repeatPassword: '',
					email: '',
					name: '',
					lastName: '',
					peso: '',
					estatura: '',
					edad: '',
					genero: ''
				}
			}
		},
		methods: {
			async register() {
				const body = this.validateData()
				try {
					const { data } = axios.post('https://user-api-salud-app.herokuapp.com//api/users/create/', body)

				} catch (error) {

				}
			},
			validateData() {
				const data = {
					username: this.username,
					name: this.name,
					last_name: this.lastName,
					email: this.email,
					password: this.password,
					peso: this.peso,
					estatura: this.estatura,
					edad: this.edad,
					genero: this.genero === 'Masculino' ? 'M' : 'F'
				}
				for (const value in data) {
					this.isValidData = true
					if (!data[value]) {
						this.isValidData = false
					}
				}
				return data
			},
			closeModal() {
				if (!this.error) {
					this.$router.push({ name: 'Login' })
				} else {
					this.$bvModal.hide('modal')
				}
			},
		},
		watch: {
			username() {
				const regex = /[a-zA-Z0-9]{5,}/
				if (!regex.test(this.username) || this.username === "") {
					this.error.username = 'El nombre de usuario solo debe contener minusculas y numeros y no estar en blanco'
				} else {
					this.error.username = ''
				}
			},
			email() {
				const regex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/
				if (!regex.test(this.email) || this.email === '') {
					this.error.email = 'El correo no es valido'
				} else {
					this.error.email = ''
				}
			},
			password() {
				if (this.password.length < 8) {
					this.error.password = 'La contraseña debe tener minimo 8 caracteres'
				} else {
					this.error.password = ''
				}
			},
			repeatPassword() {
				if (this.password !== this.repeatPassword) {
					this.error.repeatPassword = 'Las contraseñas deben ser iguales'
				} else {
					this.error.repeatPassword = ''
				}
			},
			name() {
				const regex = /[a-zA-Z0-9]{5,}/
				if (!regex.test(this.name) || this.name === "") {
					this.error.name = 'El nombre solo puede contener letras y no debe estar en blanco'
				} else {
					this.error.name = ''
				}
			},
			lastName() {
				const regex = /[a-zA-Z0-9]{5,}/
				if (!regex.test(this.lastName) || this.lastName === "") {
					this.error.lastName = 'El apellido solo puede contener letras y no debe estar en blanco'
				} else {
					this.error.lastName = ''
				}
			},
		}
	}
</script>

<style scoped>
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
</style>