import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { widgetActions } from '../../store';
function Header() {
const dispatch = useDispatch()
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const { initialwidget } = useSelector(store => store.widgets)
    const searchData = [];
    // traverse array for find all widget
    initialwidget.categories.forEach(element => {
        element.widgets.forEach(item => searchData.push(item.name))
    });

    //for suggestion
    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.length > 0) {
            const filteredSuggestions = searchData.filter((language) =>
                language.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleFinditem = (itemName) => {
        setQuery(itemName)
        dispatch(widgetActions.selectItem(itemName))
        setSuggestions([])
        // setQuery("")
    }

    return (
        <div className='bg-white grid grid-cols-2 px-5 py-2'>
            <div>
                <p>Home &gt;  <span className='font-bold'>Dashboard</span> </p>
            </div>
            <div className=''>
                <div className="search flex items-center gap-x-2 border-2 w-fit">
                    <IoMdSearch />
                    <input type="search" placeholder='search anything' onChange={handleChange} value={query} style={{ border: "none", outline: "none" }} />
                </div>
                {suggestions.length > 0 && (
                    <ul className='absolute bg-white p-4 z-10 right-86 mt-5 pb-5'>
                        {suggestions.map((suggestion, index) => (
                            <li className='border-b  w-44 hover:cursor-pointer hover:bg-rose-100' key={index} onClick={() => handleFinditem(suggestion)}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Header
