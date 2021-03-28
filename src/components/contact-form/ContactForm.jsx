
import NameInput from '../name-input/NameInput'
import envelopeIcon from '../../assets/envelope-vector.svg'
import styles from './ContactForm.module.css'


const ContactForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.nombres.value)
    console.log(event.target.apellido_paterno.value)
    console.log(event.target.apellido_materno.value)
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
          <button type="submit" className="btn btn-primary">Enviar Formulario</button>
        </div>
      </form>

    </div>

  )
}

export default ContactForm