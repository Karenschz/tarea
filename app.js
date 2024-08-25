const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        // Estado inicial con frases
        const frases = ref([
            { frase: "Los programas deben escribirse para que las personas los lean, y solo incidentalmente para que las máquinas los ejecuten.", autor: 'Harold Abelson' },
            { frase: "Cualquier tonto puede escribir un código que una computadora pueda entender. Los buenos programadores escriben códigos que los humanos puedan entender.", autor: 'Martin Fowler' },
            { frase: "La única manera de aprender un nuevo lenguaje de programación es escribiendo programas en él.", autor: 'Dennis Ritchie' },
            { frase: "La simplicidad es el alma de la eficiencia.", autor: 'Agustin Freeman' },
            { frase: "Primero, resuelve el problema. Luego escribe el código.", autor: 'John Johnson' }
        ]);

        // Función para eliminar una frase
        const eliminarFrase = (index) => {
            if (confirm('¿Estás seguro de que quieres eliminar esta frase?')) {
                frases.value.splice(index, 1);
            }
        };

        // Función para editar una frase
        const editarFrase = (index) => {
            const nuevaFrase = prompt('Edita la frase:', frases.value[index].frase);
            const nuevoAutor = prompt('Edita el autor:', frases.value[index].autor);
            if (nuevaFrase && nuevoAutor) {
                frases.value[index].frase = nuevaFrase;
                frases.value[index].autor = nuevoAutor;
            }
        };

        return {
            frases,
            eliminarFrase,
            editarFrase
        };
    }
});

app.mount('#myapp');