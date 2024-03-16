import React from 'react';
import {Helmet} from "react-helmet";
import MainPage from '../MainPage';

function Home() {
    return (
		<React.Fragment> 
			<Helmet> 
				<title>Srushti Patel</title>
				<meta name="description" content="Personal portfolio website for showcases knowledge and skills." />
				<meta name="keywords" content="Personal Portfolio" />
			</Helmet>
            <MainPage />
        </React.Fragment>
    )
}

export default Home
