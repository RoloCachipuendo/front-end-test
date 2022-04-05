export const numDecimales = 6;
export const numDecimalesDescuento = 2;



export const apiKey = "C5N96qsGiQpJ25vwP9v7";

export const aYoSis = "kyk7uARaQ1WCETLVbwDA";
export const domainSis = "test.oymasociados.com";
//export const aYoSis=window._env_.AYO_SIS;
//export const apiKey = window._env_.API_KEY

export const bookApis = {
    auth:
    {
        get_all_permissons: (idPerfil, codigoSistema) => `/admin/permisos/${idPerfil}/${codigoSistema}`
    }
}