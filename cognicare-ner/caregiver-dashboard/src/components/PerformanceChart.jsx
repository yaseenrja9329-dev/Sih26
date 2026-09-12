import { useState } from "react"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const performanceData = {
  "7": [
    { day: "Sep 6", accuracy: 70 },
    { day: "Sep 7", accuracy: 76 },
    { day: "Sep 8", accuracy: 74 },
    { day: "Sep 9", accuracy: 79 },
    { day: "Sep 10", accuracy: 80 },
    { day: "Sep 11", accuracy: 82 },
    { day: "Sep 12", accuracy: 84 },
  ],

  "14": [
    { day: "Aug 30", accuracy: 65 },
    { day: "Sep 2", accuracy: 69 },
    { day: "Sep 4", accuracy: 72 },
    { day: "Sep 6", accuracy: 70 },
    { day: "Sep 8", accuracy: 74 },
    { day: "Sep 10", accuracy: 80 },
    { day: "Sep 12", accuracy: 84 },
  ],

  "30": [
    { day: "Aug 14", accuracy: 62 },
    { day: "Aug 18", accuracy: 65 },
    { day: "Aug 22", accuracy: 68 },
    { day: "Aug 26", accuracy: 66 },
    { day: "Aug 30", accuracy: 65 },
    { day: "Sep 4", accuracy: 72 },
    { day: "Sep 8", accuracy: 74 },
    { day: "Sep 12", accuracy: 84 },
  ],
}

function PerformanceChart() {
  const [range, setRange] = useState("7")

  return (
    <div className="performance-chart">
      <div className="chart-header">
        <div>
          <h2>Performance Trend</h2>
          <p>Recent cognitive activity accuracy</p>
        </div>

        <select
          className="chart-filter"
          value={range}
          onChange={(event) => setRange(event.target.value)}
        >
          <option value="7">Last 7 days</option>
          <option value="14">Last 14 days</option>
          <option value="30">Last 30 days</option>
        </select>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={performanceData[range]}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip
              formatter={(value) => [`${value}%`, "Accuracy"]}
            />

            <Line
              type="monotone"
              dataKey="accuracy"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PerformanceChart