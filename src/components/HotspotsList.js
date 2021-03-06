import React from 'react'
import { Table, Card } from 'antd'
import round from 'lodash/round'
import { Content } from './AppLayout'

const HotspotsList = ({ hotspots, loading }) => (
  <Content style={{ marginBottom: 20 }}>
    <Card loading={loading} title={'Hotspots'}>
      <Table
        dataSource={hotspots}
        columns={hotspotColumns}
        size="small"
        rowKey="name"
        pagination={{ pageSize: 10, hideOnSinglePage: true }}
        scroll={{ x: true }}
      />
    </Card>
  </Content>
)

const hotspotColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (data, row) => (
      <a
        style={{ fontFamily: 'soleil, sans-serif' }}
        href={'/hotspots/' + row.address}
      >
        {data}
      </a>
    ),
  },
  {
    title: 'Location',
    dataIndex: 'geocode',
    key: 'location',
    render: (data) => (
      <span>
        {data.longCity}, {data.shortState}
      </span>
    ),
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
    render: (data) => round(data, 2),
  },
]

export default HotspotsList
