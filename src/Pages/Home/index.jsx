import Header from "../../components/Header";
import ImgIlus from "../../assets/images/illustration/ilustracao.png"
import IconArrow from "../../assets/images/icons/arrow-outward.png"
import TxtCicle from "../../assets/images/random/txt-circle.png"

const Home = () => {
    return (
        <>
            <Header/>
            <section className="max-w-[358px] h-dvh mx-auto relative">

                <div className="w-full h-[302px] rounded-xl border  border-grey-10 bg-url bg-[url('assets/images/illustration/hero-abstract.png')] bg-cotain bg-center">
                    <img src={ImgIlus} alt="imagem ilustrativa" className="w-full h-full"/>
                </div>

                <div className="absolute top-[221px]">
                    <div className="flex flex-col gap-4">
                        <div className="w-[117px] h-[117px] flex items-center justify-center relative bg-grey-08 rounded-full border-[1.08px] border-grey-15">

                            <div className="w-[53.18px] h-[53.18px] flex items-center justify-center rounded-full bg-grey-10 border border-grey-15">
                                <img src={IconArrow} alt="Icon Arrow" className="w-[13.6px] h-[13.6px]"/>
                            </div>

                            <img src={TxtCicle} alt="texto circular" className="w-[96.12px] h-[96.05px] absolute"/>
                        </div>

                        <h1 className="font-urbanist font-semibold text-[1.75rem] leading-[1.2] text-white">Discover Your Dream Property with Estatein</h1>

                        <p className="font-urbanist font-medium text-[0.875rem] leading-[1.5] text-grey-60">
                            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;