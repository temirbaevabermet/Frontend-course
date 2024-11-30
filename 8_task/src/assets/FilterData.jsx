import React, { useState, useEffect } from "react";

const FilterData = () => {
  const [data, setData] = useState([]); // Исходный список данных
  const [search, setSearch] = useState(""); // Строка поиска

  useEffect(() => {
    const fetchData = async () => {
      // Создаём имтацию данных(рандомные 10 элементов)
      const fakeData = [
        "Sunrise",
        "Dream",
        "Mountain",
        "River",
        "Courage",
        "Freedom",
        "Star",
        "Harmony",
        "Whisper",
        "Ocean",
      ];
      setData(fakeData);
    };

    fetchData();
  }, []); 
  
  return (
    <div>
      <h1>Data filter</h1>
    </div>
  );
};

export default FilterData;