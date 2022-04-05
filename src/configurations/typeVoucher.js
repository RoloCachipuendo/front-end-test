export const estadoVacuna=[
    {
        CODIGO: "01",
        NOMBRE: "Vacunado",
        ESTADO:"S"
    },
    {
        CODIGO: "02",
        NOMBRE: "No Vacunado",
        ESTADO:"N"
    },
]

export const typeVacuna = [

    {
        CODIGO: "01",
        NOMBRE: "Sputnik"
    },
    {
        CODIGO: "02",
        NOMBRE: "AstraZeneca"
    },
    {
        CODIGO: "03",
        NOMBRE: "Pfizer"
    },
    {
        CODIGO: "04",
        NOMBRE: "honson&Jhonson"
    },
    {
        CODIGO: "05",
        NOMBRE: "Sinovac"
    },
];
export const typeInvoice = [
    {
        CODIGO: "01",
        VERSION: "1.1.0",
        NOMBRE: "Factura"
    },
    {
        CODIGO: "03",
        VERSION: "1.1.0",
        NOMBRE: "Liquidación de compra"
    },
    {
        CODIGO: "12",
        VERSION: "1.1.0",
        NOMBRE: "Documentos emitidos por instituciones financieras"
    },
    {
        CODIGO: "02",
        VERSION: "1.1.0",
        NOMBRE: "Nota o boleta de venta"
    },
];

export const typeVouchers = [

    {
        CODIGO: "01",
        VERSION: "1.1.0",
        NOMBRE: "Factura"
    },
    {
        CODIGO: "03",
        VERSION: "1.1.0",
        NOMBRE: "Liquidación de compra"
    },
    {
        CODIGO: "04",
        VERSION: "1.1.0",
        NOMBRE: "Nota de crédito"
    },
    {
        CODIGO: "05",
        VERSION: "1.0.0",
        NOMBRE: "Nota de débito"
    },
    {
        CODIGO: "06",
        VERSION: "1.1.0",
        NOMBRE: "Guia de remisión"
    },
    {
        CODIGO: "07",
        VERSION: "1.0.0",
        NOMBRE: "Comprobante de retención"
    }
];

//export default class vouchers { };
// valores para el iva
export const valorIva = [
    {
        CODIGO: '0',
        VALOR: 0,
        NOMBRE: 'IVA 0%'
    },
    {
        CODIGO: '2',
        VALOR: 12,
        NOMBRE: 'IVA 12%'
    },
    {
        CODIGO: '3',
        VALOR: 14,
        NOMBRE: 'IVA 14%'
    },
    {
        CODIGO: '6',
        VALOR: 0,
        NOMBRE: 'No objeto de impuesto'
    }
]

export const getValorIVA = codigo => {
    return valorIva.find(item => item.CODIGO === codigo);
}


//valores para la retención
export const valorRetencion = [
    {
        CODIGO: '0',
        VALOR: 0,
        NOMBRE: 'IVA 0%'
    },
    {
        CODIGO: '2',
        VALOR: 12,
        NOMBRE: 'IVA 12%'
    },
    {
        CODIGO: '3',
        VALOR: 14,
        NOMBRE: 'IVA 14%'
    },
    {
        CODIGO: '6',
        VALOR: 0,
        NOMBRE: 'No objeto de impuesto'
    }
]

//valores par el ICE

