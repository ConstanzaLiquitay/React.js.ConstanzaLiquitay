import React from 'react'
import "./Bodegas.css";

const Bodegas = () => {
    return (
        <div>

            <div className="container-subtitle">
                <h3 className="subtitle.bodegas" >En esta pagina vas a encontrar toda la informacion que necesitas sobre los vinos de las dos bodegas mas conocidas en San Juan.</h3>
            </div>

            <div className="container-bodegas">
                <img className="logos-bodegas" src="./Imagenes/logotipo/logo-graffigna.png" alt="logo-bodegagrafigna" />
                <img className="logos-bodegas" src="./Imagenes/logotipo/logo-merced del estero.png" alt="logo.bodegamerceddelestero" />
            </div>
        </div>
    )
}

export default Bodegas
