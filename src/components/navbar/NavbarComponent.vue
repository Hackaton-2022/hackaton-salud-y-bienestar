  <template>
	<div class="row navbar">
		<div class="col-sm-12 col-md-8 ">
			<div class="row">
				<div class="col-sm-12 col-md-3 col-lg-3 mt-3  navbar-title">
					<span>
						<router-link :to="{ name: 'Home'}">
							<b-img
								:src="require('../../assets/logo_small.svg')"
								alt="App_Icon"
								fluid
								center
								width='100'
							></b-img>
						</router-link>
					</span>
				</div>
				<div class="col-sm-12 col-md-3 col-lg-3 mt-3 navbar-route">
					<span>
						<router-link :to="{ name: 'Home'}">Inicio</router-link>
					</span>
				</div>
				<div class="col-sm-12 col-md-3 col-lg-3 mt-3 navbar-route">
					<span>
						<router-link :to="{ name: 'About'}">Acerca de Nosotros</router-link>
					</span>
				</div>
				<div class="col-sm-12 col-md-3 col-lg-3 mt-3 navbar-route">
					<span>
						<router-link :to="{ name: 'Home'}">Contacto</router-link>
					</span>
				</div>
			</div>
		</div>

		<div
			class="col-sm-12 col-md-4 mt-3"
			v-if="isLoged"
		>
			<div class="row">
				<div
					class="col-sm-12 col-md-6 col-lg-7 navbar-name"
					v-on:click="toProfile"
				>
					<b-icon-person-circle
						scale="2"
						style="margin-right: 20px"
					></b-icon-person-circle>
					<p>
						{{ name }}
					</p>
				</div>
				<div class="col-sm-12 col-md-5 col-lg-4 offset-md-1 offset-lg-1 navbar-button mt-3 mb-3">
					<div v-on:click="setLogout">
						<router-link :to="{ name: 'Home'}">
							Cerrar sesion
						</router-link>

					</div>
				</div>
			</div>
		</div>
		<div
			class="col-sm-12 col-md-4"
			v-else
		>
			<div class="row">
				<div class="col-sm-12 col-md-5 col-lg-4 offset-md-1 offset-lg-2 navbar-button mt-3">
					<router-link :to="{ name: 'Login'}">Iniciar Sesion</router-link>
				</div>
				<div class="col-sm-12 col-md-5 col-lg-4 offset-md-1 offset-lg-2 navbar-button mt-3">
					<router-link :to="{ name: 'Register'}">Registro</router-link>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.borde {
		border: 1px solid black;
	}
	.navbar {
		margin: 15px 0;
	}
	.navbar-title {
		font-size: 30px;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.navbar-title span a {
		text-decoration: none;
		color: black;
	}
	.navbar-route {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.navbar-route span {
		cursor: pointer;
	}
	.navbar-route span a {
		text-decoration: none;
		color: black;
		font-weight: bold;
	}
	.navbar-route span a:hover {
		text-decoration: none;
		color: #006095;
	}
	.navbar-button {
		font-weight: bold;
		color: white;
		background-color: #006095;
		border-radius: 5px;
		padding: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer */
		-khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
		-webkit-user-select: none; /* Chrome, Safari, and Opera */
		-webkit-touch-callout: none; /* Disable Android and iOS callouts*/
	}
	.navbar-button:hover {
		background-color: #007c9c;
	}
	.navbar-button a {
		text-decoration: none;
		color: white;
	}
	.navbar-name {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.navbar-name p {
		font-size: 20px;
		margin-top: 15px;
	}
	.navbar-name:hover {
		color: #006095;
		cursor: pointer;
	}
</style>

