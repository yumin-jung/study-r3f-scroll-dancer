/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { IsEnteredAtom } from "../stores";
import { Loader } from "./Loader";
import gsap from "gsap";

let timeline;

export const Dancer = () => {
    const three = useThree();
    const isEntered = useRecoilValue(IsEnteredAtom);
    const dancerRef = useRef(null);
    const { scene, animations } = useGLTF("models/dancer.glb");
    const { actions } = useAnimations(animations, dancerRef);

    useEffect(() => {
        if (!isEntered) return;
        actions["wave"].play();
    }, [actions, isEntered]);

    useEffect(() => {
        if (!isEntered) return;
        if (!dancerRef.current) return;
        gsap.fromTo(
            three.camera.position,
            {
                x: -5,
                y: 5,
                z: 5,
            },
            {
                duration: 2.5,
                x: 0,
                y: 6,
                z: 12,
            }
        );
        gsap.fromTo(
            three.camera.rotation,
            {
                z: Math.PI,
            },
            {
                duration: 2.5,
                z: 0,
            }
        );
    }, [isEntered, three.camera.position, three.camera.rotation]);

    useEffect(() => {
        if (!isEntered) return;
        if (!dancerRef.current) return;
        timeline = gsap.timeline();
        timeline.from(
            dancerRef.current.rotation,
            {
                duration: 4,
                y: -4 * Math.PI
            },
            0.5
        )
    }, [isEntered]);


    const scroll = useScroll();

    useFrame(() => {
        if (!isEntered) return;
        timeline.seek(scroll.offset * timeline.duration());
    })

    if (isEntered) {
        return (
            <>
                <ambientLight
                    intensity={2}
                />
                <primitive
                    ref={dancerRef}
                    object={scene}
                    scale={0.05}
                />;
            </>
        )
    }
    return <Loader isCompleted />;
}