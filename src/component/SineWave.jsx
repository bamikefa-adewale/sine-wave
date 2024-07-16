import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SineWave = () => {
  const degrees = Array.from({ length: 181 }, (_, i) => 180 + i); // 180 to 360 degrees
  const radians = degrees.map((deg) => (deg * Math.PI) / 180); // Convert degrees to radians
  const sineValues = radians.map((rad) => Math.sin(rad)); // Calculate sine values

  const data = {
    labels: degrees,
    datasets: [
      {
        label: "Sine Wave",
        data: sineValues,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Degrees",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sine Value",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SineWave;
