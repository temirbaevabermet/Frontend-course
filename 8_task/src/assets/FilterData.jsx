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
      <input
        type="text"
        placeholder="Enter text to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Обновляем состояние строки поиска
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }} //Добавляем немного дизайна
      />
    </div>
  );
};

export default FilterData;