import React from "react";

type tabListType = {
    total: string;
    name: string;
};

type Props = {
    category: string;
    data: tabListType[];
};

const TabBar = ({ category = "men", data }: Props) => {
    const style: { [key: string]: string } = {
        men: "green",
        women: "purple",
        youth: "blue",
    };

    return (
        <div className="tab-bar-container">
            {data.map((item, index) => (
                <div
                    key={`tab-bar-item-${index}`}
                    className={`tab-bar-item ${style[category]}`}
                >
                    <span className="tab-bar-count">{item.total}</span>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default TabBar;
