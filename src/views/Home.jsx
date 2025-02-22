import { AreaSeries, LineSeries, CandlestickSeries, createChart, ColorType } from 'lightweight-charts';
import { useEffect, useRef, useState, Suspense } from 'react';
import './Home.css';
import FancyLoader from '../components/FancyLoader';

export const AreaChartComponent = ({ data }) => {
    const chartContainerRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: '#f8f9fa' }, // Light gray background
                textColor: '#333',
            },
            width: chartContainerRef.current.clientWidth,
            height: 500,
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addSeries(AreaSeries, {
            lineColor: '#6a89cc', // Soft blue
            topColor: 'rgba(106, 137, 204, 0.4)', // Light blue fade
            bottomColor: 'rgba(106, 137, 204, 0.1)',
        });
        newSeries.setData(data);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data]);

    return <div ref={chartContainerRef} />;
};

export const CandlestickChartComponent = ({ data }) => {
    const chartContainerRef = useRef();

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 300,
            layout: {
                background: { color: '#ffffff' },
                textColor: '#333',
            },
        });

        const candleSeries = chart.addSeries(CandlestickSeries, {
            upColor: '#77dd77', // Soft green for up
            downColor: '#ff6961', // Soft red for down
            borderUpColor: '#77dd77',
            borderDownColor: '#ff6961',
            wickUpColor: '#cfcfcf',
            wickDownColor: '#cfcfcf',
        });

        candleSeries.setData(data);

        return () => chart.remove();
    }, [data]);

    return <div ref={chartContainerRef} className="chart" />;
};

export const LineChartComponent = ({ data }) => {
    const chartContainerRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: '#f8f9fa' },
                textColor: '#333',
            },
            width: chartContainerRef.current.clientWidth,
            height: 300,
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addSeries(LineSeries, {
            lineColor: '#ffb347', // Soft orange
        });
        newSeries.setData(data);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data]);

    return <div ref={chartContainerRef} />;
};

const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 30.22 },
    { time: '2018-12-29', value: 29.87 },
    { time: '2018-12-30', value: 31.75 },
    { time: '2018-12-31', value: 32.90 },
    { time: '2019-01-01', value: 33.55 },
    { time: '2019-01-02', value: 32.10 },
    { time: '2019-01-03', value: 31.40 },
    { time: '2019-01-04', value: 30.95 },
    { time: '2019-01-05', value: 29.80 },
    { time: '2019-01-06', value: 30.15 },
    { time: '2019-01-07', value: 31.50 },
    { time: '2019-01-08', value: 32.80 },
    { time: '2019-01-09', value: 33.20 },
    { time: '2019-01-10', value: 32.00 },
    { time: '2019-01-11', value: 31.00 },
    { time: '2019-01-12', value: 30.20 },
    { time: '2019-01-13', value: 29.50 },
    { time: '2019-01-14', value: 28.70 },
    { time: '2019-01-15', value: 27.90 },
    { time: '2019-01-16', value: 28.20 },
    { time: '2019-01-17', value: 29.10 },
    { time: '2019-01-18', value: 30.50 },
    { time: '2019-01-19', value: 31.80 },
    { time: '2019-01-20', value: 32.90 },
    { time: '2019-01-21', value: 33.75 },
    { time: '2019-01-22', value: 34.10 },
    { time: '2019-01-23', value: 33.50 },
    { time: '2019-01-24', value: 32.80 },
    { time: '2019-01-25', value: 31.75 },
    { time: '2019-01-26', value: 30.90 },
    { time: '2019-01-27', value: 30.10 },
    { time: '2019-01-28', value: 29.50 },
    { time: '2019-01-29', value: 28.90 },
    { time: '2019-01-30', value: 28.50 },
    { time: '2019-01-31', value: 28.00 },
    { time: '2019-02-01', value: 28.40 },
    { time: '2019-02-02', value: 29.00 },
    { time: '2019-02-03', value: 29.80 },
    { time: '2019-02-04', value: 30.50 },
    { time: '2019-02-05', value: 31.10 },
    { time: '2019-02-06', value: 31.80 },
    { time: '2019-02-07', value: 32.20 },
    { time: '2019-02-08', value: 32.80 },
    { time: '2019-02-09', value: 33.50 },
    { time: '2019-02-10', value: 34.00 },
];


