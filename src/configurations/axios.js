import axios from 'axios';
import UseSeucrity from "security/useSecurity"

const API_URL = 'http://localhost:8090/api/admin';
const API_URL_LOCAL = 'http://localhost:8090/api/admin';



export const clientLocal = axios.create({
    baseURL: `${API_URL_LOCAL}`
});

//<<<<<<<<<<<<< core >>>>>>>>>>>>>>>>>>>>>>>>>>
let instanceBackendCore = axios.create({
    baseURL: `${API_URL}/core`
});

instanceBackendCore.interceptors.request.use((config) => {
    const { getTk } = UseSeucrity();
    config.headers.Authorization = getTk();
    return config;
}, error => {
    return Promise.reject(error)
})

export const httpCore = instanceBackendCore;

//<<<<<<<<<<<<< repo >>>>>>>>>>>>>>>>>>>>>>>>>>

let instanceBackendRepo = axios.create({
    baseURL: `${API_URL}/repo`
});

instanceBackendRepo.interceptors.request.use((config) => {
    const { getTk } = UseSeucrity();
    config.headers.Authorization = getTk();
    return config;
}, error => {
    return Promise.reject(error)
})

export const httpRepo = instanceBackendRepo;

//<<<<<<<<<<<<< auth >>>>>>>>>>>>>>>>>>>>>>>>>>

let instanceBackend = axios.create({
    baseURL: `${API_URL}/auth`
});

instanceBackend.interceptors.request.use((config) => {
    const { getTk } = UseSeucrity();
    config.headers.Authorization = getTk()

    return config;
}, error => {
    return Promise.reject(error)
})

const clientBackend = instanceBackend;

export default clientBackend;

//<<<<<<<<<<<<<<<<<< Pagos>>>>>>>>>>>>>>>><
let instanceBackendPay = axios.create({
    baseURL: `${API_URL}/pay`
});

instanceBackendPay.interceptors.request.use((config) => {
    const { getTk } = UseSeucrity();
    config.headers.Authorization = getTk()

    return config;
}, error => {
    return Promise.reject(error)
})

export const clientPay = instanceBackendPay;


//<<<<<<<<<<< servicios de documentos>>>>>>>>>

let instancePDF = axios.create({
    baseURL: API_URL,
    responseType: 'blob'
    //contentType: 'application/pdf'

});

instancePDF.interceptors.request.use((config) => {
    const { getTk } = UseSeucrity();
    config.headers.Authorization = getTk();
    //config.headers.responseType = 'blob';
    return config;
}, error => {
    return Promise.reject(error)
})

export const clientBackendPDF = instancePDF;

/** par obtener el xml */
let instanceXML = axios.create({
    baseURL: API_URL,
    contentType: "application/xml; charset=utf-8"
    //contentType: 'application/pdf'

});

instanceXML.interceptors.request.use((config) => {
    const { getTk } = UseSeucrity();
    config.headers.Authorization = getTk();

    //config.headers.responseType = 'blob';
    return config;
}, error => {
    return Promise.reject(error)
})
export const clientBackendXML = instanceXML;

/**para obtener zip de los comprobantes */
let instanceZIP = axios.create({
    baseURL: `${API_URL}/core`,
    //contentType: "application/zip"
    responseType: "arraybuffer",
})
instanceZIP.interceptors.request.use((config) => {
    const { getTk } = UseSeucrity();
    config.headers.Authorization = getTk();

    //config.headers.responseType = 'blob';
    return config;
}, error => {
    return Promise.reject(error)
})
export const clientBackendZIP = instanceZIP;