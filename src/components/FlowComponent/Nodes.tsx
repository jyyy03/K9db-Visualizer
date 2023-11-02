const initNodes = [
  {
    id: "1",
    type: "datasubjectnode",
    data: { label: "example_data_subject", handleCount: 2 },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    type: "nondatasubjectnode",
    data: { label: "example_table1", handleCount: 2 },
    position: { x: 150, y: 100 },
  },
  {
    id: "3",
    type: "nondatasubjectnode",
    data: { label: "example_table2", handleCount: 2 },
    position: { x: 0, y: 180 },
  },
  {
    id: "4",
    type: "nondatasubjectnode",
    data: { label: "example_table3", handleCount: 2 },
    position: { x: 250, y: 200 },
  },
  {
    id: "5",
    type: "nondatasubjectnode",
    data: { label: "example_table4", handleCount: 2 },
    position: { x: 400, y: 300 },
  },
];

const Nodes = function (dataSubject: any[], otherTables: any[]) {
  if (dataSubject.length === 0) {
    return initNodes;
  }

  let ret: any[] = [];
  for (const sub of dataSubject) {
    ret.push({
      id: sub.tableName,
      type: "datasubjectnode",
      data: { label: sub.tableName, handleCount: 2 },
      position: { x: sub.posX, y: sub.posY },
    });
  }

  for (const sub of otherTables) {
    ret.push({
      id: sub.tableName,
      type: "nondatasubjectnode",
      data: { label: sub.tableName, handleCount: 2 },
      position: { x: sub.posX, y: sub.posY },
    });
  }

  return ret;
};

export default Nodes;