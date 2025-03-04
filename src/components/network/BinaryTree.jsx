import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { useNetwork } from '../../contexts/NetworkContext';

export default function BinaryTree({ userId }) {
  const { network } = useNetwork();
  const chartRef = useRef(null);

  const formatNetworkData = (userId) => {
    const user = network.find(u => u.id === userId);
    if (!user) return {};

    return {
      name: user.name,
      value: user.earnings,
      children: [
        user.leftLeg ? formatNetworkData(user.leftLeg) : null,
        user.rightLeg ? formatNetworkData(user.rightLeg) : null,
      ].filter(Boolean)
    };
  };

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: ${c}'
    },
    series: [{
      type: 'tree',
      data: [formatNetworkData(userId)],
      top: '10%',
      bottom: '10%',
      layout: 'orthogonal',
      symbol: 'circle',
      symbolSize: 40,
      itemStyle: {
        color: '#0ea5e9',
        borderColor: '#fff'
      },
      label: {
        position: 'inside',
        rotate: 0,
        verticalAlign: 'middle',
        align: 'center',
        fontSize: 14,
        color: '#fff'
      },
      leaves: {
        label: {
          position: 'inside',
          rotate: 0
        }
      },
      emphasis: {
        focus: 'descendant'
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }]
  };

  return (
    <div className="w-full h-[600px] bg-white rounded-lg shadow-lg p-4">
      <ReactECharts
        ref={chartRef}
        option={option}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}