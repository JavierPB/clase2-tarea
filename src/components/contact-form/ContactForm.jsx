import {useState} from 'react'

import NameInput from '../name-input/NameInput'
import envelopeIcon from '../../assets/envelope-vector.svg'
import styles from './ContactForm.module.css'


const ContactForm = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const payload = {
      nombres: event.target.nombres.value,
      apellido_paterno: event.target.apellido_paterno.value,
      apellido_materno: event.target.apellido_materno.value,
      email: event.target.email.value
    }
    console.log(payload)
    window.alert('Se ha enviado el formulario')
  }
  const iconStyle = styles.icon + " ml-2"

  return (
    <div className="container">
      <h1 className="mt-5">Contacto
        <img src={envelopeIcon} className={iconStyle} alt="icon" />
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <NameInput />
        <div className="form-group mt-2">
          <label>Correo electrónico</label>
          <input type="email" name="email" id="id_email"
            onChange={handleEmailChange}
            value={email}
            className="form-control"
            placeholder="Ingrese correo electrónico" />
        </div>
        <div className="form-group mt-2">
          <button type="submit" className="btn btn-primary">Enviar contacto</button>
        </div>
      </form>
      <p></p>
    </div>

  )
}

export default ContactForm