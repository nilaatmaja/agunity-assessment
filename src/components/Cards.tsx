type Props = {
    children: React.ReactNode;
};

const Cards = ({ children }: Props) => {
    return <div className="card-container">{children}</div>;
};

export default Cards;
