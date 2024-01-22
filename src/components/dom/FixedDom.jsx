import styled from "styled-components";

export const FixedDOM = () => {
    return (
        <FixedDOMWrapper id="fixed">
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Infinitis occultum declinare, venandi stoici. Delectus malo, probarentur pueri successerit collaudata. Putanda effici ducem delectari aeterno brute amicis quia inani. Quaerenda delapsa peccant legum democritus brevi dolendum, intellegaturque. Animal mortis gaudemus declinationem putamus.
            </span>
            <img src="/threejs.webp" alt="threejs-logo"></img>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Infinitis occultum declinare, venandi stoici. Delectus malo, probarentur pueri successerit collaudata. Putanda effici ducem delectari aeterno brute amicis quia inani. Quaerenda delapsa peccant legum democritus brevi dolendum, intellegaturque. Animal mortis gaudemus declinationem putamus.
            </span>
        </FixedDOMWrapper>
    )
}

const FixedDOMWrapper = styled.div`
flex-direction: column;
justify-content: center;
align-items: center;
width: 400px;
height: 400px;
position: fixed;
font-size: 8px;
top: 50%;
right: 0;
transform: translate(-50%, -50%);
display: none;
color: #fff;
z-index: 0;
pointer-events: none;
img {
    width: 100%;
}
`