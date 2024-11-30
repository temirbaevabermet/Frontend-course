import React, { useState, useEffect } from "react";

const FilterData = () => {
  const [data, setData] = useState([]); // Исходный список данных
  const [search, setSearch] = useState(""); // Строка поиска
  const [filteredData, setFilteredData] = useState([]); // Фильтрованный список

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
      setFilteredData(fakeData); // Изначально показываем все данные
    };

    fetchData();
  }, []); 
  
  // Обновляем фильтрованный список при изменении строки поиска
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);
  
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