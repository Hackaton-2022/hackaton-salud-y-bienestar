<template>
	<div>
		<h1>Alimentos</h1>
        <p>Acá podras listados una serie de alimentos para que compares sus nutrientes</p>
        
        <table class="container">
            <thead>
                <tr>
                    <td class="table-back" > <strong>Nutriente</strong> </td>
                    <td class="table-back" > <strong>Función</strong> </td>
                    <td class="table-back" > <strong>Fuente</strong> </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="table-back" > <strong>Energía</strong> </td>
                    <td>Aunque la energía (calorías) no es propiamente un nutriente, sí es esencial para mantener todas las funciones de nuestro organismo.</td>
                    <td>Excepto el agua y alguna bebida edulcorada, todos los alimentos aportan calorías.</td>
                </tr>
                <tr>
                    <td class="table-back"> <strong>Grasas</strong> </td>
                    <td>Las grasas son la segunda fuente de energía para nuestro organismo y nos permite absorber ciertas vitaminas (vitaminas liposolubles).</td>
                    <td>Aceites, frutos secos, aguacate, mantequilla, grasa animal (panceta, tocino, manteca).</td>
                </tr>
                <tr>
                    <td class="table-back"> <strong>Proteínas</strong> </td>
                    <td>Las proteínas tienen una función estructural. Son las que nos permiten fabricar sustancias vitales en los procesos metabólicos, permiten generar y reparar células, tejidos y órganos.</td>
                    <td>Lácteos (leche, yogur, quesos y derivados), carnes (blancas y rojas), pescado, huevo, frutos secos, legumbres, soja y derivados de la soja (tofu, seitán…).</td>
                </tr>
                <tr>
                    <td class="table-back"> <strong>Hidratos de carbono</strong> </td>
                    <td>Los hidratos de carbono constituyen la principal fuente de energía del organismo. Además, durante el proceso de digestión y absorción se transforman en glucosa, que es el azúcar que encontramos en la sangre.</td>
                    <td>Cereales (arroz, maíz, trigo, avena, quinoa, centeno…), lácteos (excepto quesos), frutas, azúcar, miel, legumbres (lentejas, alubias, garbanzos…), tubérculos (patatas, boniato, yuca). En menor medida: hortalizas y frutos secos. </td>
                </tr>
                <tr>
                    <td class="table-back"> <strong>Fibra</strong> </td>
                    <td>La fibra es un tipo de hidrato de carbono que no es digerido. Aunque no es un nutriente, desempeña un papel fisiológico fundamental en la salud.</td>
                    <td>Legumbres, hortalizas y verduras, frutas, cereales integrales, frutos secos.</td>
                </tr>
                <tr>
                    <td class="table-back"> <strong>Vitaminas y minerales</strong> </td>
                    <td>Son los llamados micronutrientes, y son esenciales para la regulación de los procesos metabólicos que hacen posible el funcionamiento de nuestro organismo.</td>
                    <td>Están presentes en todos los alimentos, incluida el agua.</td>
                </tr>
                <tr>
                    <td class="table-back"> <strong>Agua</strong> </td>
                    <td>El agua es el principal componente de nuestro cuerpo. Es el medio donde se llevan a cabo todos los procesos metabólicos. </td>
                    <td>Agua, bebidas (zumos, refrescos), leche, caldos, cremas y purés, verduras y hortalizas, frutas.</td>
                </tr>
            </tbody>
        </table>
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

table {
    margin-bottom: 20px;
}

table tr td {
    padding: 10px;
}

.table-back {
    background: #0c50901f;
}
</style>