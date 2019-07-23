import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBondary";
import ThemeContext from "./ThemeContext";

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
      url: ""
    };
  }

  pressMe(e) {
    console.log(e.target);
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
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }

  render() {
    if (this.state.loading) {
      return <h1>...loading</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
        {/* Geting the  global context inside the class */}
        <ThemeContext.Consumer>
          {([theme]) => (
            <button style={{ backgroundColor: theme }} onClick={this.pressMe}>
              Adopt {name}
            </button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
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
