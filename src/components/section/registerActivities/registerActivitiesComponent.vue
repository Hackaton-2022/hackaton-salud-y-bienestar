<template>
	<div>
        <h1>Registro a actividades saludables</h1>
        <p>En esta seccion podrás encontrar algunas actividades saludables en las cuales podrás inscribirte para tener un buen estado de salud</p>
        <div class="actities container">
            <div class="activity">
                <p> <strong>Nombre:</strong> Paseo en bicicleta</p>
                <p> <strong>Fecha:</strong>  9:00am 30-12-2021</p>
                <p> <strong>Lugar:</strong> Bogotá</p>
                <button>Registrate</button>
            </div>
            <div class="activity">
                <p> <strong>Nombre:</strong> Paseo en bicicleta</p>
                <p> <strong>Fecha:</strong>  9:00am 30-12-2021</p>
                <p> <strong>Lugar:</strong> Bogotá</p>
                <button>Registrate</button>
            </div>
            <div class="activity">
                <p> <strong>Nombre:</strong> Paseo en bicicleta</p>
                <p> <strong>Fecha:</strong>  9:00am 30-12-2021</p>
                <p> <strong>Lugar:</strong> Bogotá</p>
                <button>Registrate</button>
            </div>
            <div class="activity">
                <p> <strong>Nombre:</strong> Paseo en bicicleta</p>
                <p> <strong>Fecha:</strong>  9:00am 30-12-2021</p>
                <p> <strong>Lugar:</strong> Bogotá</p>
                <button>Registrate</button>
            </div>
            <div class="activity">
                <p> <strong>Nombre:</strong> Paseo en bicicleta</p>
                <p> <strong>Fecha:</strong>  9:00am 30-12-2021</p>
                <p> <strong>Lugar:</strong> Bogotá</p>
                <button>Registrate</button>
            </div>
        </div>
        
	</div>

</template>

<script>

export default {
    name: 'RegisterActivitiesComponent'
}

</script>

<style scoped>
h1 {
    color: #0c5190;
    font-weight: bold;
    margin-bottom: 40px;
}

.activities {
    margin-bottom: 20px;
}

.activity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
}

.activity p{
    margin: 0;   
}

@media (max-width: 550px) {
    .activity {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0;
    }
}

</style>