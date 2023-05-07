import React, {FC} from 'react';
import './Header.css'
import {IUseState} from "../../types/useStateType";
import {PageEnum} from "../../constants/pageEnum";

interface IProps {
setChoice:IUseState<PageEnum>
}

const Header:FC<IProps> = ({setChoice}) => {
    return (
        <div className={'header'}>
            <button onClick={()=>setChoice(PageEnum.USERS)}>USERS</button>
            <button onClick={()=>setChoice(PageEnum.COMMENTS)}>COMMENTS</button>
            <button onClick={()=>setChoice(PageEnum.CARS)}>CARS</button>
        </div>
    );
};

export default Header;