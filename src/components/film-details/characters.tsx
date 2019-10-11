import React from "react";
import { Table } from "antd";
import PeopleController from "../../services/people-controller";
import { lastUrlSegment } from "../../lib/url-helper";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    className: "text-white"
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    className: "text-white"
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
    className: "text-white"
  }
];

export default function Characters(props) {
  const { characters } = props;
  const [loading, setLoading] = React.useState(false);
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await new PeopleController().getPeople(characters);
      setLoading(false);
      console.log(res);

      if (res) {
        setPeople(res.filter(data => data.data !== "undefined"));
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <h5 className="mb-4">Characters</h5>
      <Table
        dataSource={people}
        columns={columns}
        loading={loading}
        rowClassName={() => "hover:text-black"}
        rowKey={record => lastUrlSegment(record.url)}
      />
    </div>
  );
}
