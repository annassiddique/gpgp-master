import ContentManage from './ContentManage'
import ProjectImg from "../../assets/images/project.png"
import ChallengeImg from "../../assets/images/challenge.jpg"
import InvitationImg from "../../assets/images/invitation.png"

const contents = [
    {
        name: "The Project",
        description: "The Great Pacific Garbage Patch (GPGP) environmental art \n project is a collaboration between environmental artist, \n John Dahlsen, and InfinArt. The complete artwork \n comprises 2450 tiles, representing a recent satellite image \n of the Great Pacific Garbage Patch and draws attention to  \n the issue of plastic litter in the oceans, particularly the \n major garbage patches.",
        Btn: {
            name: "EXPLORE",
            link: ""
        },
        Img: ProjectImg,
        ImgPos : "left",
        id: 1
    },
    {
        name: "The Challenge",
        description: "Plastics are a major contributor to marine debris. The Great \n Pacific Garbage Patch is a pressing environmental issue that \n requires immediate attention. ",
        Btn: {
            name: "SUPPORT",
            link: ""
        },
        Img: ChallengeImg,
        ImgPos : "right",
        id: 2
    },
    {
        name: "The Invitation",
        description: "The Great Pacific Garbage Patch offers a unique opportunity \n to channel your artistic talents towards a project. Artists of \n all form - painters, sculptors, photographers are invited to \n submit their works for consideration.",
        Btn: {
            name: "TAKE PART",
            link: ""
        },
        Img: InvitationImg,
        ImgPos : "left",
        id: 3
    },
]

const HomeContent = () => {
    return (
        <>
            <ContentManage contents={contents} />
        </>
    )
}

export default HomeContent;