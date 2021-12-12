<template>
	<div class="button-container">
		<router-link :to="{ name: `${page}`}">
			<div>
				<b-img
					:src="require(`../../../assets/${svg}.svg`)"
					alt="App_Icon"
					fluid
					center
					width='80'
				></b-img>
			</div>
			<div class="mt-3">
				<h5>{{title}}</h5>
				<div>{{description}}</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			description: String,
			svg: String,
			page: String
		}

	}
</script>

<style scoped>
	h5 {
		font-weight: bold;
		color: #0c5190;
	}

	.button-container {
		padding: 10px 10px;
		margin-top: 30px;
		margin-bottom: 30px;
		margin-left: 20px;
		margin-right: 20px;
		border-radius: 20px;
		cursor: pointer;
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer */
		-khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
		-webkit-user-select: none; /* Chrome, Safari, and Opera */
		-webkit-touch-callout: none; /* Disable Android and iOS callouts*/
	}

	.button-container a {
		text-decoration: none;
		color: #0c5190;
	}

	.button-container:hover {
		-webkit-box-shadow: 0px 0px 21px -3px rgba(0, 0, 0, 0.62);
		-moz-box-shadow: 0px 0px 21px -3px rgba(0, 0, 0, 0.62);
		box-shadow: 0px 0px 21px -3px rgba(0, 0, 0, 0.62);
	}
</style>