/**
 * Mapa de la matriz de archivos a la lista de etiquetas
 * @param {*} name
 */
 const genBlockTags = (name) =>{
   
   return name.split('/')[0].includes('@nova-blocks') ? "blocks" : "pro-block"
}
export default genBlockTags;