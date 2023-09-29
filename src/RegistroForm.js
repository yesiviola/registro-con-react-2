import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';


class RegistroForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address: '',
      city: '',
      postalCode: '',
      agree: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Formulario de Registro</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">
              <i className="fa fa-user"></i> Primer Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">
              <i className="fa fa-user"></i> Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <i className="fa fa-envelope"></i> Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <i className="fa fa-key"></i> Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">
              <i className="fa fa-home"></i> Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">
              <i className="fa fa-home"></i> Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={this.state.city}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="postalCode">
              <i className="fa fa-home"></i> Código Postal
            </label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              name="postalCode"
              value={this.state.postalCode}
              onChange={this.handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agree"
                name="agree"
                checked={this.state.agree}
                onChange={this.handleInputChange}
              />
              <label className="form-check-label" htmlFor="agree">
                Acepto el registro de mis datos personales
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </form>
      </div>
    );
  }
}

export default RegistroForm;

