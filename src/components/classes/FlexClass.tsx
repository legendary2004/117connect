import { PropsWithChildren } from "react";
import SectionHeader from "../headers/SectionHeader";

interface flexClass extends PropsWithChildren {
    header: string;
    id: string;
}

const FlexClass: React.FC<flexClass> = ({header, id, children}) => {
    return (
        <div className="max-w-screen-xl mx-auto" id={id}>
            <SectionHeader header={header} />
            <div className="md:py-16 bg-white">  
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 lg:space-y-0 lg:inline-flex lg:gap-6 lg:items-center lg:gap-12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlexClass
