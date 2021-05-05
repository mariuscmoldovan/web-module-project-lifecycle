import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    color: #daeceb;
    background-color: #7473d3;;
    width:30%;
    border: 3px solid  rgb(12, 10, 121);
    margin:auto;
    padding:1%;
    img{
        width:40%;
}
`;


const User = props =>{
    const {user, followers} = props;

    return(

        <StyledDiv className='userCard'>
            <img src={user.avatar_url} alt={user.login}/>
            <h2>Name: {user.login}</h2>
            <p>Login: {user.login}</p>
            <p>Following: {user.following}</p>
            <p>Followers: {user.followers}</p>
            <p>Url: {user.url}</p>

            <button onClick={() => 
            document.querySelector('.followersList').style.display === 'none' 
            ? document.querySelector('.followersList').style.display=''
            : document.querySelector('.followersList').style.display='none'}>Click!</button>
            
            <div className='followersList'>
            {followers.map(follower => {
                return (
                <div key={follower.id}>
                    <img src={follower.avatar_url} alt={follower.login}/>
                   <p>Login: {follower.login}</p> 
                </div>
            )
            })}
            </div>
        </StyledDiv>
    )
}


export default User