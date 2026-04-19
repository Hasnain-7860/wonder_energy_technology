import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function TokenomicsChart() {
  const data = {
    labels: [
        'Marketing',
        'Secured Fund',
      'Partnership',
      'Team & Advisors',
      'Treasure',
      'Private Sale',
      'Community',
      'Exchange & Liquidity',
      'Ecosystem',
    ],
    datasets: [
      {
        data: [12, 8, 8, 10, 20, 1,5, 18,18],
        backgroundColor: [
          '#21D4D9',
          '#5EDFE4',
          '#3FC3C9',
          '#2A9CA3',
          '#4FD2D8',
          '#66E6EB',
          '#1FB5BB',
          '#A6F3F6',
          '#1ECAD0',
        ],
        borderWidth: 0,
        hoverOffset: 12,
      },
    ],
  }

  const options = {
    responsive: true,
    cutout: '52%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="w-[380px] sm:w-[600px] lg:w-[609px]">
        <Doughnut data={data} options={options} />
      </div>

      <div className="absolute flex flex-col items-center justify-center mt-50 text-white">
        <p className="text-[16px] tracking-[3px] text-white  font-twobit-only">
          TOTAL SUPPLY
        </p>
        <p className="text-[16px] font-semibold text-white">
          300,000,000
        </p>
      </div>

    </div>
  )
}