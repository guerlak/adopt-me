import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBondary";
import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";
import Modal from "./Modal";
import { Redirect, navigate } from "@reach/router";

class DetailsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      name: "",
      animal: "",
      location: "",
      description: "",
      media: "",
      breed: "",
      url: "",
      showModal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    pet
      .animal(this.props.id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          url: animal.url,
          loading: false,
          showModal: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    if (this.state.loading) {
      return <h1>...loading</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      url,
      showModal
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
        {/* Getting the  global context API inside the class */}
        <ThemeContext.Consumer>
          {([theme]) => (
            <button
              style={{ backgroundColor: theme }}
              onClick={this.toggleModal}
            >
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {showModal ? (
          <Modal>
            <h1>Would you like to adopt {name}? </h1>
            <div className="buttons">
              <button onClick={() => navigate(this.state.url)}>Yes</button>
              <button onClick={this.toggleModal}>No</button>
            </div>
          </Modal>
        ) : null}

        <UserContext.Consumer>
          {([user]) => (
            <p>
              <b>User logged:</b> {user.email}
            </p>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsClass {...props} />
    </ErrorBoundary>
  );
}
