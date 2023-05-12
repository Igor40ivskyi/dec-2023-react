import React, {FC} from 'react';
import {IAlbum} from "../../interfaces/album.interface";

interface IProps {
    album: IAlbum;
}

const Album: FC<IProps> = ({album}) => {

    const {id, userId, title} = album;

    return (
        <div>
            <div>id - {id}</div>
            <div>userId - {userId}</div>
            <div>title - {title}</div>
        </div>
    );
};

export default Album;