import SectionHeader from "../../components/headers/SectionHeader"
import HowItWorksItem from "../../components/listItems/HowItWorksItem"

const Home_5 = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionHeader header="How it works? " />
            <div className="px-5 grid md:grid-cols-3 place-items-center gap-y-4 md:gap-y-0 md:gap-x-12">
                <HowItWorksItem before="before:content-['Step-1']" after="before:content-['Step-1-details']" image={require('../../components/images/1.png')}/>
                <HowItWorksItem before="before:content-['Step-2']" after="before:content-['Step-2-details']" image={require('../../components/images/2.png')}/>
                <HowItWorksItem before="before:content-['Step-3']" after="before:content-['Step-3-details']" image={require('../../components/images/3.png')}/>
            </div>
        </div>
    )
}

export default Home_5