export const valorICE = [

    {
        CODIGO: '3023',
        VALOR: 150,
        NOMBRE: 'ICE - Productos del tabaco sucedáneos del tabaco'
    },
    {
        CODIGO: '3051',
        VALOR: 10,
        NOMBRE: 'ICE - Bebidas gaseosas'
    },
    {
        CODIGO: '3610',
        VALOR: 20,
        NOMBRE: 'ICE - Perfumes y aguas de tocador'
    },
    {
        CODIGO: '3620',
        VALOR: 35,
        NOMBRE: 'ICE - Videojuegos'
    },
    {
        CODIGO: '3630',
        VALOR: 300,
        NOMBRE: 'ICE - Armas de fuego, armas deportivas y municiones excepto aquellas adquiridas por la fuerza pública'
    },
    {
        CODIGO: '3640',
        VALOR: 100,
        NOMBRE: 'ICE - Focos incandescentes excepto aquellos utilizados como insumos automotrices'
    },
    {
        CODIGO: '3073',
        VALOR: 5,
        NOMBRE: 'ICE - Vehículos motorizados cuyo precio de venta al público sea de hasta USD 20.000'
    },
    {
        CODIGO: '3072',
        VALOR: 5,
        NOMBRE: 'ICE - Camionetas, furgonetas, camiones, y vehículos de rescate cuyo precio de venta al público sea de hasta USD 30.000'
    },
    {
        CODIGO: '3074',
        VALOR: 10,
        NOMBRE: 'ICE - Vehículos motorizados, excepto camionetas, furgonetas, camiones y de rescate, PVP mayor de USD 20.000 a 30.000'
    },
    {
        CODIGO: '3075',
        VALOR: 15,
        NOMBRE: 'ICE - Vehículos motorizados, cuyo precio de venta al público sea superior a USD 30.000 y de hasta USD 40.000'
    },
    {
        CODIGO: '3077',
        VALOR: 20,
        NOMBRE: 'ICE - Vehículos motorizados, cuyo precio de venta al público sea superior a USD 40.000 y de hasta USD 50.000'
    },
    {
        CODIGO: '3078',
        VALOR: 25,
        NOMBRE: 'ICE - Vehículos motorizados cuyo precio de venta al público sea superior a USD 50.000 y de hasta USD 60.000'
    },
    {
        CODIGO: '3079',
        VALOR: 30,
        NOMBRE: 'ICE - Vehículos motorizados cuyo precio de venta al público sea superior a USD 60.000 y de hasta USD 70.000'
    },
    {
        CODIGO: '3080',
        VALOR: 35,
        NOMBRE: 'ICE - Vehículos motorizados cuyo precio de venta al público sea superior a USD 70.000'
    },
    {
        CODIGO: '3171',
        VALOR: 0,
        NOMBRE: 'ICE - Vehículos híbridos o eléctricos cuyo precio de venta al público sea de hasta USD 35.000'
    },
    {
        CODIGO: '3172',
        VALOR: 8,
        NOMBRE: 'ICE - Vehículos híbridos o eléctricos cuyo precio de venta al público sea superior a USD 35.000 y de hasta USD 40.000'
    },
    {
        CODIGO: '3173',
        VALOR: 14,
        NOMBRE: 'ICE - Vehículos híbridos o eléctricos cuyo precio de venta al público sea superior a USD 40.000 y de hasta USD 50.000 '
    },
    {
        CODIGO: '3174',
        VALOR: 20,
        NOMBRE: 'ICE - Vehículos híbridos o eléctricos cuyo precio de venta al público sea superior a USD 50.000 y de hasta USD 60.000'
    },
    {
        CODIGO: '3175',
        VALOR: 26,
        NOMBRE: 'ICE - Vehículos híbridos o eléctricos cuyo precio de venta al público sea superior a USD 60.000 y de hasta USD 70.000'
    },
    {
        CODIGO: '3176',
        VALOR: 32,
        NOMBRE: 'ICE - Vehículos híbridos o eléctricos cuyo precio de venta al público sea superior a USD 70.000'
    },
    {
        CODIGO: '3181',
        VALOR: 15,
        NOMBRE: 'ICE - Aviones,avionetas y helicópteros excepto transporte comercial de pasajeros;motos acuáticas,tricares,cuadrones,yates y barcos de recreo'
    },
    {
        CODIGO: '3092',
        VALOR: 15,
        NOMBRE: 'ICE - Servicios de televisión pagada '
    },
    {
        CODIGO: '3650',
        VALOR: 35,
        NOMBRE: 'ICE - Servicios de casinos, salas de juego (bingo - mecánicos) y otros juegos de azar'
    },
    {
        CODIGO: '3660',
        VALOR: 35,
        NOMBRE: 'ICE - Las cuotas, membresías, afiliaciones, acciones y similares de los Clubes Sociales,para prestar sus servicios, mayor a USD 1.500 anuales'
    },
    {
        CODIGO: '3011',
        VALOR: 0,
        NOMBRE: 'ICE - Cigarrillos rubios '
    },
    {
        CODIGO: '3021',
        VALOR: 0,
        NOMBRE: 'ICE - Cigarrillos negros'
    },
    {
        CODIGO: '3031',
        VALOR: 75,
        NOMBRE: 'ICE - Bebidas alcohólicas'
    },
    {
        CODIGO: '3041',
        VALOR: 75,
        NOMBRE: 'ICE - Cerveza'
    }
]

