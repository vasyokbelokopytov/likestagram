import { Statistic, Tabs } from 'antd';
import { Settings } from '../components/Settings';
const { TabPane } = Tabs;

export const Profile: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" className="w-full h-full" type="card">
      <TabPane tab="Settings" key="1">
        <Settings />
      </TabPane>
      <TabPane tab="Statistic" key="2">
        <Statistic title="Total likes" value={200} />
      </TabPane>
    </Tabs>
  );
};
