import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IUseState} from "../../types/useStateType";
import {IComment} from "../../interfaces/commentInterface";
import {commentService} from "../../services/commentService";

interface IProps {
    setComments: IUseState<IComment[]>;
}

const CommentForm: FC<IProps> = ({setComments}) => {

    const {register, handleSubmit, reset} = useForm<IComment>();

    const save: SubmitHandler<IComment> = async (comment) => {
        const {data} = await commentService.create(comment);
        setComments(prev => [...prev, data]);
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
};

export default CommentForm;