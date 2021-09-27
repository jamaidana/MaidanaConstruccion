const precioMetro = 2100

class presupuestaTuObra{
    constructor(pNombre,pMetrosCuadrados,pCapital) {
        this.pNombre = pNombre;
        this.pMetrosCuadrados = parseFloat(pMetrosCuadrados);
        this.pCapital = parseFloat(pCapital);
        this.pPrecioMetro = 2400
        this.pPresupuestoObra = this.pPrecioMetro * this.pMetrosCuadrados
        this.pValorObra = this.pPresupuestoObra + this.pCapital
    }

bienvenida(){
        alert("Bienvenido " + this.pNombre + ". Para su terreno de " + this.pMetrosCuadrados + " metros cuadrados, y con un valor en dolares de " + this.pCapital + ". El presupuesto estimado de la obra sería de " + this.pPresupuestoObra + " dolares. El nuevo valor de tu propiedad terminaría siendo de " + this.pValorObra + " dolares. Ponete en contacto con nosotros para obtener un mayor detalle");
    }
}

const inversor1 = new presupuestaTuObra (prompt('Ingrese su Nombre'), prompt('¿De cuantos metros cuadrados quiere su propiedad?'), prompt("Ingrese el valor de su terreno en dolares"));
inversor1.bienvenida();