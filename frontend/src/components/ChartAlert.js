import { Component } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBarChartFill } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = [5, 6, 7, 4, 3, 5, 6.5];

class ChartAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5,
        }
    }

    options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Khu vực 1',
            },
        },
    };

    data = {
        labels,
        datasets: [
            {
                id: 1,
                label: 'Dataset1',
                data: data,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    render() {
        return (
            <div className=" bg-gray-200">
                <div className="text-black">
                    <div className="flex gap-3 w-[1330px] h-24 pt-8">
                        <div className="flex gap-3 ml-2">
                            <BsBarChartFill size={25} />
                            <span className="font-bold text-xl">Thống kê</span>
                        </div>
                        <div className="flex gap-8 ml-auto mr-8">
                            <div className="flex gap-3">
                                <AiOutlineSearch size={20} />
                                <BiBell size={20} />
                            </div>
                            <div className="flex gap-3">
                                <span>Admin</span>
                                <div className="w-10 h-10 rounded-full border-red-500 border-2 -translate-y-2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white h-[720px] mx-8">
                    <div className="flex pt-5">
                        <span className="font-bold ml-3">Chart</span>
                        <div className="flex gap-8 text-[14px] ml-auto mr-5">
                            <span>Sort</span>
                            <span>Filter</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Bar options={this.options} data={this.data} />;
                    </div>
                </div>
            </div>
        )
    }
}

export default ChartAlert;