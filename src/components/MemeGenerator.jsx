import React, { Component } from "react";

export default class MemeGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.genImg = this.genImg.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  genImg(e) {
    e.preventDefault();

    const rand = Math.floor(Math.random() * 100);
    const img = this.state.allMemeImgs[rand].url;
    this.setState({
      randomImg: img
    });
  }

  render() {
    return (
      <div className='cont'>
        <form onSubmit={this.genImg} className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="Add top text"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Add bottom text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />

          <button type="submit">Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}
