<template>
	<div>
		<h1>Indicadores</h1>
        <p>Acá podras encontrar algunos indicadores para que puedas comprar tus examenes</p>
        
        <div class="indicador">
            <h3>Triglicéridos</h3>
            <p>Cuando comes, las calorías, el azúcar y el alcohol extra que tu cuerpo no necesita de inmediato se convierten en triglicéridos y se almacenan en las células grasas. Cuando necesitas energía, las hormonas liberan los triglicéridos. <br> Si usualmente consumes alimentos con más carbohidratos de los que quemas, podrías tener un nivel alto de triglicéridos.</p>
            <table class="container">
                <thead>
                    <tr>
                        <td></td>
                        <td> <strong>Adultos</strong> </td>
                        <td> <strong>Personas de 10 a 19 años</strong> </td>
                        <td> <strong>Niños menores de 10 años</strong> </td>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> <strong>Normal </strong> </td>
                        <td>menos de 150 mg/dl</td>
                        <td>menos de 90 mg/dl</td>
                        <td>menos de 75 mg/dl</td>
                    </tr>
                    <tr>
                        <td> <strong>Límite alto </strong> </td>
                        <td>151 a 199 mg/dl</td>
                        <td>alto: 90 a 129 mg/dl</td>
                        <td>75 a 99 mg/dl</td>
                    </tr>
                    <tr>
                        <td> <strong>Alto</strong> </td>
                        <td>mayor de 200 mg/dl</td>
                        <td>mayor de 130 mg/dl</td>
                        <td>mayor de 100 mg/dl</td>
                    </tr>
                    <tr>
                        <td> <strong>Muy alto </strong> </td>
                        <td>mayor de 500 mg/dl</td>
                        <td>n/a</td>
                        <td>n/a</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="indicador">
            <h3>Colesterol</h3>
            <p>El colesterol es una sustancia cerosa parecida a la grasa que se encuentra en la sangre y en todas las células del cuerpo. El cuerpo necesita un poco de colesterol para que las células y los órganos se mantengan saludables.</p>
            <ul>
                <li>Normal: Menos de 200 mg/dL</li>
                <li>Limite alto: Entre 200 y 239 mg/dL</li>
                <li>Alto: 240 mg/dL o más</li>
            </ul>
        </div>
        <div class="indicador">
            <h3>Presión arterial</h3>
            <p>La presión arterial mide el alcance de la fuerza de la sangre en las paredes de tus vasos sanguíneos, a medida que tu corazón bombea. Esta se mide en milímetros de mercurio (mm Hg).</p>
            <table class="container">
                <thead>
                    <tr>
                        <td> <strong> Sistólica (valor más alto) </strong> </td>
                        <td> <strong> Diastólica (valor más bajo) </strong> </td>
                        <td> <strong> Categorías de la presión arterial </strong> </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>90 o menor	</td> 
                        <td>60 o menor	</td> 
                        <td>hipotensión</td> 
                    </tr>
                    <tr>
                        <td>91 a 119</td> 	
                        <td>61 a 79</td>
                        <td>normal</td>
                        
                    </tr>
                    <tr>
                        <td>91 a 119</td> 	
                        <td>61 a 79</td>  
                        <td>elevada</td>  	 
                    </tr>
                    <tr>
                        <td>entre 130 y 139</td> 	
                        <td>o entre 80 y 89</td>
                        <td>etapa 1 de hipertensión</td> 
                    </tr>
                    <tr>
                        <td>140 o mayor</td> 	
                        <td>o 90 o mayor</td> 
                        <td>etapa 2 de hipertensión</td> 
                    </tr>
                    <tr>
                        <td>mayor que 180</td> 	
                        <td>mayor que 120 mayor que 120 </td>  
                        <td>crisis hipertensiva</td> 
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="indicador">
            <h3>Glucosa</h3>
            <p>Los azúcares que se ingieren con los alimentos son transformados por el metabolismo en glucosa. Ésta se desplaza a través del torrente sanguíneo hasta alcanzar las células de diferentes tipos de tejido proporcionando la energía que necesitan para funcionar</p>
            <ul>
                <li>Normal: 70 y 100 mg/dl (En ayunas) </li>
                <li>Alto: 100 y 125 mg/dl  (En ayunas)</li>
            </ul>
        </div>
	</div>

</template>

<script>

export default {
    name: 'Indicadores'
}
</script>

<style scoped>
h1 {
    color: #0c5190;
    font-weight: bold;
}

.indicador {
    border-radius: 8px;
    padding: 20px;
    margin: 30px 0;
    background-color: #0c50901f;
}
</style>