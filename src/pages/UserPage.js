import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components/native";
import List from "../components/List";
import Comic from "../components/Comic";
import Container from "../components/Container";
import Column from "../components/Column";
import Image from "../components/Image";
import Navbar from "../components/Navbar";
import { BigText } from "../components/Text";
import { stringCut, getValue } from "../services/helpers";

const Header = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

class userPage extends Component {

  render() {
    const {
      user: { name, login, image, comicsFavorite }
    } = this.props;
    return (
      <Container>
        <Navbar navigateInternal={this.props.navigateInternal} />
  
        <Header>
          <BigText align="center">{name}</BigText>
        </Header>

        <Image
          source={image}
          height={getValue(50)}
          radius={10}
          resizeMode="contain"
        />

        <List
          title="Favorited Comics"
          data={comicsFavorite}
          renderItem={({ item }) => <Comic item={item} />}
          keyExtractor={(item, index) => `${item.id}`}
          numColumns={2}
        />            

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.UserReducer.user
});

export default connect(mapStateToProps)(userPage);
