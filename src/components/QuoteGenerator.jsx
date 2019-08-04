import React, { Component } from "react";

export default class QuoteGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://picsum.photos/id/168/800/600",
      allMemeImgs: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.genImg = this.genImg.bind(this);
  }

  componentDidMount() {
    fetch("https://picsum.photos/v2/list?page=2&limit=100")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        const memes = response;
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
    const img = this.state.allMemeImgs[rand].download_url;
    this.setState({
      randomImg: img
    });
  }

  render() {
    return (
      <div className="cont">
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
