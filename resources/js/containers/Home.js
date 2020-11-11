import React from 'react';

function Home({ user, token }) {
    return (
        <div>
            <h1>Welcome {user.name}</h1>
        </div>
    );
}

export default Home;
