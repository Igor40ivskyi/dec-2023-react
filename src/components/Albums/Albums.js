import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axiosService";
import {mainService} from "../../services/mainService";
import {urls} from "../../constants/urls";
import Album from "../Album/Album";

const Albums = () => {

    let [albums,setAlbums] = useState([]);

    useEffect(() => {
        mainService.getAllAlbums(urls.albums).then(value => value.data).then(value => setAlbums(value));
    },[]);

    console.log(albums);
    return (
        <div style={{border:'2px solid black'}}>
            <h3>All albums</h3>
            {albums.map(value => <Album key={value.id} album={value}/>)}
        </div>
    );
};

export default Albums;