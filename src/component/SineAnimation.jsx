/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSpring, animated } from "@react-spring/web";
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

const SineAnimation = () => {
  const [degrees, setDegrees] = useState([]);
  const [sineValues, setSineValues] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prev) => (prev >= 1 ? 0 : prev + 0.01));
    };
    const interval = setInterval(updateProgress, 300);
    return () => clearInterval(interval);
  }, []);

  const { animatedProgress } = useSpring({
    animatedProgress: progress,
    config: { duration: 6000 },
  });

  useEffect(() => {
    const newDegrees = Array.from({ length: 181 }, (_, i) => 180 + i); // 180 to 360 degrees
    const newRadians = newDegrees.map((deg) => (deg * Math.PI) / 180); // Convert degrees to radians
    const newSineValues = newRadians.map((rad) => Math.sin(rad)); // Calculate sine values
    setDegrees(newDegrees);
    setSineValues(newSineValues);
  }, []);

  const data = {
    labels: degrees.slice(0, Math.floor(progress * degrees.length)),
    datasets: [
      {
        label: "Sine Wave",
        data: sineValues.slice(0, Math.floor(progress * sineValues.length)),
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

  return (
    <animated.div className="bg-white rounded-lg mb-2 ">
      <animated.div style={{ color: animatedProgress }}>
        <Line data={data} options={options} />
      </animated.div>
    </animated.div>
  );
};

export default SineAnimation;
