<template>
	<div>
		<h1>Ingresa los siguientes datos</h1>
        <p>
            Llenando el siguiente formulario accederas a una inteligencia artificial la cual predicira si pudieras tener algun tipo de problema con tu corazon, este modelo no reemplaza la revision de un medico experto en el area.
            <br>
            Nota: Si presentas algun dato vacio lo reemplazaremos con la media de los datos
        </p>
        <div class="form">
            <div>
                <label for="">Edad</label>
                <input type="number" v-model="age">
            </div>
            <div>
                <label for="">Sexo 1-Hombre 2-Mujer</label>
                <input type="number" min="1" max="2" v-model="sex">
            </div>
            <div>
                <label for="">Dolor en el pecho ​( 1 - Angina típica, 2 - Angina atípica, 3 - Dolor no-anginoso, 4 - Dolor asintomático) </label>
                <input type="number" v-model="cp">
            </div>
            <div>
                <label for="">Presión sanguínea en reposo </label>
                <input type="text" v-model="trestbps">
            </div>
            <div>
                <label for="">Medicion de colesterol</label>
                <input type="text" v-model="chol">
            </div>
            <div>
                <label for="">Azucar en la sangre en ayunas</label>
                <input type="text" v-model="fbs">
            </div>
            <div>
                <label for="">Resultados electrocardiográficos en reposo </label>
                <input type="text" v-model="restcg">
            </div>
            <div>
                <label for="">Frecuencia cardiaca máxima alcanzada </label>
                <input type="text" v-model="thalach">
            </div>
            <div>
                <label for="">¿Se presentó angina de pecho después de hacer ejercicio? </label>
                <input type="text" v-model="exang">
            </div>
            <div>
                <label for="">Depresión ST inducida por ejercicio respecto al reposo (Más información aquí. ​https://litfl.com/st-segment-ecg-library/​) </label>
                <input type="text" v-model="oldpeak">
            </div>
            <div>
                <label for="">Pendiente del pico del segmento ST </label>
                <input type="text" v-model="slope">
            </div>
            <div>
                <label for="">Número de vasos sanguíneos mayores coloreados por la fluoroscopia</label>
                <input type="text" v-model="ca">
            </div>
            <div>
                <label for="">Talasemia: 1 - Normal, 2 - Defecto fijo, 3 - Defecto reversible </label>
                <input type="text" v-model="thal">
            </div>

            <button @click="calc">Calcular</button>

        </div>

        <div v-if="prediction != -1">
            <h3>Tus resultados fueron</h3>
            <p> {{ prediction }} <span v-if="prediction == 1">Te sugerimos estar pendiente de tu corazón podrias tener algun problema</span> <span v-else-if="prediction == 0">Al parecer no pareces tener problemas en el corazon sin embargo sigue controlando tus indices</span> </p>
        </div>

	</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Heart',
    data(){
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
    methods : {
        async calc(){
            try {
                let result = await axios.post('http://flask-ml-heart.herokuapp.com/predict', {
                    age: this.age || 54,
                    sex: this.sex || 1,
                    cp:  this.cp || 1,
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
	h1 {
		color: #0c5190;
		font-weight: bold;
	}
</style>