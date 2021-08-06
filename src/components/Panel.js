import React from 'react'
import './panel.css'
import  dbmanager  from './indexed'

let AddProd=(e)=>{
    e.preventDefault();
    const data = {
        taskProducto: e.target.buscar.value,
        taskDescripcion: e.target.descripcion.value,
        taskPrecio: e.target.precio.value,
        taskCantidad: e.target.cantidad.value,
        taskUnidad: e.target.unidad.value
    }
    console.log(data)
    dbmanager.addData(data);
}


function Panel() {
    return (
        <div className="panel panel-infoo">
            <div className="panel-headingg">
                punto de venta 2
            </div>
            <div className="panel panel-info">
                <div className="panel-heading">Seleccionar un Cliente</div>
                <div className="panel-body">
                    <div className="form-group">
                    <form className="estilo">
                        Buscar:
                        <input type="text" placeholder="PUBLICO EN GENERAL"/>
                    </form>
                    </div>
                </div>
            </div>
           
                <div className="panel panel-info">
                    <div className="panel-heading">Agregar Producto</div>
                        <div className="panel-body">
                            <div className="form-group">
                                <form id="form" xclassName="estilo" onSubmit={AddProd}>
                                    Buscar
                                    <input type="text" name="buscar" placeholder="Buscar producto o servicio"/>
                                    <input type="text" name="descripcion" placeholder="Descripcion"/>
                                    <input type="text" name="precio" placeholder="Precio venta"/>
                                    <input type="text" name="cantidad" placeholder="1"/>
                                    <input type="text" name= "unidad" placeholder="Unidad medida"/>
                                    <button type="submit" className="aplicar">add</button>
                                  
                                </form> 
                                <form className="estilo">
                                    Descuento general
                                    <input type="text" placeholder="0"/>
                                    %
                                    <button className="aplicar">Aplicar</button>
                                </form>
                                
                        </div>
                            </div>
                </div>
                <button className="guardar">F(10) Guardar</button>
        </div> 
        
            
    )
}

export default Panel




