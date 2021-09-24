class presupuestaTuObra{
    constructor(pNombre,pTrabajo,pCapital,pUbicacion) {
        this.pNombre = pNombre;
        this.pTrabajo = pTrabajo;
        this.pCapital = parseFloat(pCapital);
        this.pUbicacion = pUbicacion;
    }
    bienvenida(){
        console.log("Bienvenido " + this.pNombre + " tu trabajo es de " + this.pTrabajo +" y vivis en " + this.pUbicacion + ". Tu capital de ingreso es " + this.pCapital + ". Confirmas esta información?");
    }
}

const inversor1 = new perfilInversor ("Diego", "Monostributista", 50000, "CABA");
inversor1.bienvenida();