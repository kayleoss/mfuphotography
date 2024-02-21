import { Component } from "react";

export default class LargeFrame extends Component {
    state = {
        index: 0,
        photos: [
            {
                name: "whitewalls",
                price: 5,
                src: "featured/stock.jpeg"
            }
        ],
        mobileClass: ''
    }

    changeIndex = () => {
        if (this.state.index < this.state.photos.length-1) {
            this.setState({index: this.state.index + 1})
        } else {
            this.setState({index: 0})
        }
    }

    componentDidMount() {
        if (window.innerWidth > 760) {
            this.setState({photos: this.props.photos})
            this.interval = setInterval(this.changeIndex, 10000);
        } else {
            this.setState({mobileClass: 'mobile-large-frame', photos: [
                {
                    name: "mobile feature 1",
                    price: 5,
                    src: "categories/nature/paintedflower.jpg"
                },
            ]})
        }
    }

    render() {
        return (
            <>
                <img 
                key={this.state.index}
                className={this.state.mobileClass !== '' ? this.state.mobileClass : "w-100 transition-img"}
                src={require(`../../assets/` + this.state.photos[this.state.index].src)}
                alt={this.state.photos[this.state.index].name}
                />
            </>
        )
    }
}