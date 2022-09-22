import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class NewsComponent extends Component {
    static defaultProps = {
        pageSize: 21,
        country: 'au',
        category: 'general'
    };

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            totalResults: 1,
        }
    }
    async componentDidMount(props) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f50a02b24e17480298a1fabfd5c443a4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                articles: parsedData.articles,
                page: 1,
                loading: false,
                totalResults: parsedData.totalResultsl,
                country: parsedData.country
            }
        )
    }

    handlePrevClick = async (props) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}au&category=${this.props.category}&apiKey=f50a02b24e17480298a1fabfd5c443a4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                articles: parsedData.articles,
                page: this.state.page - 1,
                loading: false
            }
        )
    }

    handleNextClick = async (props) => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}au&category=${this.props.category}&apiKey=f50a02b24e17480298a1fabfd5c443a4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
            {
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            }
        )
    }
    render() {
        return (
            <>
                <div className="container my-2">
                    <h2 className='text-center my-4'>NewsMonkey - Top Headlines</h2>
                    {this.state.loading && <Spinner />}
                    <div className="row my-3">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4 my-2" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 40) : " "} description={element.description ? element.description.slice(0, 80) : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"><b>&larr;</b></button>
                        <button disabled={(this.state.page + 1) > (this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark"><b>&rarr;</b></button>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsComponent