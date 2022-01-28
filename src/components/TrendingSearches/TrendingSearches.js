import { useState, useEffect} from "react";
import getTrendingTerms from "../../services/getTrendingTerms";
import Category from "../Category";

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendingTerms()
        .then( trends => {
            setTrends(trends)
        })
    }, [])

    return <Category name="Tendencias" options={trends} />
}
