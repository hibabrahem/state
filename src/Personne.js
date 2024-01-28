import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Personne extends Component {
    state = {
        Person:
        {
            fullName: "Hiba Brahem",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgSrc: "https://img.freepik.com/photos-gratuite/belle-jeune-femme-regardant-camera-fille-mode-t-shirt-blanc-ete-decontracte-short-jean-femelle-positive-montre-emotions-faciales-modele-drole-isole-jaune_158538-15796.jpg",
            profession: "formatrice",

        },

        show: true
    }

    unshow = () => {
        // var newperson =


        this.setState({ show: !this.state.show });


    }

    render() {
        return (
            <div >

                {this.state.show &&
                    <div >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={this.state.Person.imgSrc} alt={this.state.Person.fullName} />
                            <Card.Body>
                                <Card.Title>{this.state.Person.fullName}</Card.Title>
                                <Card.Text>
                                    {this.state.Person.bio}
                                </Card.Text>
                                {/* Pass the index to the onClick handler */}

                            </Card.Body>
                        </Card>
                    </div>

                }
                <div style={{
                    position: 'absolute',
                    left: '35px'
                }}> <Button variant="secondary" onClick={() => this.unshow()} style={{
                    width: '200px'
                }}>🧿</Button></div>

            </div>
        );
    }
}
