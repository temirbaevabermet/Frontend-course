import React, { useState } from "react";

const FilterData = () => {
  const [data, setData] = useState([]); // Исходный список данных
  const [search, setSearch] = useState(""); // Строка поиска

  return (
    <div>
      <h1>Data filter</h1>
    </div>
  );
};

export default FilterData;