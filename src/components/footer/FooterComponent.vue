<template>
	<div class="footer">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-sm-12 col-md-3 offset-md-1">
					<div class="row mt-5 pb-2 title">
						<p>Pagina</p>
					</div>
					<div class="row pb-2 text">
						<p>Inicio</p>
					</div>
					<div class="row pb-2 text">
						<p>Acerca de nosotros</p>
					</div>
					<div class="row mb-5 text">
						<p>Contacto</p>
					</div>
				</div>
				<div class="col-sm-12 col-md-3 offset-md-1">
					<div class="row mt-5 pb-2 title">
						<p>Redes sociales</p>
					</div>
					<div class="row pb-2 text">
						<p>Facebook</p>
					</div>
					<div class="row pb-2 text">
						<p>Instagram</p>
					</div>
					<div class="row mb-5 text">
						<p>Twitter</p>
					</div>
				</div>
				<div class="col-sm-12 col-md-2 offset-md-1">
					<b-img
						:src="require('../../assets/logo_small.svg')"
						alt="App_Icon"
						fluid
						center
						width='150'
					></b-img>
				</div>
				<div class="col-md-1 mb-5"></div>
			</div>
		</div>

	</div>
</template>

<style scoped>
	.footer {
		background-color: #0c5190;
	}
	.title p {
		color: white;
		font-weight: bold;
	}
	.text p {
		color: white;
	}
</style>