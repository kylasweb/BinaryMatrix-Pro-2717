import { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

export default function NetworkGraph({ data }) {
  const chartRef = useRef(null);

  const formatGraphData = () => {
    const nodes = data.map(user => ({
      name: user.name,
      value: user.earnings,
      symbolSize: 50
    }));

    const links = data
      .filter(user => user.sponsorId !== 'ADMIN')
      .map(user => ({
        source: data.findIndex(u => u.id === user.sponsorId),
        target: data.findIndex(u => u.id === user.id)
      }));

    return { nodes, links };
  };

  const { nodes, links } = formatGraphData();

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: ${c}'
    },
    series: [{
      type: 'graph',
      layout: 'force',
      data: nodes,
      links: links,
      roam: true,
      label: {
        show: true,
        position: 'right'
      },
      force: {
        repulsion: 100
      }
    }]
  };

  return (
    <ReactECharts
      ref={chartRef}
      option={option}
      style={{ height: '400px' }}
    />
  );
}