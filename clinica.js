class Profesional {
    constructor(nombre, apellido, paciente, matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
        this.paciente = paciente;
    }
}
class Enfermero extends Profesional {
    constructor(nombre, apellido, paciente, matricula, licenciatura) {
        super(nombre, apellido, paciente, matricula);
        this.licenciatura = licenciatura;
    }
    datosdeldoctor() {
        return 'Nombre: ' + this.nombre + 
        ' - Apellido: ' + this.apellido + 
        ' - Matricula: ' + this.matricula + 
        ' - Especialidad: ' + this.licenciatura +
        ' - Pacientes que tiene: ' + this.paciente;
    }
}
class Doctor extends Profesional {
    constructor(nombre, apellido, paciente, matricula, especialidad) {
        super(nombre, apellido, paciente, matricula);
        this.especialidad = especialidad;
    }
    datosdeldoctor() {
        return 'Nombre: ' + this.nombre + 
        ' - Apellido: ' + this.apellido + 
        ' - Matricula: ' + this.matricula + 
        ' - Especialidad: ' + this.especialidad +
        ' - Pacientes que tiene: ' + this.paciente;
    }
}
class Paciente {
    constructor(nombrepac, apellidopac, dni, fechanacimiento, turno, obrasocial, Doctor) {
        this.nombrepac = nombrepac;
        this.apellidopac = apellidopac;
        this.dni = dni;
        this.fechanacimiento = fechanacimiento;
        this.turno = turno;
        this.obrasocial = obrasocial;
        this.Doctor = Doctor;
    }
    datosdelpaciente() {
        return 'Nombre: ' + this.nombrepac + 
        '- Apellido: ' + this.apellidopac + 
        ' - DNI: ' + this.dni + 
        ' - Fecha de Nacimiento: ' + this.fechanacimiento + 
        ' - Obra Social: ' + this.obrasocial +
        ' - Doctor que lo atiende: ' + this.Doctor +
        ' - Turno: ' + this.turno;
    }
}

var pacientes = []
var pacientes_mariana = []
var pacientes_ariel = []
var pacientes_bianca = []
var pacientes_micaela = []

function ingresarPaciente() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let fechanacimiento = document.getElementById("fechanacimiento").value
    let dni = document.getElementById("dni").value
    let turno = document.getElementById("turno").value
    let obrasocial = document.getElementById("obrasocial").value
    let Doctor = document.getElementById("doctor").value
    let paciente = new Paciente(nombre, apellido, dni, fechanacimiento, turno, obrasocial, Doctor) 
    switch (Doctor) {
        case 'Mariana':
            pacientes_mariana.push(paciente.apellidopac);
            break;
        case 'Ariel':
            pacientes_ariel.push(paciente.apellidopac);
            break;
        case 'Bianca':
            pacientes_bianca.push(paciente.apellidopac);
            break;
        case 'Micaela':
            pacientes_micaela.push(paciente.apellidopac);
            break;
    }
    pacientes.push(paciente)
}
function mostrarlosPacientes() {
    let ul = document.getElementById("ulpac")
    if (ul.value !== "") {
        ul.innerHTML = ""
        for (const item of pacientes) {
            let li = document.createElement("li")
            li.textContent = item.datosdelpaciente()
            ul.appendChild(li)
        }
    } 
}

let doc1 = new Doctor('Mariana', 'Aranguiz', pacientes_mariana, 'Nacional', 'Ginecología');
let doc2 = new Doctor('Ariel', 'Aranguiz', pacientes_ariel, 'Nacional', 'Traumatólogo');
let enf1 = new Enfermero('Bianca', 'Aranguiz', pacientes_bianca, 'Nacional', 'Enfermeria');
let enf2 = new Enfermero('Micaela', 'Aranguiz', pacientes_micaela, 'Nacional', 'Enfermeria');
var doctores = [doc1, doc2,enf1, enf2];

function mostrarlosDoctores() {
    let ul = document.getElementById("uldoc")
    if (ul.value !== "") {
        ul.innerHTML = ""
        for (const item of doctores) {
            let li = document.createElement("li")
            li.textContent = item.datosdeldoctor()
            ul.appendChild(li)
        }
    }
}
class Clinica {
    constructor(nombre, dueño, respjur, doctores, enfermeros) {
        this.nombre = nombre;
        this.dueño = dueño;
        this.respjur = respjur,
        this.doctores = doctores;
        this.enfermeros = enfermeros;
    }
}

