import { useState } from "react";
import Tabs from "./Tabs";
import PostTable from "./PostTable";

const PostTabs = () => {
  const [activTab, setActivTab] = useState(0);

  const handleTabs = (index) => {
    setActivTab(index);
  };

  return (
    <div className="mt-4">
      <ul className="flex gap-4">
        <Tabs
          id={0}
          title="Params"
          active={activTab === 0}
          onClick={handleTabs}
        />
        <Tabs
          id={1}
          title="Headers"
          active={activTab === 1}
          onClick={handleTabs}
        />
        <Tabs
          id={2}
          title="Body"
          active={activTab === 2}
          onClick={handleTabs}
        />
      </ul>
      {activTab === 0 && <PostTable />}
    </div>
  );
};

export default PostTabs;
