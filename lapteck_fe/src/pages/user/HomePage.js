import Collections from '../../components/Collections';
import HotDeal from '../../components/HotDeal';
import CarouselProduct from '../../components/CarouselProduct';

function HomePage() {
    return (
        <>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <Collections />
                        <Collections />
                        <Collections />
                    </div>
                </div>
            </div>
            <CarouselProduct />
            <HotDeal />
            <CarouselProduct />
        </>
    )
}

export default HomePage;