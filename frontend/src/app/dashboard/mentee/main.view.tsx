import { MentorshipCollectionByCategory } from "@/components/session-based-profile/mentorship-collection-by-category.view";


export default async function Main () {
    return (
        <main className=" w-full   overflow-y-scroll overflow-x-hidden fixed h-[calc(100%-98px)] sm:h-[calc(100%-112px)] top-[50px] sm:top-16  flex px-4 sm:px-8 fixed ">
            <div className="flex flex-col w-full ">
                <MentorshipCollectionByCategory category="Top 10"/>
                <MentorshipCollectionByCategory category="Web developer"/>
                <MentorshipCollectionByCategory category="UI/UX"/>
            </div>
        </main>
    )
}