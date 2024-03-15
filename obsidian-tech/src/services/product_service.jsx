import { Puerto } from "../config/server_constant"; 
//         Muestra todos los productos
async function getAllProductsFromDB() {
 try {
  const response = await fetch(`${ Puerto.URL_LOCAL }/accesorio`);
  if(!response.ok){
    const errorData = await response.json()
    console.error(`Error status ${response.status}`)
    throw new Error(`${errorData.message}`)
  }
  return await response.json()
 } catch (error) {
  return error
 }
}

//         Muestra un producto por su id
async function getProductByIdFromDb(id) {
  try {
    const response = await fetch(`${Puerto.URL_LOCAL}/accesorio/${id}`)
    if(!response.ok){
      const errorData = await response.json()
      console.error(`Error status ${response.status}`)
      throw new Error(`${errorData.message}`)
    }
    return await response.json();
  } catch (error) {
    return error
  }
}

//         Crear un producto nuevo
async function AddProductos({ nombre, categoria, precio, stock, Descripcion, urlImg, token }) {
  try {
    const body = JSON.stringify({
      nombre,
      categoria,
      precio,
      stock,
      Descripcion,
      urlImg  
    });
  
    const response = await fetch(`${Puerto.URL_LOCAL}/accesorio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    body: body,
    });
    if(!response.ok){
      const errorData = await response.json()
      console.error("Error status " + response.status)
      throw new Error(`${errorData.message}`)
    }
    return response.json();
  } catch (error) {
    return error
  }
}

//         Modificar un producto
async function UpdateProducto(id, { nombre, categoria, precio, stock, Descripcion, urlImg, token }) {

  const body = JSON.stringify({
    nombre,
    categoria,
    precio,
    stock,
    Descripcion,
    urlImg
  });
  const response = await fetch(`${Puerto.URL_LOCAL}/accesorio/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: body,
  });
  return response.json();
}

//          Borrar un producto
async function DeleteProducto({ id, token }) {
  try {
    const response = await fetch(`${Puerto.URL_LOCAL}/accesorio/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    });
    if(!response.ok){
      const errorData = await response.json();
      console.error('Error status ' + response.status)
      throw new Error(`${errorData.message}`)
    }
    return await response.json()
  } catch (error) {
    throw error
  }

}

export { getAllProductsFromDB, getProductByIdFromDb, AddProductos, UpdateProducto, DeleteProducto }