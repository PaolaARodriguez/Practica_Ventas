import { db } from '../config/db.js'; 

//ejecuta//
export const getProductos = (callback) => {
    db.query('select * from productos', callback);
};

export const addProducto = (producto, callback) => {
    db.query('insert into productos set ?', producto, callback );
};