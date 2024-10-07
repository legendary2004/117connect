import SectionHeader from "../../components/headers/SectionHeader"
import AccordionItem from "../../components/listItems/AccordionItem"

const Home_6 = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <SectionHeader header="Our team" />
            <div className="grid md:grid-cols-2 place-items-center gap-x-10 gap-y-5" id="accordion-collapse" data-accordion="collapse">
                <AccordionItem />
                <AccordionItem />
                <AccordionItem />
                <AccordionItem />
                <AccordionItem />
                <AccordionItem />
                <AccordionItem />
                <AccordionItem />
                <AccordionItem />
            </div>
        </div>
    )
}

export default Home_6