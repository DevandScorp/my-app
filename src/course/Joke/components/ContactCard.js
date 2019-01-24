/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// const ContactCard = props => (
//   <div className="contact-card">
//     <img src={props.contact.imgUrl} alt="" />
//     <h3>{props.contact.name}</h3>
//     <p>Phone: {props.contact.phone}</p>
//     <p>Email: {props.contact.email}</p>
//   </div>
// );
class ContactCard extends React.Component {
  render() {
    return (
      <div className="contact-card">
        <img src={this.props.contact.imgUrl} alt="" />
        <h3>{this.props.contact.name}</h3>
        <p>Phone: {this.props.contact.phone}</p>
        <p>Email: {this.props.contact.email}</p>
      </div>
    );
  }
}
export default ContactCard;
