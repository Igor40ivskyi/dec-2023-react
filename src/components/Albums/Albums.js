import React, {useEffect, useState} from 'react';
import {albumsService} from "../../services/albumsService";
import Album from "../Album/Album";

const Albums = () => {

    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(value => value.data).then(value => setAlbums(value));
    }, []);

    return (
        <div>
            {albums.map(value => <Album key={value.id} album={value}/>)}
        </div>
    );
};

export default Albums;