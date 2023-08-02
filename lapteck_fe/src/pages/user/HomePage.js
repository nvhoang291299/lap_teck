import Collections from '../../components/Collections';
import HotDeal from '../../components/HotDeal';
import CarouselProduct from '../../components/CarouselProduct';

function HomePage() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <Collections />
                    <Collections />
                    <Collections />
                </div>
            </div>
            <CarouselProduct />
            <HotDeal />
            <CarouselProduct />
        </>
    )
}

export default HomePage;