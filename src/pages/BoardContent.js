import React, { useState, useEffect } from 'react'
import moment from 'moment';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';

const BoardContent = () => {

    const [data, setData] = useState({});

    const [searchParams] = useSearchParams();

    const query = searchParams.get('noticeNum');

    useEffect(() => {
        axios({
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'get',
            url: '/api/admin/selectNotice',
            params: {
                notice_num: query
            }

        })
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                console.log(data);
            })
            .catch((error) => {
                alert('에러 발생');
            });
    }, [])

    return (
        <section className='BoardContent inner'>
            <h2 className='tit'>{data.notice_title}</h2>
            <div className='writeData'>{data.user_name} / {moment(data.notice_date).format('YYYY-MM-DD')}</div>
            <div className='des'>{data.notice_content}</div>
        </section>
    )
}

export default BoardContent