export const getValorICE = codigo => {
    return valorICE.find(item => item.CODIGO === codigo);
}


//Formas de pago
export const formasPago = [
    {
        CODIGO: '01',
        NOMBRE: "Sin utilización del sistema financiero"
    },
    {
        CODIGO: '15',
        NOMBRE: 'Compensación de deudas'
    },
    {
        CODIGO: '16',
        NOMBRE: 'Tarjeta de débito'
    },
    {
        CODIGO: '17',
        NOMBRE: 'Dinero electrónico'
    },
    {
        CODIGO: '18',
        NOMBRE: 'Tarjeta pre-pago'
    },
    {
        CODIGO: '19',
        NOMBRE: 'Tarjeta de crédito'
    },
    {
        CODIGO: '20',
        NOMBRE: 'Otros con utilización del sistema financiero'
    },
    {
        CODIGO: '21',
        NOMBRE: 'Endoso de títulos'
    }
]

export const unidadTiempo = [
    {
        CODIGO: '01',
        NOMBRE: 'Días'
    },
    {
        CODIGO: '02',
        NOMBRE: 'Meses'
    },
    {
        CODIGO: '03',
        NOMBRE: 'Años'
    }
]

export const typeTax = [
    {
        CODIGO: '1',
        NOMBRE: 'Renta'
    },
    {
        CODIGO: '2',
        NOMBRE: 'IVA'
    },
    {
        CODIGO: '6',
        NOMBRE: 'ISD'
    },
    /*{
        CODIGO: '3',
        NOMBRE: 'ICE'
    },
    {
        CODIGO: '4',
        NOMBRE: 'IRBPNR'
    },
    */
]

export const retentionCodeIva = [
    { CODIGO: "1", VALOR: 30, NOMBRE: "Retención IVA  30%" },
    { CODIGO: "2", VALOR: 70, NOMBRE: "Retención IVA  70%" },
    { CODIGO: "3", VALOR: 100, NOMBRE: "Retención IVA  100%" },
    { CODIGO: "7", VALOR: 0, NOMBRE: "Retención IVA  0%" },
    { CODIGO: "8", VALOR: 0, NOMBRE: "No procede retención" },
    { CODIGO: "9", VALOR: 10, NOMBRE: "Retención IVA  10%" },
    { CODIGO: "10", VALOR: 10, NOMBRE: "Retención IVA  10% bienes" },
    { CODIGO: "11", VALOR: 20, NOMBRE: "Retención IVA  20%" },
]

export const retentionCodeIcd = [
    { CODIGO: "4580", VALOR: 5, NOMBRE: "Retención ICD  30%" },
]

