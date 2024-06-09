'use client'
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react"



interface ModalContextProps {
    children: ReactNode;
}

interface ModalContextValue {
    isModalOpen: string;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export const useContextModal = (): ModalContextValue => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModaltContext must be used within a ModalWishlistProvider');
    }
    return context;
};

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState("");

    const openModal = useCallback(() => {
        setIsModalOpen("show");
    }, []);

    const closeModal = useCallback(() => {
        setIsModalOpen("hide");
    }, []);

    const contextValue: ModalContextValue = {
        isModalOpen,
        openModal,
        closeModal,
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    );
};






// import { eventHandlers } from "./script"

interface ModalBlackDropType {
    children?: ReactNode,

}


export default function Modal({ children }: ModalBlackDropType) {

    const { isModalOpen, closeModal } = useContextModal()


    return (

        <div className="Modal" >

            <div className={`${isModalOpen} fixed ModalBlackDrop  top-0 right-0  `} onClick={closeModal} />

            {children}


        </div >

    )
}