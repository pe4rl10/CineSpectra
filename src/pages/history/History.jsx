import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMediaHistory, getMovieRecommendations } from '../../utils/combineApiData';
import Spinner from '../../components/spinner/Spinner';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

const History = () => {
    const[dataApi, setDataApi] = useState(null);
    const[loading, setLoading] = useState(true);
    // const[media_type, setMediaType] = useState(null);
    // const[count] = useState(0);
    const { id } = useSelector((state) => state.home.authReducer.auth.user);    
    useEffect(() => {
        const fetchHistoryList = async () => {
            try {
                setLoading(true);
                const data = await getMediaHistory(id);
                setDataApi(data);
                setLoading(false);
                console.log(dataApi); // Make sure 'dataApi' is defined in your component
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
    
        fetchHistoryList();
    
    }, []);

    return (
        <div className='searchResultsPage'>
        {loading && <Spinner initial={true}/>}
        {!loading && (
            <ContentWrapper>
                {dataApi ? (
                <>
                    <div className="pageTitle">
                    {"History"}
                    </div>
                    <div className='content'>
                        {dataApi.data?.map((item, index) => {
                            return (
                            <MovieCard
                                key={index} 
                                data={item}
                                fromSearch={true}
                                mediaType='movie'/>
                            )
                        })}
                    </div>
                    
                </>
                ) : (
                <span className="resultNotFound">
                    Sorry, Results not found!
                </span>
                )}
            </ContentWrapper>
        )}
      </div>
    )
}

export default History