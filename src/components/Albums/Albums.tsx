import React, {FC, useEffect, useState} from 'react';
import {IAlbum} from "../../interfaces/album.interface";
import {unitedService} from "../../services/united.service";
import Album from "../Album/Album";

const Albums:FC = () => {

    const [albums,setAlbums] = useState<IAlbum[]>([]);

    useEffect(() => {
        unitedService.getAllAlbums().then(value => value.data).then(value => setAlbums(value));
    },[]);

    return (
        <div>
            {albums.map(value => <Album key={value.id} album={value}/>)}
        </div>
    );
};

export default Albums;