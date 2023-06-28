import { Component } from "react";
import { Facebook } from "react-content-loader";
import { fetchArticlesWithQuery } from "../../services";



const Loader = () => <Facebook/>

class List extends Component {
    state = {
        articles: [],
        isLoading: false,
        error: null
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.searchValue !== this.props.searchValue) {
            return true
        } else {
            return false
        }
    }

    async componentDidUpdate() {
        const { searchValue } = this.props

        try {
            const articles = await fetchArticlesWithQuery(searchValue)
            console.log(articles)
            this.setState({ articles })
        } catch (error) {
            this.setState({ error })
        } finally {
            this.setState({ isLoading: false })
        }     
    }


    render() {
        const { articles, error, isLoading } = this.state

        if (error) {
            return (
            <div>Oops, something went wrong</div>
            )
        }

        if (isLoading) {
            return (
                <Loader/>
            )
        }


        return (
        <ul>
            {articles.map(({ objectID, url, title, points }) => (
                <li key={objectID}>
                    <a href={url} target="_blank" rel="noreferrer noopner">
                        {title}
                    </a>
                    <h6>Points: {points}</h6>
                </li>
            ))
            }
        </ul>)
    }
}


class ArticlesList extends Component {
    state = {
        searchValue: "",
        articles: [],
        isLoading: false,
        error: 0
    }

    handleChange = e => {
        const {value, name } = e.target
        this.setState({ [name]: value })
    }



    render() {
        const { searchValue } = this.state

       

        return (
            <div>
                <h3>List</h3>         
                <input onChange={this.handleChange} type="text" name="searchValue" value={searchValue}/>      
                <List searchValue={searchValue}/> 
            </div>
        )
    }
}

export default ArticlesList