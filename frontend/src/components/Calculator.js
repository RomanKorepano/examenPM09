import React, { useState } from 'react';
import './Calculator.css'; // Импортируем стили

const Calculator = () => {
    const [area, setArea] = useState('');
    const [floors, setFloors] = useState('');
    const [foundation, setFoundation] = useState('');
    const [wallMaterial, setWallMaterial] = useState('');
    const [roofType, setRoofType] = useState('');
    const [options, setOptions] = useState({
        balcony: false,
        terrace: false,
        garage: false,
    });
    const [totalCost, setTotalCost] = useState(null);
    const [costBreakdown, setCostBreakdown] = useState({});

    const handleOptionChange = (event) => {
        const { name, checked } = event.target;
        setOptions((prevOptions) => ({
            ...prevOptions,
            [name]: checked,
        }));
    };

    const calculateCost = () => {
        let cost = area * 1000; // базовая стоимость за квадратный метр
        let breakdown = {
            'Базовая стоимость': area * 1000,
            'Стоимость этажей': 0,
            'Стоимость фундамента': 0,
            'Стоимость материала стен': 0,
            'Стоимость крыши': 0,
            'Стоимость дополнительных опций': 0,
        };

        if (floors > 1) {
            breakdown['Стоимость этажей'] += (floors - 1) * 5000; // добавляем стоимость за этажи
        }

        if (foundation === 'плитный') {
            breakdown['Стоимость фундамента'] += 15000;
        } else if (foundation === 'столбчатый') {
            breakdown['Стоимость фундамента'] += 10000;
        }

        if (wallMaterial === 'кирпич') {
            breakdown['Стоимость материала стен'] += 20000;
        } else if (wallMaterial === 'дерево') {
            breakdown['Стоимость материала стен'] += 10000;
        }

        if (roofType === 'скатная') {
            breakdown['Стоимость крыши'] += 5000;
        }

        if (options.balcony) {
            breakdown['Стоимость дополнительных опций'] += 7000;
        }
        if (options.terrace) {
            breakdown['Стоимость дополнительных опций'] += 10000;
        }
        if (options.garage) {
            breakdown['Стоимость дополнительных опций'] += 15000;
        }

        // Суммируем все статьи расходов
        cost += Object.values(breakdown).reduce((acc, val) => acc + val, 0);
        
        setTotalCost(cost);
        setCostBreakdown(breakdown);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h2>Строительный калькулятор</h2>
            <form>
                <div>
                    <label>
                        Площадь (кв. м.):
                        <input
                            type="number"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Количество этажей:
                        <input
                            type="number"
                            value={floors}
                            onChange={(e) => setFloors(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Тип фундамента:
                        <select value={foundation} onChange={(e) => setFoundation(e.target.value)} required>
                            <option value="">Выберите тип</option>
                            <option value="ленточный">Ленточный</option>
                            <option value="плитный">Плитный</option>
                            <option value="столбчатый">Столбчатый</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Материал стен:
                        <select value={wallMaterial} onChange={(e) => setWallMaterial(e.target.value)} required>
                            <option value="">Выберите материал</option>
                            <option value="кирпич">Кирпич</option>
                            <option value="дерево">Дерево</option>
                            <option value="газобетон">Газобетон</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Тип крыши:
                        <select value={roofType} onChange={(e) => setRoofType(e.target.value)} required>
                            <option value="">Выберите тип</option>
                            <option value="плоская">Плоская</option>
                            <option value="скатная">Скатная</option>
                        </select>
                    </label>
                </div>

                <h3>Дополнительные опции:</h3>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="balcony"
                            checked={options.balcony}
                            onChange={handleOptionChange}
                        />
                        Балкон
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="terrace"
                            checked={options.terrace}
                            onChange={handleOptionChange}
                        />
                        Терраса
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="garage"
                            checked={options.garage}
                            onChange={handleOptionChange}
                        />
                        Гараж
                    </label>
                </div>

                <button type="button" onClick={calculateCost}>
                    Рассчитать стоимость
                </button>

                {totalCost !== null && (
                    <div className="result">
                        <h3>Итоговая стоимость:</h3>
                        <p>{totalCost} руб.</p>

                        <h4>Разбивка по статьям расходов:</h4>
                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                            {Object.entries(costBreakdown).map(([key, value]) => (
                                value > 0 && (
                                    <li key={key}>
                                        {key}: {value} руб.
                                    </li> 
                                )
                            ))}
                        </ul> 
                    </div> 
                )}
                
            </form> 
        </div> 
    );
};

export default Calculator;