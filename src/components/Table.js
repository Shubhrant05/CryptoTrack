import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayTable from './DisplayTable';
const Table = () => {

    const [data, setData] = useState();

    const getData = async () => {
        try {
            let res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d')

            console.log(res)
            setData(res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <DisplayTable data={data?.data} />
        {console.log(data?.data, "test")}</div>
    )
}

export default Table