import { useState } from 'react'

const NameInput = () => {

    const [nombres, setNombres] = useState('')
    const [apePat, setApePat] = useState('')
    const [apeMat, setApeMat] = useState('')

    const handleNombresChange = (event) => setNombres(event.target.value)
    const handleApePatChange = (event) => setApePat(event.target.value)
    const handleApeMatChange = (event) => setApeMat(event.target.value)

    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="form-group">
                    <label>Nombres</label>
                    <input name="nombres" value={nombres} onChange={handleNombresChange} className="form-control" placeholder="Ingrese nombres" />
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-group">
                    <label>Apellido Paterno</label>
                    <input name="apellido_paterno" value={apePat} onChange={handleApePatChange} className="form-control" placeholder="Ingrese apellido paterno" />
                </div>
            </div>
            <div className="col-lg-4">
                <div className="form-group">
                    <label>Apellido Materno</label>
                    <input name="apellido_materno" value={apeMat} onChange={handleApeMatChange} className="form-control" placeholder="ingrese apellido materno" />
                </div>
            </div>
        </div>
    )
}

export default NameInput