const candlestickData = [
    { time: '2024-02-10', open: 100, high: 110, low: 95, close: 105 },
    { time: '2024-02-11', open: 105, high: 115, low: 100, close: 110 },
];

function transformData(sourceArray) {
    return sourceArray.map(item => ({
        time: new Date(item.ds).toISOString().split('T')[0], // Extracts YYYY-MM-DD from the date
        value: parseFloat(item.yhat.toFixed(2)) // Rounds the value to 2 decimal places
    }));
}

// Example source array

// // Transform the data
// const transformedData = transformData(sourceArray);
// console.log(transformedData);


function App() {
    const timeLine = ['1 Week', '1 Month', '3 Months', '6 Months', '1 Year'];
    const sourceArray = [
        {
            "ds": "Sat, 01 Mar 2025 00:00:00 GMT",
            "yhat": 86.08315593759738,
            "yhat_lower": 84.55900397767802,
            "yhat_upper": 87.6337141092452
        },
        {
            "ds": "Sun, 02 Mar 2025 00:00:00 GMT",
            "yhat": 86.09510814847704,
            "yhat_lower": 84.54617108801821,
            "yhat_upper": 87.66995145373424
        },
        {
            "ds": "Mon, 03 Mar 2025 00:00:00 GMT",
            "yhat": 86.19472063229472,
            "yhat_lower": 84.584081883012,
            "yhat_upper": 87.82085365621782
        },
        {
            "ds": "Tue, 04 Mar 2025 00:00:00 GMT",
            "yhat": 86.19056846218422,
            "yhat_lower": 84.69384817213584,
            "yhat_upper": 87.82422099430475
        },
        {
            "ds": "Wed, 05 Mar 2025 00:00:00 GMT",
            "yhat": 86.24776480620191,
            "yhat_lower": 84.56931540460472,
            "yhat_upper": 87.67449816250573
        }
    ];
    const transformedData = transformData(sourceArray);
    console.log(transformedData);
    const [selectedTimeline, setSelectedTimeline] = useState('1 Week');
    const [recommendations, setRecommendations] = useState(['1','2','3']);

    // const [data, setData] = useState(transformedData);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const response = await fetch(`https://api.jsonbin.io/v3/b/67b92406e41b4d34e4978f9d`);
    //             const result = await response.json();
    //             setData(result.record); // Assuming the response is in the correct format
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //         setLoading(false);
    //     };

    //     fetchData();
    // }, [selectedTimeline]);
    
    return (
        <div id="chartsContainer">
            <div className='chart_component'>
            <Suspense fallback={<FancyLoader />}>
                    {loading ? <FancyLoader /> : <AreaChartComponent data={transformedData} />}
                </Suspense>
                {transformedData.length > 0 && <div className="timeline-container">
                    {timeLine.map((timeline, index) => (
                        <button
                            key={index}
                            className={selectedTimeline === timeline ? 'selected' : ''}
                            onClick={() => setSelectedTimeline(timeline)}
                        >
                            {timeline}
                        </button>
                    ))}
                </div>}
            </div>
            
            {/* <div className='chart_component'>
                <LineChartComponent data={initialData} />
                <div className="timeline-container">
                    {timeLine.map((timeline, index) => (
                        <button
                            key={index}
                            className={selectedTimeline === timeline ? 'selected' : ''}
                            onClick={() => setSelectedTimeline(timeline)}
                        >
                            {timeline}
                        </button>
                    ))}
                </div>
            </div> */}
             <div className="recommendations-container">
            <h1>Recommendation Panel</h1>
      {recommendations.map((recommendation, index) => (
        <div key={index} className="recommendation-card">
          {recommendation}
        </div>
      ))}
    </div>
        </div>
    );
}

export default App;