export const retentionCode = [
    { CODIGO: "303", VALOR: 10, NOMBRE: "Honorarios profesionales y demás pagos por servicios relacionados con el título profesional" },
    { CODIGO: "304", VALOR: 8, NOMBRE: "Servicios predomina el intelecto no relacionados con el título profesional" },
    { CODIGO: "304A", VALOR: 8, NOMBRE: "Comisiones y demás pagos por servicios predomina intelecto no relacionados con el título profesional" },
    { CODIGO: "304B", VALOR: 8, NOMBRE: "Pagos a notarios y registradores de la propiedad y mercantil por sus actividades ejercidas como tales" },
    { CODIGO: "304C", VALOR: 8, NOMBRE: "Pagos a deportistas, entrenadores, árbitros, miembros del cuerpo técnico por sus actividades ejercidas como tales" },
    { CODIGO: "304D", VALOR: 8, NOMBRE: "Pagos a artistas por sus actividades ejercidas como tales" },
    { CODIGO: "304E", VALOR: 8, NOMBRE: "Honorarios y demás pagos por servicios de docencia" },
    { CODIGO: "307", VALOR: 2, NOMBRE: "Servicios predomina la mano de obra" },
    { CODIGO: "308", VALOR: 10, NOMBRE: "Utilización o aprovechamiento de la imagen o renombre" },
    { CODIGO: "309", VALOR: 1.75, NOMBRE: "Servicios prestados por medios de comunicación y agencias de publicidad" },
    { CODIGO: "310", VALOR: 1, NOMBRE: "Servicio de transporte privado de pasajeros o transporte público o privado de carga" },
    { CODIGO: "311", VALOR: 2, NOMBRE: "Pagos a través de liquidación de compra (nivel cultural o rusticidad)" },
    { CODIGO: "312", VALOR: 1.75, NOMBRE: "Transferencia de bienes muebles de naturaleza corporal" },
    { CODIGO: "312A", VALOR: 1, NOMBRE: "Compra de bienes de origen agrícola, avícola, pecuario, apícola, cunícula, bioacuático, forestal y carnes en estado natural" },
    { CODIGO: "312B", VALOR: 1, NOMBRE: "Impuesto a la Renta único para la actividad de producción y cultivo de palma aceitera" },
    { CODIGO: "314A", VALOR: 8, NOMBRE: "Regalías por concepto de franquicias de acuerdo a Ley de Propiedad Intelectual - pago a personas naturales" },
    { CODIGO: "314B", VALOR: 8, NOMBRE: "Cánones, derechos de autor,  marcas, patentes y similares de acuerdo a Ley de Propiedad Intelectual – pago a personas naturales" },
    { CODIGO: "314C", VALOR: 8, NOMBRE: "Regalías por concepto de franquicias de acuerdo a Ley de Propiedad Intelectual  - pago a sociedades" },
    { CODIGO: "314D", VALOR: 8, NOMBRE: "Cánones, derechos de autor,  marcas, patentes y similares de acuerdo a Ley de Propiedad Intelectual – pago a sociedades" },
    { CODIGO: "319", VALOR: 1.75, NOMBRE: "Cuotas de arrendamiento mercantil (prestado por sociedades), inclusive la de opción de compra" },
    { CODIGO: "320", VALOR: 8, NOMBRE: "Arrendamiento bienes inmuebles" },
    { CODIGO: "322", VALOR: 1.75, NOMBRE: "Seguros y reaseguros (primas y cesiones)" },
    { CODIGO: "323", VALOR: 2, NOMBRE: "Rendimientos financieros pagados a naturales y sociedades  (No a IFIs)" },
    { CODIGO: "323A", VALOR: 2, NOMBRE: "Rendimientos financieros: depósitos Cta. Corriente" },
    { CODIGO: "323B1", VALOR: 2, NOMBRE: "Rendimientos financieros:  depósitos Cta. Ahorros Sociedades" },
    { CODIGO: "323E", VALOR: 2, NOMBRE: "Rendimientos financieros: depósito a plazo fijo  gravados" },
    { CODIGO: "323E2", VALOR: 0, NOMBRE: "Rendimientos financieros: depósito a plazo fijo exentos" },
    { CODIGO: "323F", VALOR: 2, NOMBRE: "Rendimientos financieros: operaciones de reporto - repos" },
    { CODIGO: "323G", VALOR: 2, NOMBRE: "Inversiones (captaciones) rendimientos distintos de aquellos pagados a IFIs" },
    { CODIGO: "323H", VALOR: 2, NOMBRE: "Rendimientos financieros: obligaciones" },
    { CODIGO: "323I", VALOR: 2, NOMBRE: "Rendimientos financieros: bonos convertible en acciones" },
    { CODIGO: "323 M", VALOR: 2, NOMBRE: "Rendimientos financieros: Inversiones en títulos valores en renta fija gravados " },
    { CODIGO: "323 N", VALOR: 0, NOMBRE: "Rendimientos financieros: Inversiones en títulos valores en renta fija exentos" },
    { CODIGO: "323 O", VALOR: 0, NOMBRE: "Intereses y demás rendimientos financieros pagados a bancos y otras entidades sometidas al control de la Superintendencia de Bancos y de la Economía Popular y Solidaria" },
    { CODIGO: "323 P", VALOR: 2, NOMBRE: "Intereses pagados por entidades del sector público a favor de sujetos pasivos" },
    { CODIGO: "323Q", VALOR: 2, NOMBRE: "Otros intereses y rendimientos financieros gravados " },
    { CODIGO: "323R", VALOR: 0, NOMBRE: "Otros intereses y rendimientos financieros exentos" },
    { CODIGO: "323S", VALOR: 2, NOMBRE: "Pagos y créditos en cuenta efectuados por el BCE y los depósitos centralizados de valores, en calidad de intermediarios, a instituciones del sistema financiero por cuenta de otras personas naturales y sociedades" },
    { CODIGO: "323T", VALOR: 0, NOMBRE: "Rendimientos financieros originados en la deuda pública ecuatoriana" },
    { CODIGO: "323U", VALOR: 0, NOMBRE: "Rendimientos financieros originados en títulos valores de obligaciones de 360 días o más para el financiamiento de proyectos públicos en asociación público-privada" },
    { CODIGO: "324A", VALOR: 1, NOMBRE: "Intereses y comisiones en operaciones de crédito entre instituciones del sistema financiero y entidades economía popular y solidaria." },
    { CODIGO: "324B", VALOR: 1, NOMBRE: "Inversiones entre instituciones del sistema financiero y entidades economía popular y solidaria" },
    { CODIGO: "324C", VALOR: 1, NOMBRE: "Pagos y créditos en cuenta efectuados por el BCE y los depósitos centralizados de valores, en calidad de intermediarios, a instituciones del sistema financiero por cuenta de otras instituciones del sistema financiero" },
    { CODIGO: "328", VALOR: 0, NOMBRE: "Dividendos distribuidos a sociedades residentes" },
    { CODIGO: "329", VALOR: 0, NOMBRE: "Dividendos distribuidos a fideicomisos residentes" },
    { CODIGO: "331", VALOR: 0, NOMBRE: "Dividendos en acciones (capitalización de utilidades)" },
    { CODIGO: "332", VALOR: 0, NOMBRE: "Otras compras de bienes y servicios no sujetas a retención" },
    { CODIGO: "332B", VALOR: 0, NOMBRE: "Compra de bienes inmuebles" },
    { CODIGO: "332C", VALOR: 0, NOMBRE: "Transporte público de pasajeros" },
    { CODIGO: "332D", VALOR: 0, NOMBRE: "Pagos en el país por transporte de pasajeros o transporte internacional de carga, a compañías nacionales o extranjeras de aviación o marítimas" },
    { CODIGO: "332E", VALOR: 0, NOMBRE: "Valores entregados por las cooperativas de transporte a sus socios" },
    { CODIGO: "332F", VALOR: 0, NOMBRE: "Compraventa de divisas distintas al dólar de los Estados Unidos de América" },
    { CODIGO: "332G", VALOR: 0, NOMBRE: "Pagos con tarjeta de crédito " },
    { CODIGO: "332H", VALOR: 0, NOMBRE: "Pago al exterior tarjeta de crédito reportada por la Emisora de tarjeta de crédito, solo RECAP" },
    { CODIGO: "332I", VALOR: 0, NOMBRE: "Pago a través de convenio de debito (Clientes IFI`s)" },
    { CODIGO: "333", VALOR: 10, NOMBRE: "Ganancia en la enajenación de derechos representativos de capital u otros derechos que permitan la exploración, explotación, concesión o similares de sociedades, que se coticen en bolsa de valores del Ecuador" },
    { CODIGO: "334", VALOR: 1, NOMBRE: "Contraprestación producida por la enajenación de derechos representativos de capital u otros derechos que permitan la exploración, explotación, concesión o similares de sociedades, no cotizados en bolsa de valores del Ecuador" },
    { CODIGO: "335", VALOR: 15, NOMBRE: "Loterías, rifas, apuestas y similares" },
    { CODIGO: "346", VALOR: 1.75, NOMBRE: "Otras retenciones aplicables a otros porcentajes " },
    { CODIGO: "340", VALOR: 3, NOMBRE: "Impuesto único a la exportación de banano" },
    { CODIGO: "343", VALOR: 1, NOMBRE: "Otras retenciones aplicables el 1%" },
    { CODIGO: "343A", VALOR: 1, NOMBRE: "Energía eléctrica" },
    { CODIGO: "343B", VALOR: 1.75, NOMBRE: "Actividades de construcción de obra material inmueble, urbanización, lotización o actividades similares" },
    { CODIGO: "343C", VALOR: 1, NOMBRE: "Impuesto Redimible a las botellas plásticas - IRBP" },
    { CODIGO: "3440", VALOR: 2.75, NOMBRE: "Otras retenciones aplicables el 2,75%" },
    { CODIGO: "344A", VALOR: 2, NOMBRE: "Pago local tarjeta de crédito /débito reportada por la Emisora de tarjeta de crédito / entidades del sistema financiero" },
    { CODIGO: "344B", VALOR: 2, NOMBRE: "Adquisición de sustancias minerales dentro del territorio nacional" },
    { CODIGO: "345", VALOR: 8, NOMBRE: "Otras retenciones aplicables el 8%" },
    { CODIGO: "348", VALOR: 1, NOMBRE: "Impuesto único a ingresos provenientes de actividades agropecuarias en etapa de producción / comercialización local o exportación" },
    { CODIGO: "351", VALOR: 1.75, NOMBRE: "Régimen Microempresarial" },
    { CODIGO: "504", VALOR: 25, NOMBRE: "Pago a no residentes- Dividendos distribuidos a personas naturales (domicilados o no en paraiso fiscal) o a sociedades sin beneficiario efectivo persona natural residente en Ecuador" },
    { CODIGO: "504B", VALOR: 35, NOMBRE: "Dividendos a no residentes incumpliendo el deber de informar la composición societaria" },
    { CODIGO: "505D", VALOR: 25, NOMBRE: "Pago a no residentes - Intereses por financiamiento de proveedores externos" },
    { CODIGO: "505E", VALOR: 25, NOMBRE: "Pago a no residentes - Intereses de otros créditos externos" },
    { CODIGO: "520E", VALOR: 0, NOMBRE: "Pago a no residentes - Por las empresas de transporte marítimo o aéreo y por empresas pesqueras de alta mar, por su actividad." },
    { CODIGO: "325", VALOR: 22, NOMBRE: "Anticipo dividendos" },
    { CODIGO: "325A", VALOR: 22, NOMBRE: "Préstamos accionistas, beneficiarios o partícipes residentes o establecidos en el Ecuador" },
    { CODIGO: "326", VALOR: 0, NOMBRE: "Dividendos distribuidos que correspondan al impuesto a la renta único establecido en el art. 27 de la LRTI " },
    { CODIGO: "327", VALOR: 0, NOMBRE: "Dividendos distribuidos a personas naturales residentes" },
    { CODIGO: "336", VALOR: 0, NOMBRE: "Venta de combustibles a comercializadoras" },
    { CODIGO: "337", VALOR: 0, NOMBRE: "Venta de combustibles a distribuidores" },
    { CODIGO: "338", VALOR: 0, NOMBRE: "Producción y venta local de banano producido o no por el mismo sujeto pasivo" },
    { CODIGO: "346A", VALOR: 0, NOMBRE: "Otras ganancias de capital distintas de enajenación de derechos representativos de capital " },
    //{CODIGO:"346B",VALOR:Según art 36 LRTI literal d),NOMBRE:"Donaciones en dinero -Impuesto a la donaciones "},
    //{CODIGO:"346C",VALOR: 0 ó 10,NOMBRE:"Retención a cargo del propio sujeto pasivo por la exportación de concentrados y/o elementos metálicos"},
    //{CODIGO:"346D",VALOR: 0 ó 10,NOMBRE:"Retención a cargo del propio sujeto pasivo por la comercialización de productos forestales"},
    //{CODIGO:"350",VALOR:1,50 ó 1,75,NOMBRE:"Otras autoretenciones"},
    { CODIGO: "500", VALOR: 0, NOMBRE: "Pago a no residentes - Rentas Inmobiliarias" },
    { CODIGO: "501", VALOR: 0, NOMBRE: "Pago a no residentes - Beneficios/Servicios  Empresariales" },
    //{CODIGO:"501A",VALOR:25 ó 35,NOMBRE:"Pago a no residentes - Servicios técnicos, administrativos o de consultoría y regalías"},
    { CODIGO: "503", VALOR: 0, NOMBRE: "Pago a no residentes- Navegación Marítima y/o aérea" },
    { CODIGO: "504A", VALOR: 0, NOMBRE: "Dividendos a sociedades con beneficiario efectivo persona natural residente en el Ecuador" },
    { CODIGO: "504C", VALOR: 0, NOMBRE: "Dividendos a residentes o establecidos en paraísos fiscales o regímenes de menor imposición (con beneficiario Persona Natural residente en Ecuador)" },
    { CODIGO: "504D", VALOR: 0, NOMBRE: "Pago a no residentes - Dividendos a fideicomisos domiciladas en paraísos fiscales o regímenes de menor imposición (con beneficiario efectivo persona natural residente en el Ecuador)" },
    { CODIGO: "504E", VALOR: 0, NOMBRE: "Pago a no residentes - Anticipo dividendos (no domiciliada en paraísos fiscales o regímenes de menor imposición)" },
    { CODIGO: "504F", VALOR: 13, NOMBRE: "Pago a no residentes - Anticipo dividendos (domiciliadas en paraísos fiscales o regímenes de menor imposición)" },
    { CODIGO: "504G", VALOR: 25, NOMBRE: "Pago a no residentes - Préstamos accionistas, beneficiarios o partìcipes (no domiciladas en paraísos fiscales o regímenes de menor imposición)" },
    { CODIGO: "504H", VALOR: 13, NOMBRE: "Pago a no residentes - Préstamos accionistas, beneficiarios o partìcipes (domiciladas en paraísos fiscales o regímenes de menor imposición)" },
    //{CODIGO:"504I",VALOR:22 ó 25,NOMBRE:"Pago a no residentes - Préstamos no comerciales a partes relacionadas  (no domiciladas en paraísos fiscales o regímenes de menor imposición)"},
    //{CODIGO:"504J",VALOR:22, 25 ó 28,NOMBRE:"Pago a no residentes - Préstamos no comerciales a partes relacionadas  (domiciladas en paraísos fiscales o regímenes de menor imposición)"},
    { CODIGO: "505", VALOR: 0, NOMBRE: "Pago a no residentes - Rendimientos financieros" },
    { CODIGO: "505A", VALOR: 0, NOMBRE: "Pago a no residentes – Intereses de créditos de Instituciones Financieras del exterior" },
    { CODIGO: "505B", VALOR: 0, NOMBRE: "Pago a no residentes – Intereses de créditos de gobierno a gobierno" },
    { CODIGO: "505C", VALOR: 0, NOMBRE: "Pago a no residentes – Intereses de créditos de organismos multilaterales" },
    { CODIGO: "505F", VALOR: 0, NOMBRE: "Pago a no residentes - Otros Intereses y Rendimientos Financieros" },
    { CODIGO: "509", VALOR: 0, NOMBRE: "Pago a no residentes- Cánones, derechos de autor,  marcas, patentes y similares" },
    { CODIGO: "509A", VALOR: 0, NOMBRE: "PPago a no residentes - Regalías por concepto de franquicias" },
    { CODIGO: "510", VALOR: 0, NOMBRE: "Pago a no residentes - Otras ganancias de capital distintas de enajenación de derechos representativos de capital " },
    { CODIGO: "511", VALOR: 0, NOMBRE: "Pago a no residentes - Servicios profesionales independientes" },
    { CODIGO: "512", VALOR: 0, NOMBRE: "Pago a no residentes - Servicios profesionales dependientes" },
    { CODIGO: "513", VALOR: 0, NOMBRE: "Pago a no residentes- Artistas" },
    { CODIGO: "513A", VALOR: 0, NOMBRE: "Pago a no residentes - Deportistas" },
    { CODIGO: "514", VALOR: 0, NOMBRE: "Pago a no residentes - Participación de consejeros" },
    { CODIGO: "515", VALOR: 0, NOMBRE: "Pago a no residentes - Entretenimiento Público" },
    { CODIGO: "516", VALOR: 0, NOMBRE: "Pago a no residentes - Pensiones" },
    { CODIGO: "517", VALOR: 0, NOMBRE: "Pago a no residentes- Reembolso de Gastos" },
    { CODIGO: "518", VALOR: 0, NOMBRE: "Pago a no residentes- Funciones Públicas" },
    { CODIGO: "519", VALOR: 0, NOMBRE: "Pago a no residentes - Estudiantes" },
    { CODIGO: "520A", VALOR: 0, NOMBRE: "Pago a no residentes - Pago a proveedores de servicios hoteleros y turísticos en el exterior" },
    { CODIGO: "520B", VALOR: 0, NOMBRE: "Pago a no residentes - Arrendamientos mercantil internacional" },
    { CODIGO: "520D", VALOR: 0, NOMBRE: "Pago a no residentes - Comisiones por exportaciones y por promoción de turismo receptivo" },
    { CODIGO: "520F", VALOR: 0, NOMBRE: "Pago a no residentes - Por las agencias internacionales de prensa" },
    { CODIGO: "520G", VALOR: 0, NOMBRE: "Pago a no residentes - Contratos de fletamento de naves para empresas de transporte aéreo o marítimo internacional" },
    { CODIGO: "521", VALOR: 5, NOMBRE: "Pago a no residentes - Enajenación de derechos representativos de capital u otros derechos que permitan la exploración, explotación, concesión o similares de sociedades" },
    { CODIGO: "523A", VALOR: 0, NOMBRE: "Pago a no residentes - Seguros y reaseguros (primas y cesiones)  " },
    //{CODIGO:"525",VALOR:Según art 36 LRTI literal d),NOMBRE:"Pago a no residentes- Donaciones en dinero -Impuesto a la donaciones"},


]
