import Cards from "../components/Cards";
import HomeButton from "../components/HomeButton";
import TabBar from "../components/TabBar";
import statsData from "../data/stats.json";

const Challenge2 = () => {
    return (
        <div className="stats-container">
            <div className="stats-section">
                {statsData.map((item, index) => (
                    <div key={`stats-${index}`} className="card-section">
                        <span className="card-section-title">
                            {item.total}
                            <span className="card-section-sub-title">
                                {item.category}
                            </span>
                        </span>
                        <Cards>
                            <h4 className="stats-title">
                                By {item.filteredBy}
                            </h4>
                            <TabBar category={item.category} data={item.list} />
                        </Cards>
                    </div>
                ))}
            </div>
            <HomeButton />
        </div>
    );
};

export default Challenge2;
