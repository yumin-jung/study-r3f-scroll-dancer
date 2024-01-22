import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../../stores";
import { useRef } from "react";
import { Scroll, useScroll } from "@react-three/drei";
import styled from "styled-components";
import { useFrame } from "@react-three/fiber";

export const MovingDOM = () => {
    const isEntered = useRecoilValue(IsEnteredAtom);
    const fixed = document.getElementById("fixed");
    const scroll = useScroll();
    const article01Ref = useRef(null);
    const article02Ref = useRef(null);
    const article03Ref = useRef(null);
    const article04Ref = useRef(null);
    const article08Ref = useRef(null);

    useFrame(() => {
        if (
            !isEntered ||
            !fixed ||
            !article01Ref.current ||
            !article02Ref.current ||
            !article03Ref.current ||
            !article04Ref.current ||
            !article08Ref.current
        ) return;

        article01Ref.current.style.opacity = `${1 - scroll.range(0, 1 / 8)}`;
        article02Ref.current.style.opacity = `${1 - scroll.range(1 / 8, 1 / 8)}`;
        article03Ref.current.style.opacity = `${scroll.curve(2 / 8, 1 / 8)}`;
        article04Ref.current.style.opacity = `${scroll.curve(3 / 8, 1 / 8)}`;
        if (scroll.visible(4 / 8, 3 / 8)) {
            fixed.style.display = 'flex';
            fixed.style.opacity = `${scroll.curve(4 / 8, 3 / 8)}`
        } else {
            fixed.style.display = "none";
        }
        article08Ref.current.style.opacity = `${scroll.range(7 / 8, 1 / 8)}`;
    })

    if (!isEntered) return null;

    return (
        <Scroll html>
            <ArticleWrapper ref={article01Ref}>
                <LeftBox>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                </LeftBox>
            </ArticleWrapper>
            <ArticleWrapper ref={article02Ref}>
                <RightBox>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                </RightBox>
            </ArticleWrapper>
            <ArticleWrapper ref={article03Ref}>
                Threejs R3F Drei Cannon
            </ArticleWrapper>
            <ArticleWrapper className="height-4" ref={article04Ref}>
                <RightBox>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                    <span>
                        Interactive Web
                    </span>
                </RightBox>
            </ArticleWrapper>
            <ArticleWrapper ref={article08Ref}>
                {`Mastered the Basics of R3F`}
                <Footer>
                    {`Basics of R3F`}
                    {`Basics of R3F`}
                    {`Basics of R3F`}
                    {`Basics of R3F`}
                </Footer>
            </ArticleWrapper>
        </Scroll>
    )
}

const ArticleWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
opacity: 0;
width: 100vw;
height: 100vh;
&.height-4{
    height: 400vh;
}
background-color: transparent;
color: #ffffff;
font-size: 24px;
padding: 40px;
`

const LeftBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: flex-start;
min-width: fit-content;
height: 400px;
& > span:nth-of-type(1) {
    font-size: 32px;
}
& > span:nth-of-type(2) {
    font-size: 36px;
}
& > span:nth-of-type(3) {
    font-size: 40px;
}
& > span:nth-of-type(4) {
    font-size: 44px;
}
& > span:nth-of-type(5) {
    font-size: 48px;
}
`

const RightBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-self: flex-end;
min-width: fit-content;
height: 400px;
& > span:nth-of-type(1) {
    font-size: 32px;
}
& > span:nth-of-type(2) {
    font-size: 36px;
}
& > span:nth-of-type(3) {
    font-size: 40px;
}
& > span:nth-of-type(4) {
    font-size: 44px;
}
& > span:nth-of-type(5) {
    font-size: 48px;
}
`

const Footer = styled.div`
position: absolute;
bottom: 10px;
font-size: 8px;
`