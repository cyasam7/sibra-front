import React from "react";
import { Carousel } from "react-bootstrap";

interface Props {
    items: Array<ICarouselContent>;
}
export interface ICarouselContent {
    image: string;
    title: string;
    subtitle: string;
}

const CarouselComponent: React.FC<Props> = ({ items }) => {
    return (
        <Carousel style={{ maxHeight: "80vh" }}>
            {items.map((i, index) => (
                <Carousel.Item key={index}>
                    <div className="full-w full-h  relative">
                        <img
                            className="d-block w-100"
                            style={{ maxHeight: "80vh", objectFit: "fill" }}
                            src={i.image}
                            alt="Second slide"
                        />
                        <div
                            className="absolute bottom-0 top-0 left-0 right-0 flex flex-col justify-center items-center gap-8"
                            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                        >
                            <p className="text-white text-6xl">{i.title}</p>
                            <p className="text-white text-2xl">{i.subtitle}</p>
                            <button className="py-2 px-6 bg-green-800 rounded-full text-white border hover:border-none hover:border-0 hover:bg-green-700 ">
                                Llamanos
                            </button>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
