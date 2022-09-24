import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export class NewsComponent extends Component {
    static defaultProps = {
        pageSize: 18,
        country: 'in',
        category: 'general'
    };

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string
    };

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            totalResults: 0,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState(
            {
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false,
                country: parsedData.country
            }
        )
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }

    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }

    fetchMoreData = async () => {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 });
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState(
            {
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
            }
        )
        this.props.setProgress(100);
    };

    render() {
        return (
            <>
                <div className="container my-2" >
                    <h1 className='text-center my-4'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                    {this.state.loading && <Spinner />}
                    {/* This line was added once we don't want our previous articles to be visible at the time of loading new articles */}
                    {/* {!this.state.loading && this.state.articles.map((element) => { */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length < this.state.totalResults}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row my-3">
                                {this.state.articles.map((element) => {
                                    return (
                                        <div className="col-md-4 my-2" key={element.url}>
                                            <NewsItem title={element.title ? element.title.slice(0, 40) : " "} description={element.description ? element.description.slice(0, 80) : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                        </div>
                                    )

                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                    {/* Added Previous and Next Button to naviagte to other pages as well. */}
                    {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"><b>&larr;</b></button>
                        <button disabled={(this.state.page + 1) > (this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark"><b>&rarr;</b></button>
                    </div> */}
                </div>
            </>
        )
    }
}

export default NewsComponent