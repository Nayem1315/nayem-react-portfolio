import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import portfolio from '../Components/allportfolios';
import { useState } from 'react';

const allCategories = ['All', ...new Set(portfolio.map(item => item.category))];

function PortfoliosPage() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolio);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(portfolio)
            return;
        }
        const filteredData = portfolio.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }

    return (
        <div className="PortfolioPage text-dark">
            <div className="title">
                <Tittle title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
