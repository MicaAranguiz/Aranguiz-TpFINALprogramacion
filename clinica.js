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
        return 'Nombre: ' + this.nombre + ' - Apellido: ' + this.apellido + ' - Pacientes: ' + this.paciente + ' - Matricula: ' + this.matricula + ' - Especialidad: ' + this.licenciatura;
    }
}

class Doctor extends Profesional {
    constructor(nombre, apellido, paciente, matricula, especialidad) {
        super(nombre, apellido, paciente, matricula);
        this.especialidad = especialidad;
    }
    datosdeldoctor() {
        return 'Nombre: ' + this.nombre + ' - Apellido: ' + this.apellido + ' - Pacientes: ' + this.paciente + ' - Matricula: ' + this.matricula + ' - Especialidad: ' + this.especialidad;
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
        return 'Nombre: ' + this.nombrepac + '- Apellido: ' + this.apellidopac + ' - DNI: ' + this.dni + ' - Fecha de Nacimiento: ' + this.fechanacimiento + ' - Turno: ' + this.turno + ' - Obra Social: ' + this.obrasocial + ' - Doctor: ' + this.Doctor;
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
            pacientes_mariana.push(paciente.apellido,paciente.turno);
            break;
        case 'Ariel':
            pacientes_ariel.push(paciente.apellido);
            break;
        case 'Bianca':
            pacientes_bianca.push(paciente.apellido);
            break;
        case 'Micaela':
            pacientes_micaela.push(paciente.apellido);
            break;
    }
    pacientes.push(paciente)
    console.log(doctores)
    
}

function mostrarlosPacientes() {
    let ul = document.getElementById("ul")
    if (ul.value !== "") {
        ul.innerHTML = ""
        for (const item of pacientes) {
            let li = document.createElement("li")
            li.textContent = item.datosdelpaciente()
            ul.appendChild(li)
        }
    } 
}

let doc1 = new Doctor('Mariana', 'Aranguiz', pacientes_mariana, 'Nacional', 'Pediatria');
let doc2 = new Doctor('Ariel', 'Aranguiz', pacientes_ariel, 'Nacional', 'Cardiologo');
let enf1 = new Enfermero('Bianca', 'Aranguiz', pacientes_bianca, 'Provincial', 'Enfermeria');
let enf2 = new Enfermero('Micaela', 'Aranguiz', pacientes_micaela, 'Nacional', 'Enfermeria');
var doctores = [doc1, doc2,enf1, enf2];


function mostrarlosDoctores() {
    let ul = document.getElementById("uld")
    if (ul.value !== "") {
        ul.innerHTML = ""
        for (const item of doctores) {
            let li = document.createElement("li")
            li.textContent = item.datosdeldoctor()
            ul.appendChild(li)
        }
    }
}

console.log(pacientes)


class Clinica {
    constructor(nombre, dueño, respjur, doctores, enfermeros) {
        this.nombre = nombre;
        this.dueño = dueño;
        this.respjur = respjur,
        this.doctores = doctores;
        this.enfermeros = enfermeros;
    }
}

