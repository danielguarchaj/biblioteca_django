//arreglo de objetos que guarda informacion de cada departamento con su nombre e id respectivos
var Departamentos = [
    {nombre:'Alta Verapaz', id: 1},
    {nombre:'Baja Verapaz', id: 2},
    {nombre:'Chimaltenango', id: 3},
    {nombre:'Chiquimula', id: 4},
    {nombre:'El Petén', id: 5},
    {nombre:'El Progreso', id: 6},
    {nombre:'El Quiche', id: 7},
    {nombre:'Escuintla', id: 8},
    {nombre:'Guatemala', id: 9},
    {nombre:'Huehuetenango', id: 10},
    {nombre:'Izabal', id: 11},
    {nombre:'Jalapa', id: 12},
    {nombre:'Jutiapa', id: 13},
    {nombre:'Quetzaltenango', id: 14},
    {nombre:'Retalhuleu', id: 15},
    {nombre:'Sacatepequez', id: 16},
    {nombre:'San Marcos', id: 17},
    {nombre:'Santa Rosa', id: 18},
    {nombre:'Sololá', id: 19},
    {nombre:'Suchitepéquez', id: 20},
    {nombre:'Totonicapán', id: 21},
    {nombre:'Zacapa', id: 22}
];

//arreglo de arreglos que guarda informacion de cada municipio con su nombre y el id del departamento al que pertenece
var Arreglo_Municipios = [
    ['Cobán', 1],
    ['Santa Cruz Verapaz', 1],
    ['San Cristobal Verapaz', 1],
    ['Tactic', 1],
    ['Tamahú', 1],
    ['San Miguel Tucurú', 1],
    ['Panzos', 1],
    ['Senahú', 1],
    ['San Pedro Carchá', 1],
    ['San Juan Chamelco', 1],
    ['Lanquín', 1],
    ['Santa María Cahabón', 1],
    ['Chisec', 1],
    ['Chahal', 1],
    ['Fray Bartolomé de las Casas', 1],
    ['Santa Catarina La Tina', 1],
    ['Salamá', 2],
    ['San Miguel Chicaj', 2],
    ['Rabinal', 2],
    ['Cubulco', 2],
    ['Granados', 2],
    ['Santa Cruz El Chol', 2],
    ['San Jerónimo', 2],
    ['Purulhá', 2],
    ['Chimaltenango', 3],
    ['San José Poaquil', 3],
    ['San Martín Jilotepeque', 3],
    ['San Juan Comalapa', 3],
    ['Santa Apolonia', 3],
    ['Tecpán Guatemala', 3],
    ['Patzún', 3],
    ['San Miguel Pochuta', 3],
    ['Patzicia', 3],
    ['Santa Cruz Balanyá', 3],
    ['Acatenango', 3],
    ['San Pedro Yepocapa', 3],
    ['San Andrés Itzapa', 3],
    ['Parramos', 3],
    ['Zaragoza', 3],
    ['El Tejar', 3],
    ['Chiquimula', 4],
    ['San José La Arada', 4],
    ['San Juan Hermita', 4],
    ['Jocotán', 4],
    ['Camotán', 4],
    ['Olopa', 4],
    ['Esquipulas', 4],
    ['Concepción Las Minas', 4],
    ['Quetzaltepeque', 4],
    ['San Jacinto', 4],
    ['Ipala', 4],
    ['Flores', 5],
    ['San José', 5],
    ['San Benito', 5],
    ['San Andrés', 5],
    ['La Libertad', 5],
    ['San Francisco', 5],
    ['Santa Ana', 5],
    ['Dolores', 5],
    ['San Luis', 5],
    ['Sayaxche', 5],
    ['Melchor de Mencos', 5],
    ['Poptún', 5],
    ['Guastatoya', 6],
    ['Morazán', 6],
    ['San Agustín Acasaguastlán', 6],
    ['San Cristóbal Acasaguastlán', 6],
    ['El Jícaro', 6],
    ['Sansare', 6],
    ['Sanarate', 6],
    ['San Antonio La Paz', 6],
    ['Santa Cruz del Quiche', 7],
    ['Chiche', 7],
    ['Chinique', 7],
    ['Zacualpa', 7],
    ['Chajul', 7],
    ['Santo Tomás Chichicastenango', 7],
    ['Patzité', 7],
    ['San Antonio Ilotenango', 7],
    ['San Pedro Jocopilas', 7],
    ['Cunén', 7],
    ['San Juan Cotzal', 7],
    ['Joyabaj', 7],
    ['Santa María Nebaj', 7],
    ['San Andrés Sajcabajá', 7],
    ['San Miguel Uspantán', 7],
    ['Sacapulas', 7],
    ['San Bartolomé Jocotenango', 7],
    ['Canilla', 7],
    ['Chicaman', 7],
    ['Playa Grande - Ixcán', 7],
    ['Pachalúm', 7],
    ['Escuintla', 8],
    ['La Democaracia', 8],
    ['Siquinalá', 8],
    ['Masagua', 8],
    ['Pueblo Nuevo Tiquisate', 8],
    ['La Gomera', 8],
    ['Guanagazapa', 8],
    ['Puerto de San José', 8],
    ['Itzapa', 8],
    ['Palín', 8],
    ['San VIcente Yepocapa', 8],
    ['Nueva Concepción', 8],
    ['Guatemala', 9],
    ['Santa Catarina Pinula', 9],
    ['San José Pinula', 9],
    ['San José del Golfo', 9],
    ['Palencia', 9],
    ['Chinautla', 9],
    ['San Pedro Ayampuc', 9],
    ['Mixco', 9],
    ['San Pedro Sacatepéquez', 9],
    ['San Juan Sacatepéquez', 9],
    ['San Raymundo', 9],
    ['Cuarrancho', 9],
    ['Fraijanes', 9],
    ['Amatitatlán', 9],
    ['Villa Nueva', 9],
    ['Villa Canales', 9],
    ['San Miguel Petapa', 9],
    ['Huehuetenango', 10],
    ['Chiantla', 10],
    ['Malacatancito', 10],
    ['Cuilco', 10],
    ['Nentón', 10],
    ['San Pedro Necta', 10],
    ['Jacaltenango', 10],
    ['San Pedro Soloma', 10],
    ['San Idelfonso Ixtahuacán', 10],
    ['Santa Bárbara', 10],
    ['La Libertad', 10],
    ['La Democracia', 10],
    ['San Miguel Acatán', 10],
    ['San Rafael La Independencia', 10],
    ['Todos Santos Cuchumatán', 10],
    ['San Juan Atitán', 10],
    ['Santa Eulalia', 10],
    ['San Mateo Ixtatán', 10],
    ['Colotenango', 10],
    ['San Sebastián Huehuetenango', 10],
    ['Tectitán', 10],
    ['Concepción Huista', 10],
    ['San Sebastián Coatán', 10],
    ['Santa Cruz Barillas', 10],
    ['Aguacatán', 10],
    ['San Rafael Petzal', 10],
    ['San Gaspar Ixchil', 10],
    ['Santiago Chimaltenango', 10],
    ['Santa Ana Huista', 10],
    ['Puerto Barrios', 11],
    ['Livingston', 11],
    ['El Estor', 11],
    ['Morales', 11],
    ['Los Amates', 11],
    ['Jalapa', 12],
    ['San Pedro Pinula', 12],
    ['San Luis Jilotepeque', 12],
    ['San Manuel Chaparrón', 12],
    ['San Carlos Alzatate', 12],
    ['Monjas', 12],
    ['Mataquescuintla', 12],
    ['Jutiapa', 13],
    ['El Progreso', 13],
    ['Santa Catarina Mita', 13],
    ['Agua Blanca', 13],
    ['Asunción Mita', 13],
    ['Yupiltepeque', 13],
    ['Atescatempa', 13],
    ['Jerez', 13],
    ['El Adelanto', 13],
    ['Zapotitlán', 13],
    ['Comapa', 13],
    ['Jalpatagua', 13],
    ['Conguaco', 13],
    ['Moyuta', 13],
    ['Pasaco', 13],
    ['San José Acatempa', 13],
    ['Quezada', 13],
    ['Quetzaltenango', 14],
    ['Salcajá', 14],
    ['Olintepeque', 14],
    ['San Carlos Sija', 14],
    ['Sibilia', 14],
    ['Cabrican', 14],
    ['Cajola', 14],
    ['San Miguel Siguilca', 14],
    ['San Juan Ostuncalco', 14],
    ['San Mateo', 14],
    ['Concepción Chiquirichapa', 14],
    ['San Martín Sacatepequez', 14],
    ['Almolonga', 14],
    ['Cantel', 14],
    ['Huitan', 14],
    ['Zunil', 14],
    ['Colomba', 14],
    ['San Francisco La Union', 14],
    ['El Palmar', 14],
    ['Coatepeque', 14],
    ['Génova', 14],
    ['Flores Costa Cuca', 14],
    ['La Esperanza', 14],
    ['Palestina de los Altos', 14],
    ['Retalhuleu', 15],
    ['San Sebastián', 15],
    ['Santa Cruz Muluá', 15],
    ['San Martín Zapotitlán', 15],
    ['San Feliper Retalhuleu', 15],
    ['San Andrés Villa Seca', 15],
    ['Champerico', 15],
    ['Nuevo San Carlos', 15],
    ['El Asintal', 15],
    ['Antigua Guatemala', 16],
    ['Jocotenango', 16],
    ['Pastores', 16],
    ['Sumpango', 16],
    ['Santo Domingo Xenacoj', 16],
    ['Santiago Sacatepéquez', 16],
    ['San Bartolomé Milpas Altas', 16],
    ['San Lucas Sacatepéquez', 16],
    ['Santa Lucía Milpas Altas', 16],
    ['Magdalena Milpas Altas', 16],
    ['Santa María de Jesús', 16],
    ['Ciudad Vieja', 16],
    ['San Miguel Dueñas', 16],
    ['San Juan Alotenango', 16],
    ['San Antonio Aguas Calientes', 16],
    ['Santa Catarina Barahona', 16],
    ['San Marcos', 17],
    ['San Pedro Sacatepéquez', 17],
    ['Comitancillo', 17],
    ['San Antonio Sacatepéquez', 17],
    ['San Miguel Ixtahuacán', 17],
    ['Concepción Tutuapa', 17],
    ['Tacaná', 17],
    ['Sibinal', 17],
    ['Tajumulco', 17],
    ['Tejutla', 17],
    ['San Rafael Pié de la Cuesta', 17],
    ['Nuevo Progreso', 17],
    ['El Tumbador', 17],
    ['San José El Rodeo', 17],
    ['Malacatán', 17],
    ['Catarina', 17],
    ['Ayutla', 17],
    ['Ocos', 17],
    ['San Pablo', 17],
    ['El Quetzal', 17],
    ['La Reforma', 17],
    ['Pajapita', 17],
    ['Ixchiguan', 17],
    ['San José Ojetenán', 17],
    ['San Cristóbal Chucho', 17],
    ['Sipacapa', 17],
    ['Esquipulas Palo Gordo', 17],
    ['Río Blanco', 17],
    ['San Lorenzo', 17],
    ['Cuilapa', 18],
    ['Barberena', 18],
    ['Santa Rosa de Lima', 18],
    ['Casillas', 18],
    ['San Rafael Las Flores', 18],
    ['Oratorio', 18],
    ['San Juan Tecuaco', 18],
    ['Chiquimulilla', 18],
    ['Taxisco', 18],
    ['Santa María Ixhuatán', 18],
    ['Guazacapán', 18],
    ['Santa Cruz Naranjo', 18],
    ['Pablo Nuevo Viñas', 18],
    ['Nueva Santa Rosa', 18],
    ['Sololá', 19],
    ['San José Chacayá', 19],
    ['Santa María Visitación', 19],
    ['Santa Lucía Utatlán', 19],
    ['Nahualá', 19],
    ['Santa Catarina Ixtahuacán', 19],
    ['Santa Clara La Laguna', 19],
    ['Concepción', 19],
    ['San Andrés Semetabaj', 19],
    ['Panajachel', 19],
    ['Santa Catarina Palopó', 19],
    ['San Antonoi Palopó', 19],
    ['San Lucas Tolimán', 19],
    ['Santa Cruz La Laguna', 19],
    ['San Pablo La Laguna', 19],
    ['San Marcos La Laguna', 19],
    ['San Juan La Laguna', 19],
    ['San Pedro La Laguna', 19],
    ['Santiago Atitlán', 19],
    ['Mazatenango', 20],
    ['Cuyotenango', 20],
    ['San Francisco Zapotitlán', 20],
    ['San Bernardino', 20],
    ['San José El Ídolo', 20],
    ['Santo Domingo Suchitepéquez', 20],
    ['San Lorenzo', 20],
    ['Samayac', 20],
    ['San Pablo Jocopilas', 20],
    ['San Antonio Suchitepéquez', 20],
    ['San Miguel Panán', 20],
    ['San Gabriel', 20],
    ['Chicacao', 20],
    ['Patulul', 20],
    ['Santa Bárbara', 20],
    ['San Juan Bautista', 20],
    ['Santo Tomás La Unión', 20],
    ['Zunilito', 20],
    ['Pueblo Nuevo Suchitepéquez', 20],
    ['Río Bravo', 20],
    ['Totonicapán', 21],
    ['San Cristóbal Totonicapán', 21],
    ['San Francisco El Alto', 21],
    ['San Andrés Xecul', 21],
    ['Momostenango', 21],
    ['Santa María Chiquimula', 21],
    ['Santa Lucía La Reforma', 21],
    ['San Bartolo Aguas Calientes', 21],
    ['Zacapa', 22],
    ['Estanzuela', 22],
    ['Río Hondo', 22],
    ['Gualán', 22],
    ['Teculután', 22],
    ['Usamatlán', 22],
    ['Cabañas', 22],
    ['San Diego', 22],
    ['La Unión', 22],
    ['Huite', 22],
];

var Municipios = [];

$.each(Arreglo_Municipios, function (index, valor) {
    var municipio = {
        id: index+1,
        nombre: valor[0],
        departamento_id: valor[1]
    }
    Municipios.push(municipio);
});
