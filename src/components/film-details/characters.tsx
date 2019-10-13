import React from "react";
import { Table } from "antd";
import PeopleController from "../../services/people-controller";
import { lastUrlSegment } from "../../lib/url-helper";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    className: "text-white",
    sorter: (a, b) => a.name.length - b.name.length
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    className: "text-white",
    width: "150px",
    filters: [
      {
        text: "Male",
        value: "male"
      },
      {
        text: "Female",
        value: "female"
      },
      {
        text: "Hermaphrodite",
        value: "hermaphrodite"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      console.log("filter-val", value);
      return record.gender === value;
    },
    sorter: (a, b) => a.name.length - b.name.length,
    render: text => {
      switch (text.toLowerCase()) {
        case "male":
          return "M";
        case "female":
          return "F";
        case "hermaphrodite":
          return "H";
        default:
          return text;
      }
    }
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
    className: "text-white",
    width: "150px",
    sorter: (a, b) => a.name.length - b.name.length
  }
];

const TableFooter = currentPageData => {

  const calculateHeight = currentPageData => {
    let cm = currentPageData.reduce((prev, current) => ({
      height: parseInt(prev.height) + parseInt(current.height)
    }));
    let inches = (cm.height * 0.393701).toFixed(0);
    let feet = Math.floor(parseInt(inches) / 12);

    return { cm: cm.height, inches, feet };
  };

  let height =
    currentPageData.length > 0
      ? calculateHeight(currentPageData)
      : { cm: 0, inches: 0, feet: 0 };

  return (
    <div className="table-header">
      <div>
        <h4 className="text-black">
          Total:{" "}
          <span className="font-sans text-base">{currentPageData.length}</span>
        </h4>
      </div>
      <div>
        <div>
          <h4 className="text-black">
            Total Height:{" "}
            <span className="font-sans text-base">
              {height.cm}cm ({height.feet}ft/{height.inches}in)
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default function Characters(props) {
  const [loading, setLoading] = React.useState(false);
  const [people, setPeople] = React.useState([]);
  const { characters } = props;

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let res = await new PeopleController().getPeople(characters);
      setLoading(false);
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
        bordered={false}
        dataSource={people}
        columns={columns}
        loading={loading}
        rowKey={record => lastUrlSegment(record.url)}
        footer={TableFooter}
      />
    </div>
  );
}
