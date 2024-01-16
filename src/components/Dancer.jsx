import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export const Dancer = () => {
    const dancerRef = useRef(null);
    const { scene, animations } = useGLTF("models/dancer.glb");
    const { actions } = useAnimations(animations, dancerRef);

    useEffect(() => {
        actions["wave"].play();
    }, [actions]);

    const scroll = useScroll();
    console.log(scroll);
    useFrame(() => {
        console.log(scroll.offset);
    })

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