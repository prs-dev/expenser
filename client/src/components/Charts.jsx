import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ expenses }) => {
    const [chartData, setChartData] = useState(null)
    // console.log("expenses", expenses)

    // const dataFormat = () => {
    //     let data = []
    //     let prevCategory = ''
    //     for (let i = 0; i < expenses.length; i++) {
    //         const category = expenses[i].category
    //         let amt = 0
    //         for (let j = 0; j < expenses.length; j++) {
    //             if (category === expenses[j].category) {
    //                 amt += expenses[j].amt
    //             }
    //         }
    //         if (category !== prevCategory) data.push({
    //             [category]: amt
    //         })
    //         prevCategory = expenses[i].category
    //         // console.log("prevcate", prevCategory)
    //         // data = [...data, {[category]: amt}]
    //     }
    //     // console.log(data)
    //     const newData = {
    //         labels: data?.keys(),
    //         datasets: [
    //             {
    //                 label: 'amount spent',
    //                 data: data?.map(item => item.amt)
    //             },
    //         ]
    //     }
    //     setChartData(newData)
    // }

    // useEffect(() => {
    //     if (expenses.length !== 0) dataFormat()
    // }, [expenses])

    useEffect(() => {
        if (expenses) {
            let data = []
            let prevCategory = ''
            for (let i = 0; i < expenses.length; i++) {
                const category = expenses[i].category
                let amt = 0
                for (let j = 0; j < expenses.length; j++) {
                    if (category === expenses[j].category) {
                        amt += expenses[j].amt
                    }
                }
                if (category !== prevCategory) data.push({
                    [category]: amt
                })
                prevCategory = expenses[i].category
                // console.log("prevcate", prevCategory)
                // data = [...data, {[category]: amt}]
            }
            // console.log(data)
            const newData = {
                labels: data.map(item => Object.keys(item)[0]) || [],
                datasets: [
                    {
                        label: 'amount spent',
                        data: data?.map(item => Object.values(item)[0]) || [],
                        backgroundColor: [...new Array(data.length)].map(item => `rgba(${Math.floor(Math.random(10) * 100)}, ${Math.floor(Math.random(10) * 100)}, ${Math.floor(Math.random(10) * 100)}, 0.2)`)
                    },
                ]
            }
            setChartData(newData)
        }
    }, [expenses])


    // const data = {
    //     labels: expenses ? expenses.map(item => item?.category) : [],
    //     datasets: [
    //         {
    //             label: 'amount spent',
    //             data: chartData?.map(item => item.amt)
    //         },
    //     ],
    // };

    // console.log("data", expenses?.[2]?.category?.includes("groceries"))
    // console.log("cahrta", chartData && chartData.map(item => Object.keys(item)[0]))
    console.log("chart", chartData)
    return (
        <div>
            {chartData && <Pie data={chartData} />}
        </div>
    )
}

export default Charts