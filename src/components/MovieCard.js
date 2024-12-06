import {Component} from 'react'

class MovieCard extends Component{

    constructor(){
        super();
        this.state = {
            title:"The Avengers",
            plot: "Super powers movie",
            price: "Rs. 199",
            rating: 4.5,
            stars: 0,
            image:"https://m.media-amazon.com/images/I/81mmNk1-LbL._AC_UF894,1000_QL80_.jpg"

        }
        // this.addStars = this.addStars.bind(this); // if we are making use of non-arrow functions we have to explicitly bind this keyword , but if we are making use of arrow-function there is no need to bind this keyword , it will be done implicitly
    }
    /*addStars(){
        console.log(this);
    }*/

    addStars = ()=>{
        this.setState((prevState)=>{
            return{
                stars : prevState.stars + 0.5
            }
        })
    }
    removeStars = ()=>{
        this.setState((prevState)=>{
            return{
                stars: prevState.stars - 0.5
            }
        })
    }


    render(){
        const {title, plot, price, rating, stars, image} = this.state;
        {/* the above line is important if we don't want to display using this.state.title, with the above line we can just write {title} and everything works just fine */}

        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={image} alt="movie-poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <button onClick={this.removeStars}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/11502/11502473.png" alt="minus" className='str-btn'  />
                                </button>

                                <img src="https://cdn-icons-png.flaticon.com/128/7656/7656139.png" alt="rating-stars" className='stars'/>

                                <button onClick={this.addStars}>
                                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" alt="plus" className='str-btn'  />
                                </button>

                                <span className='starCount'>{stars}</span>

                            </div>

                            <button className='favourite-btn'>Favourite</button>
                            <button className='cart-btn'>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;
